import type { Metadata } from "next";
import Link from "next/link";
import { TEAM_MEMBERS } from "@/lib/data";
import {
  ShieldIcon,
  ArrowRightIcon,
  UserIcon,
  CheckCircleIcon,
  GlobeIcon,
  ZapIcon,
  LockIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Vertex Network Solutions — our mission, team, and commitment to enterprise cybersecurity and network infrastructure.",
};

const VALUES = [
  {
    icon: <LockIcon className="text-cyan-400" size={28} />,
    title: "Security First",
    description:
      "Every decision we make prioritizes the security and integrity of our clients' data and infrastructure.",
  },
  {
    icon: <ZapIcon className="text-cyan-400" size={28} />,
    title: "Innovation",
    description:
      "We stay ahead of emerging threats by investing in R&D and adopting cutting-edge security technologies.",
  },
  {
    icon: <GlobeIcon className="text-cyan-400" size={28} />,
    title: "Reliability",
    description:
      "Our 99.99% uptime SLA reflects our commitment to keeping your business operations running without interruption.",
  },
  {
    icon: <CheckCircleIcon className="text-cyan-400" size={28} />,
    title: "Transparency",
    description:
      "We believe in clear communication, honest assessments, and no hidden costs. Our clients always know where they stand.",
  },
];

const MILESTONES = [
  {
    year: "2014",
    title: "Founded",
    description:
      "Vertex Network Solutions was founded in San Francisco with a mission to democratize enterprise security.",
  },
  {
    year: "2017",
    title: "First 100 Clients",
    description:
      "Reached 100 enterprise clients and launched our managed security operations center.",
  },
  {
    year: "2020",
    title: "Cloud Expansion",
    description:
      "Expanded services to include multi-cloud architecture and Kubernetes orchestration.",
  },
  {
    year: "2023",
    title: "SecureNet Launch",
    description:
      "Released SecureNet Router Pro and NetWatch Dashboard, our flagship hardware and software products.",
  },
  {
    year: "2025",
    title: "Global Reach",
    description:
      "Surpassed 500 enterprise clients with operations spanning 40+ countries worldwide.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-800/50">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-400">
              About Vertex
            </span>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
              Building the Future of{" "}
              <span className="gradient-text">Network Security</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              Since 2014, Vertex Network Solutions has been at the forefront of
              enterprise cybersecurity and network infrastructure. We combine
              deep technical expertise with a relentless commitment to our
              clients&apos; security.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Our Mission
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                To make enterprise-grade cybersecurity and networking accessible
                to every business. We believe that robust security shouldn&apos;t
                be a luxury — it&apos;s a necessity in today&apos;s
                threat landscape.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Our team of certified security professionals and network
                engineers works around the clock to design, deploy, and monitor
                infrastructure that keeps our clients ahead of evolving threats.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <p className="text-3xl font-bold text-cyan-400">500+</p>
                  <p className="text-sm text-gray-400">Enterprise Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-cyan-400">120+</p>
                  <p className="text-sm text-gray-400">Security Engineers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-cyan-400">40+</p>
                  <p className="text-sm text-gray-400">Countries Served</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-cyan-400">99.99%</p>
                  <p className="text-sm text-gray-400">Uptime SLA</p>
                </div>
              </div>
            </div>

            {/* Visual Card */}
            <div className="relative rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/30 to-gray-900/50 p-10">
              <div className="absolute inset-0 rounded-2xl grid-bg opacity-30" />
              <div className="relative space-y-8">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                  <ShieldIcon className="text-cyan-400" size={40} />
                </div>
                <blockquote className="text-xl text-gray-300 leading-relaxed italic">
                  &ldquo;Security is not a product, but a process. At Vertex,
                  we engineer that process to be seamless, proactive, and
                  resilient.&rdquo;
                </blockquote>
                <div>
                  <p className="font-semibold text-white">Mohamed Alqubaisi</p>
                  <p className="text-sm text-gray-400">CEO & Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-gray-800/50 bg-gray-900/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-gray-700/50 bg-gray-800/30 p-8 transition-all hover:-translate-y-1 hover:border-cyan-500/20"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  {value.icon}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Key milestones in Vertex&apos;s growth story.
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {MILESTONES.map((milestone, index) => (
              <div
                key={milestone.year}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/30 text-sm font-bold text-cyan-400 shrink-0">
                    {milestone.year.slice(-2)}
                  </div>
                  {index < MILESTONES.length - 1 && (
                    <div className="w-px flex-1 bg-gray-800 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="text-sm font-medium text-cyan-400">
                    {milestone.year}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    {milestone.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-gray-800/50 bg-gray-900/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Leadership Team
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Industry veterans leading the charge in network security.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-gray-700/50 bg-gray-800/30 p-8 text-center transition-all hover:border-cyan-500/20"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20">
                  <UserIcon className="text-cyan-400" size={32} />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-cyan-400">{member.role}</p>
                <p className="mt-3 text-sm text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Join Our Growing Team
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            We&apos;re always looking for talented engineers and security
            professionals who share our passion for building secure
            infrastructure.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-gray-950 shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400"
          >
            Get in Touch
            <ArrowRightIcon size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
