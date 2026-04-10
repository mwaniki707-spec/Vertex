import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: {
    default: "Vertex Network Solutions | Enterprise Cybersecurity & Networking",
    template: "%s | Vertex Network Solutions",
  },
  description:
    "Enterprise-grade networking, cybersecurity, and cloud infrastructure solutions. Protecting your business with cutting-edge security and reliable network architecture.",
  keywords: [
    "cybersecurity",
    "networking",
    "cloud infrastructure",
    "IT security",
    "enterprise networking",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-gray-950 text-gray-100 antialiased">
        <AuthProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
