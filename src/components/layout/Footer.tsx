import Link from "next/link";
import { ShieldIcon, MailIcon, PhoneIcon, MapPinIcon } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/50 bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <ShieldIcon className="text-cyan-400" size={20} />
              </div>
              <span className="text-lg font-bold text-white">
                Vertex<span className="text-cyan-400">NS</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Enterprise networking, cybersecurity, and cloud infrastructure
              solutions for businesses that demand reliability and security.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Network Architecture",
                "Security & Monitoring",
                "Cloud Deployment",
                "Managed IT Services",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-400 transition-colors hover:text-cyan-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Contact", href: "/contact" },
                { label: "Dashboard", href: "/dashboard" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 transition-colors hover:text-cyan-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MailIcon className="mt-0.5 text-cyan-400 shrink-0" size={16} />
                <span className="text-sm text-gray-400">
                  contact@vertexns.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 text-cyan-400 shrink-0" size={16} />
                <span className="text-sm text-gray-400">+1 (555) 234-5678</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 text-cyan-400 shrink-0" size={16} />
                <span className="text-sm text-gray-400">
                  456 Cyber Lane, Suite 200
                  <br />
                  San Francisco, CA 94102
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800/50 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Vertex Network Solutions. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/contact"
              className="text-sm text-gray-500 transition-colors hover:text-gray-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-500 transition-colors hover:text-gray-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
