import { NextResponse } from "next/server";
import type { ApiResponse } from "@/types";

export async function POST(): Promise<NextResponse<ApiResponse>> {
  const response = NextResponse.json({
    success: true,
    message: "Logged out successfully",
  });

  response.cookies.set("session_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0,
    path: "/",
  });

  return response;
}
