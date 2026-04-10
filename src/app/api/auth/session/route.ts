import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken } from "@/lib/auth";
import type { ApiResponse, User } from "@/types";

export async function GET(
  request: NextRequest
): Promise<NextResponse<ApiResponse<{ user: User }>>> {
  const token = request.cookies.get("session_token")?.value;

  if (!token) {
    return NextResponse.json(
      { success: false, error: "Not authenticated" },
      { status: 401 }
    );
  }

  const user = verifySessionToken(token);

  if (!user) {
    const response = NextResponse.json(
      { success: false, error: "Session expired" },
      { status: 401 }
    );
    response.cookies.delete("session_token");
    return response;
  }

  return NextResponse.json({
    success: true,
    data: { user },
  });
}
