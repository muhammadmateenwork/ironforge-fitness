import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IronForge Fitness — Your Neighborhood Gym",
  description:
    "Transform your body, transform your life. Premium fitness experience for small and medium-sized gyms. Certified trainers, affordable membership, and real results.",
  keywords: [
    "gym",
    "fitness",
    "personal training",
    "weight loss",
    "muscle gain",
    "local gym",
    "fitness center",
    "IronForge",
  ],
  authors: [{ name: "IronForge Fitness" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "IronForge Fitness — Your Neighborhood Gym",
    description:
      "Transform your body, transform your life. Premium fitness experience at your local gym.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
