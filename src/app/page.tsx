import Link from "next/link";
import {
  ShieldIcon,
  NetworkIcon,
  CloudIcon,
  ArrowRightIcon,
  ZapIcon,
  GlobeIcon,
  LockIcon,
  CheckCircleIcon,
} from "@/components/ui/Icons";
import { SERVICES } from "@/lib/data";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  network: <NetworkIcon className="text-cyan-400" size={32} />,
  shield: <ShieldIcon className="text-cyan-400" size={32} />,
  cloud: <CloudIcon className="text-cyan-400" size={32} />,
};

const STATS = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "99.99%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Security Monitoring" },
  { value: "50M+", label: "Threats Blocked" },
];

const FEATURES = [
  {
    icon: <ZapIcon className="text-cyan-400" size={24} />,
    title: "Lightning Fast",
    description: "10Gbps+ throughput with optimized routing and load balancing.",
  },
  {
    icon: <LockIcon className="text-cyan-400" size={24} />,
    title: "Zero Trust Security",
    description:
      "Every access request verified. No implicit trust, ever.",
  },
  {
    icon: <GlobeIcon className="text-cyan-400" size={24} />,
    title: "Global Coverage",
    description:
      "Deploy across 40+ regions with edge computing capabilities.",
  },
  {
    icon: <CheckCircleIcon className="text-cyan-400" size={24} />,
    title: "Compliance Ready",
    description:
      "SOC 2, ISO 27001, HIPAA, and PCI DSS compliance out of the box.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-400">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                Enterprise-Grade Security
              </span>
            </div>

            <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl animate-fade-in-delay-1">
              Secure Your Network.{" "}
              <span className="gradient-text">Defend Your Future.</span>
            </h1>

            <p className="mt-6 text-lg text-gray-400 leading-relaxed sm:text-xl max-w-2xl animate-fade-in-delay-2">
              From network architecture to threat detection, Vertex Network
              Solutions delivers enterprise cybersecurity and infrastructure
              services that keep your business protected and connected.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-in-delay-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-gray-950 shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/30"
              >
                Get a Security Assessment
                <ArrowRightIcon size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-700 px-8 py-4 text-base font-semibold text-gray-300 transition-all hover:border-gray-600 hover:text-white"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-gray-800/50 bg-gray-900/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-cyan-400 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Comprehensive Security Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              End-to-end infrastructure and security services designed for
              enterprise scale and reliability.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group relative rounded-2xl border border-gray-700/50 bg-gray-800/30 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                  {SERVICE_ICONS[service.icon]}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <CheckCircleIcon
                        className="text-cyan-400 shrink-0"
                        size={16}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  Learn more
                  <ArrowRightIcon size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="border-t border-gray-800/50 bg-gray-900/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Why Choose Vertex?
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Built for performance, designed for security, and engineered for
              scale.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-800/50 bg-gray-900/50 p-6 text-center transition-all hover:border-gray-700"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-12 sm:p-16 text-center animate-pulse-glow">
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to Secure Your Infrastructure?
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                Get a free security assessment and discover how Vertex can
                protect your network, data, and business operations.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-gray-950 shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400"
                >
                  Start Free Assessment
                  <ArrowRightIcon size={18} />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-cyan-500/30 px-8 py-4 text-base font-semibold text-cyan-400 transition-all hover:bg-cyan-500/10"
                >
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
