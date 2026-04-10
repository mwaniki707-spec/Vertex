"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { NAV_LINKS } from "@/lib/data";
import { MenuIcon, XIcon, ShieldIcon, UserIcon, LogOutIcon } from "@/components/ui/Icons";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const { isAuthenticated, user, logout } = useAuth();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
              <ShieldIcon className="text-cyan-400" size={20} />
            </div>
            <span className="text-lg font-bold text-white">
              Vertex<span className="text-cyan-400">NS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-cyan-500/10 text-cyan-400"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex md:items-center md:gap-3">
            {isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 rounded-lg bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400 transition-colors hover:bg-cyan-500/20"
                >
                  <UserIcon size={16} />
                  {user?.name?.split(" ")[0]}
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <LogOutIcon size={16} />
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-gray-950 transition-colors hover:bg-cyan-400"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-400 md:hidden hover:bg-white/5 hover:text-white"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="border-t border-gray-800/50 bg-gray-950/95 backdrop-blur-xl md:hidden">
          <div className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-cyan-500/10 text-cyan-400"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-gray-800 pt-4 mt-4 space-y-2">
              {isAuthenticated ? (
                <>
                  <Link
                    href="/dashboard"
                    onClick={() => setIsMobileOpen(false)}
                    className="block rounded-lg bg-cyan-500/10 px-4 py-3 text-sm font-medium text-cyan-400"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMobileOpen(false);
                    }}
                    className="block w-full rounded-lg px-4 py-3 text-left text-sm text-gray-400 hover:text-white"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setIsMobileOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-300"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setIsMobileOpen(false)}
                    className="block rounded-lg bg-cyan-500 px-4 py-3 text-center text-sm font-semibold text-gray-950"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
