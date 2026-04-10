export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  features: string[];
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  company: string;
  role: "admin" | "user";
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface NetworkDevice {
  id: string;
  name: string;
  type: "router" | "switch" | "firewall" | "server" | "endpoint";
  status: "online" | "offline" | "warning";
  ip: string;
  uptime: string;
  traffic: string;
}

export interface Alert {
  id: string;
  type: "critical" | "warning" | "info";
  message: string;
  timestamp: string;
  resolved: boolean;
}

export interface DashboardStats {
  totalDevices: number;
  onlineDevices: number;
  activeAlerts: number;
  networkUptime: string;
  bandwidthUsage: number;
  threatsBlocked: number;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
  status: "pending" | "succeeded" | "failed";
  productId: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}
