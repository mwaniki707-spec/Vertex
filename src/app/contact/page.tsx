"use client";

import { useState, type FormEvent } from "react";
import type { Metadata } from "next";
import type { ContactFormData } from "@/types";
import { validateContactForm, sanitizeInput } from "@/lib/validation";
import Input, { Textarea } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  CheckCircleIcon,
  ShieldIcon,
} from "@/components/ui/Icons";

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  company: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const sanitizedForm: ContactFormData = {
      name: sanitizeInput(form.name),
      email: sanitizeInput(form.email),
      company: sanitizeInput(form.company),
      phone: sanitizeInput(form.phone),
      subject: sanitizeInput(form.subject),
      message: sanitizeInput(form.message),
    };

    const validationErrors = validateContactForm(sanitizedForm);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");
    setErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sanitizedForm),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setServerMessage(data.message || "Message sent successfully!");
        setForm(INITIAL_FORM);
      } else {
        setStatus("error");
        setServerMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please try again later.");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-800/50">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-400">
              Contact Us
            </span>
            <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
              Let&apos;s Secure Your{" "}
              <span className="gradient-text">Infrastructure</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              Reach out for a consultation, security assessment, or to learn more
              about our enterprise solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  Our team typically responds within 2 business hours. For
                  urgent security incidents, call our 24/7 hotline.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    <MailIcon className="text-cyan-400" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-sm text-gray-400">
                      contact@vertexns.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    <PhoneIcon className="text-cyan-400" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-sm text-gray-400">+1 (555) 234-5678</p>
                    <p className="text-xs text-gray-500">
                      24/7 Security Hotline
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    <MapPinIcon className="text-cyan-400" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-white">Office</p>
                    <p className="text-sm text-gray-400">
                      456 Cyber Lane, Suite 200
                      <br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="rounded-xl border border-gray-700/50 bg-gray-800/30 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldIcon className="text-cyan-400" size={20} />
                  <span className="text-sm font-semibold text-white">
                    Your data is secure
                  </span>
                </div>
                <ul className="space-y-2">
                  {[
                    "All submissions encrypted in transit",
                    "We never share your information",
                    "SOC 2 Type II compliant",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <CheckCircleIcon
                        className="text-emerald-400 shrink-0"
                        size={14}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-gray-700/50 bg-gray-800/30 p-8 sm:p-10">
                {status === "success" ? (
                  <div className="text-center py-12">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <CheckCircleIcon
                        className="text-emerald-400"
                        size={32}
                      />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white">
                      Message Sent!
                    </h3>
                    <p className="mt-2 text-gray-400">{serverMessage}</p>
                    <Button
                      variant="outline"
                      className="mt-8"
                      onClick={() => setStatus("idle")}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <Input
                        label="Full Name *"
                        name="name"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        error={errors.name}
                        maxLength={100}
                      />
                      <Input
                        label="Email Address *"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={handleChange}
                        error={errors.email}
                        maxLength={254}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <Input
                        label="Company"
                        name="company"
                        placeholder="Acme Corp"
                        value={form.company}
                        onChange={handleChange}
                        error={errors.company}
                        maxLength={100}
                      />
                      <Input
                        label="Phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={handleChange}
                        error={errors.phone}
                        maxLength={20}
                      />
                    </div>

                    <Input
                      label="Subject *"
                      name="subject"
                      placeholder="Security assessment for our network"
                      value={form.subject}
                      onChange={handleChange}
                      error={errors.subject}
                      maxLength={200}
                    />

                    <Textarea
                      label="Message *"
                      name="message"
                      placeholder="Tell us about your security needs, current infrastructure, and goals..."
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      error={errors.message}
                      maxLength={5000}
                    />

                    {status === "error" && (
                      <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
                        {serverMessage}
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      isLoading={status === "sending"}
                      className="w-full sm:w-auto"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
