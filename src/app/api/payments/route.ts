import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken } from "@/lib/auth";
import { checkRateLimit } from "@/lib/rate-limit";
import { PRODUCTS } from "@/lib/data";
import type { ApiResponse, PaymentIntent } from "@/types";

/**
 * Mock payment intent creation.
 * In production, integrate with Stripe:
 *   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
 *   const paymentIntent = await stripe.paymentIntents.create({...});
 */
export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse<PaymentIntent>>> {
  try {
    const token = request.cookies.get("session_token")?.value;
    if (!token || !verifySessionToken(token)) {
      return NextResponse.json(
        { success: false, error: "Authentication required" },
        { status: 401 }
      );
    }

    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const { allowed } = checkRateLimit(`payment:${ip}`, 3, 60000);

    if (!allowed) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please wait." },
        { status: 429 }
      );
    }

    const { productId } = await request.json();

    if (!productId || typeof productId !== "string") {
      return NextResponse.json(
        { success: false, error: "Product ID is required" },
        { status: 400 }
      );
    }

    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) {
      return NextResponse.json(
        { success: false, error: "Product not found" },
        { status: 404 }
      );
    }

    const mockPaymentIntent: PaymentIntent = {
      id: `pi_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      amount: product.price * 100, // cents
      currency: "usd",
      status: "pending",
      productId: product.id,
    };

    return NextResponse.json({
      success: true,
      data: mockPaymentIntent,
      message: `Payment intent created for ${product.name}`,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
