"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
  validateEmail,
  validatePassword,
  validateName,
  sanitizeInput,
} from "@/lib/validation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { ShieldIcon } from "@/components/ui/Icons";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    const nameError = validateName(name);
    if (nameError) newErrors.name = nameError;

    const emailError = validateEmail(email);
    if (emailError) newErrors.email = emailError;

    const passwordError = validatePassword(password);
    if (passwordError) newErrors.password = passwordError;

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setServerError("");
    setErrors({});

    const success = await register(
      sanitizeInput(email),
      password,
      sanitizeInput(name),
      sanitizeInput(company)
    );

    if (success) {
      router.push("/dashboard");
    } else {
      setServerError(
        "An account with this email already exists, or registration failed."
      );
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
            Create your account
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Start monitoring and securing your network today
          </p>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-gray-700/50 bg-gray-800/30 p-8">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <Input
              label="Full Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={errors.name}
              placeholder="John Doe"
              maxLength={100}
            />

            <Input
              label="Email *"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
              placeholder="you@company.com"
              autoComplete="email"
            />

            <Input
              label="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Acme Corp"
              maxLength={100}
            />

            <Input
              label="Password *"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
              placeholder="Min 8 chars, uppercase, lowercase, number"
              autoComplete="new-password"
            />

            <Input
              label="Confirm Password *"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={errors.confirmPassword}
              placeholder="Repeat your password"
              autoComplete="new-password"
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
              Create Account
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-cyan-400 font-medium hover:text-cyan-300"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
