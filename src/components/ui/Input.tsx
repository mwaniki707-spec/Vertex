"use client";

import { type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className = "",
  id,
  ...props
}: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-300"
      >
        {label}
      </label>
      <input
        id={inputId}
        className={`
          w-full rounded-lg border bg-gray-800/50 px-4 py-3
          text-gray-100 placeholder-gray-500
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-gray-900
          ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-600 focus:border-cyan-500 focus:ring-cyan-500"
          }
          ${className}
        `}
        {...props}
      />
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
}

export function Textarea({
  label,
  error,
  className = "",
  id,
  ...props
}: TextareaProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-300"
      >
        {label}
      </label>
      <textarea
        id={inputId}
        className={`
          w-full rounded-lg border bg-gray-800/50 px-4 py-3
          text-gray-100 placeholder-gray-500 resize-none
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-gray-900
          ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-600 focus:border-cyan-500 focus:ring-cyan-500"
          }
          ${className}
        `}
        {...props}
      />
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
}
