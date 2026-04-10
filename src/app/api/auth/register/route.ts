import { NextRequest, NextResponse } from "next/server";
import { registerUser, createSessionToken } from "@/lib/auth";
import {
  validateEmail,
  validatePassword,
  validateName,
  sanitizeInput,
  containsDangerousContent,
} from "@/lib/validation";
import { checkRateLimit } from "@/lib/rate-limit";
import type { ApiResponse, User } from "@/types";

export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse<{ user: User }>>> {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const { allowed } = checkRateLimit(`register:${ip}`, 5, 300000);

    if (!allowed) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many registration attempts. Try again later.",
        },
        { status: 429 }
      );
    }

    const { email, password, name, company } = await request.json();

    const errors: Record<string, string> = {};

    const nameError = validateName(name || "");
    if (nameError) errors.name = nameError;

    const emailError = validateEmail(email || "");
    if (emailError) errors.email = emailError;

    const passwordError = validatePassword(password || "");
    if (passwordError) errors.password = passwordError;

    if (company && containsDangerousContent(company)) {
      errors.company = "Company name contains invalid content";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, error: "Validation failed" },
        { status: 400 }
      ) as NextResponse<ApiResponse<{ user: User }>>;
    }

    const user = registerUser(
      sanitizeInput(email),
      password,
      sanitizeInput(name),
      sanitizeInput(company || "")
    );

    if (!user) {
      return NextResponse.json(
        { success: false, error: "An account with this email already exists" },
        { status: 409 }
      );
    }

    const token = createSessionToken(user);

    const response = NextResponse.json({
      success: true,
      data: { user },
      message: "Registration successful",
    });

    response.cookies.set("session_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 86400,
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
