"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { validateEmail, validatePassword } from "@/lib/validation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { ShieldIcon } from "@/components/ui/Icons";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    const emailError = validateEmail(email);
    if (emailError) newErrors.email = emailError;

    const passwordError = validatePassword(password);
    if (passwordError) newErrors.password = passwordError;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setServerError("");
    setErrors({});

    const success = await login(email, password);

    if (success) {
      router.push("/dashboard");
    } else {
      setServerError("Invalid email or password. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="absolute inset-0 grid-bg" />
      <div className="relative w-full max-w-md mx-auto px-4 py-16">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <ShieldIcon className="text-cyan-400" size={22} />
            </div>
            <span className="text-xl font-bold text-white">
              Vertex<span className="text-cyan-400">NS</span>
            </span>
          </Link>
          <h1 className="mt-6 text-2xl font-bold text-white">
            Sign in to your account
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Access your network dashboard and security tools
          </p>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-gray-700/50 bg-gray-800/30 p-8">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
              placeholder="you@company.com"
              autoComplete="email"
            />

            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
              placeholder="Enter your password"
              autoComplete="current-password"
            />

            {serverError && (
              <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
                {serverError}
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              isLoading={isLoading}
              className="w-full"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-cyan-400 font-medium hover:text-cyan-300"
              >
                Create one
              </Link>
            </p>
          </div>

          {/* Demo credentials */}
          <div className="mt-6 rounded-lg border border-gray-700/50 bg-gray-900/50 p-4">
            <p className="text-xs font-medium text-gray-400 mb-2">
              Demo Credentials
            </p>
            <p className="text-xs text-gray-500">
              Email: <span className="text-gray-300">admin@vertex.com</span>
            </p>
            <p className="text-xs text-gray-500">
              Password: <span className="text-gray-300">Admin123!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
