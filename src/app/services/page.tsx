import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import {
  NetworkIcon,
  ShieldIcon,
  CloudIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Enterprise networking, cybersecurity monitoring, and cloud deployment services from Vertex Network Solutions.",
};

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  network: <NetworkIcon className="text-cyan-400" size={40} />,
  shield: <ShieldIcon className="text-cyan-400" size={40} />,
  cloud: <CloudIcon className="text-cyan-400" size={40} />,
};

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Assessment",
    description:
      "We analyze your current infrastructure, identify vulnerabilities, and map your requirements.",
  },
  {
    step: "02",
    title: "Architecture",
    description:
      "Our engineers design a tailored solution with redundancy, security, and scalability built in.",
  },
  {
    step: "03",
    title: "Deployment",
    description:
      "We implement the solution with zero-downtime migration and thorough testing at every phase.",
  },
  {
    step: "04",
    title: "Monitoring",
    description:
      "24/7 proactive monitoring, regular audits, and continuous optimization of your infrastructure.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-800/50">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-400">
              Our Services
            </span>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
              Enterprise Infrastructure &{" "}
              <span className="gradient-text">Security Services</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              From network architecture to advanced threat detection, we provide
              the complete stack of services your business needs to stay
              connected, compliant, and secure.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col gap-12 lg:flex-row lg:items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                    {SERVICE_ICONS[service.icon]}
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <CheckCircleIcon
                          className="mt-0.5 text-cyan-400 shrink-0"
                          size={18}
                        />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
                  >
                    Get a quote
                    <ArrowRightIcon size={16} />
                  </Link>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <div className="relative rounded-2xl border border-gray-700/50 bg-gray-800/30 p-8 lg:p-12">
                    <div className="absolute inset-0 rounded-2xl grid-bg opacity-30" />
                    <div className="relative space-y-4">
                      {service.features.map((feature, i) => (
                        <div
                          key={feature}
                          className="flex items-center gap-4 rounded-lg border border-gray-700/30 bg-gray-900/50 px-4 py-3"
                          style={{
                            animationDelay: `${i * 100}ms`,
                          }}
                        >
                          <div
                            className={`h-2 w-2 rounded-full ${
                              i < 4 ? "bg-emerald-400" : "bg-cyan-400"
                            }`}
                          />
                          <span className="text-sm text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-gray-800/50 bg-gray-900/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Our Process
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              A proven methodology that delivers results — every time.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="relative">
                <div className="text-5xl font-bold text-cyan-500/10">
                  {step.step}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need a Custom Solution?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Our engineering team will design an infrastructure solution tailored
            to your specific business requirements.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-gray-950 shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400"
          >
            Contact Our Team
            <ArrowRightIcon size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
