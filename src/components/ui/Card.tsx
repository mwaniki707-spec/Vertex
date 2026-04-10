import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = false,
  glow = false,
}: CardProps) {
  return (
    <div
      className={`
        relative rounded-2xl border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm
        ${hover ? "transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5" : ""}
        ${glow ? "shadow-lg shadow-cyan-500/10" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`border-b border-gray-700/50 p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardBody({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
