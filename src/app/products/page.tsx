import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/lib/data";
import {
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldIcon,
  ServerIcon,
  WifiIcon,
} from "@/components/ui/Icons";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Enterprise networking and security products from Vertex Network Solutions — routers, dashboards, and office connectivity kits.",
};

const PRODUCT_ICONS: Record<string, React.ReactNode> = {
  "securenet-router-pro": <ShieldIcon className="text-cyan-400" size={48} />,
  "netwatch-dashboard": <ServerIcon className="text-cyan-400" size={48} />,
  "officeconnect-starter": <WifiIcon className="text-cyan-400" size={48} />,
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-800/50">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-400">
              Products
            </span>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
              Hardware & Software{" "}
              <span className="gradient-text">Built for Security</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              Purpose-built networking and security products designed to
              integrate seamlessly with your existing infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {PRODUCTS.map((product, index) => (
              <div
                key={product.id}
                className={`flex flex-col gap-12 lg:flex-row lg:items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Product Visual */}
                <div className="flex-1">
                  <div className="relative rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-12 flex items-center justify-center min-h-[320px]">
                    <div className="absolute inset-0 rounded-2xl grid-bg opacity-20" />
                    <div className="relative animate-float">
                      <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-cyan-500/10 border border-cyan-500/20 animate-pulse-glow">
                        {PRODUCT_ICONS[product.id]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-3">
                    <Badge
                      variant={
                        product.category === "Hardware"
                          ? "info"
                          : product.category === "Software"
                            ? "success"
                            : "warning"
                      }
                    >
                      {product.category}
                    </Badge>
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    {product.name}
                  </h2>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-cyan-400">
                      ${product.price.toLocaleString()}
                    </span>
                    <span className="text-gray-500">
                      {product.category === "Software"
                        ? "/year"
                        : "one-time"}
                    </span>
                  </div>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        <CheckCircleIcon
                          className="mt-0.5 text-cyan-400 shrink-0"
                          size={16}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-gray-950 shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400"
                    >
                      Request Quote
                      <ArrowRightIcon size={16} />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-6 py-3 text-sm font-medium text-gray-300 transition-all hover:border-gray-500 hover:text-white"
                    >
                      Schedule Demo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison / CTA */}
      <section className="border-t border-gray-800/50 bg-gray-900/20 py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Not Sure Which Product Fits?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Our solutions architects will help you choose the right combination
            of hardware and software for your specific needs.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-gray-950 shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400"
          >
            Talk to an Expert
            <ArrowRightIcon size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
