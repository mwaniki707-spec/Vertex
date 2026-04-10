import { NextRequest, NextResponse } from "next/server";
import { validateContactForm, sanitizeInput } from "@/lib/validation";
import { checkRateLimit } from "@/lib/rate-limit";
import type { ContactFormData, ApiResponse } from "@/types";

export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse>> {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const { allowed, remaining, resetIn } = checkRateLimit(
      `contact:${ip}`,
      5,
      60000
    );

    if (!allowed) {
      return NextResponse.json(
        {
          success: false,
          error: `Too many requests. Try again in ${Math.ceil(resetIn / 1000)} seconds.`,
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Remaining": String(remaining),
            "X-RateLimit-Reset": String(Math.ceil(resetIn / 1000)),
          },
        }
      );
    }

    const body = await request.json();

    const sanitized: ContactFormData = {
      name: sanitizeInput(body.name || ""),
      email: sanitizeInput(body.email || ""),
      company: sanitizeInput(body.company || ""),
      phone: sanitizeInput(body.phone || ""),
      subject: sanitizeInput(body.subject || ""),
      message: sanitizeInput(body.message || ""),
    };

    const errors = validateContactForm(sanitized);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, error: "Validation failed", data: errors },
        { status: 400 }
      );
    }

    // In production, send email or store in database here
    console.log("Contact form submission:", sanitized);

    return NextResponse.json({
      success: true,
      message:
        "Thank you for your message! Our team will respond within 2 business hours.",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body" },
      { status: 400 }
    );
  }
}
