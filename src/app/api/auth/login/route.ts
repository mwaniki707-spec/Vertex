import { NextRequest, NextResponse } from "next/server";
import { authenticateUser, createSessionToken } from "@/lib/auth";
import { validateEmail } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rate-limit";
import type { ApiResponse, User } from "@/types";

export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse<{ user: User }>>> {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const { allowed } = checkRateLimit(`login:${ip}`, 10, 60000);

    if (!allowed) {
      return NextResponse.json(
        { success: false, error: "Too many login attempts. Try again later." },
        { status: 429 }
      );
    }

    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required" },
        { status: 400 }
      );
    }

    const emailError = validateEmail(email);
    if (emailError) {
      return NextResponse.json(
        { success: false, error: emailError },
        { status: 400 }
      );
    }

    const user = authenticateUser(email, password);

    if (!user) {
      return NextResponse.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = createSessionToken(user);

    const response = NextResponse.json({
      success: true,
      data: { user },
      message: "Login successful",
    });

    response.cookies.set("session_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 86400, // 24 hours
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
