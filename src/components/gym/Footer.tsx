"use client";

import { Dumbbell, Instagram, Facebook, MessageCircle } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#trainers", label: "Trainers" },
  { href: "#facilities", label: "Facilities" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#E53935] rounded-lg flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight leading-none">
                  IRONFORGE
                </span>
                <span className="text-[10px] text-[#E53935] font-semibold tracking-[0.2em] leading-none mt-0.5">
                  FITNESS
                </span>
              </div>
            </a>
            <p className="text-[#999] text-sm leading-relaxed max-w-xs">
              Your neighborhood gym. Built for real people who want real
              results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#999] text-sm hover:text-[#E53935] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2.5 text-[#999] text-sm">
              <li>
                <a
                  href="tel:+923001234567"
                  className="hover:text-[#E53935] transition-colors"
                >
                  +92 300 123 4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@ironforgefitness.com"
                  className="hover:text-[#E53935] transition-colors"
                >
                  hello@ironforgefitness.com
                </a>
              </li>
              <li>42 Fitness Avenue, Downtown, Lahore</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-[#999] hover:text-white hover:bg-[#E53935]/10 hover:border-[#E53935]/30 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-[#999] hover:text-white hover:bg-[#E53935]/10 hover:border-[#E53935]/30 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-[#999] hover:text-white hover:bg-[#E53935]/10 hover:border-[#E53935]/30 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#555] text-sm">
            &copy; {new Date().getFullYear()} IronForge Fitness. All rights
            reserved.
          </p>
          <p className="text-[#555] text-xs">
            Designed for small gyms that want a big impact.
          </p>
        </div>
      </div>
    </footer>
  );
}
