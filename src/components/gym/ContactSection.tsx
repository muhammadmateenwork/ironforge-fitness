"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setSuccess(true);
      setFormData({ name: "", phone: "", message: "" });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="text-[#E53935] font-semibold text-sm tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Ready to Start?
          </h2>
          <p className="mt-4 text-[#999] text-base sm:text-lg">
            Have a question or want to join? Drop us a message and we&apos;ll
            get back to you within 24 hours.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-[#E53935]/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#E53935]" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Phone</h3>
                <a
                  href="tel:+923001234567"
                  className="text-[#999] text-sm hover:text-[#E53935] transition-colors"
                >
                  +92 300 123 4567
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-[#E53935]/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#E53935]" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <a
                  href="mailto:hello@ironforgefitness.com"
                  className="text-[#999] text-sm hover:text-[#E53935] transition-colors"
                >
                  hello@ironforgefitness.com
                </a>
              </div>
            </div>

            <div className="mt-8 p-5 rounded-xl bg-[#111] border border-white/5">
              <p className="text-white font-semibold text-sm mb-2">
                Free Trial Pass
              </p>
              <p className="text-[#999] text-sm leading-relaxed">
                Not sure yet? Come in for a free one-day pass. Experience the
                gym before you commit.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-[#111] border border-white/5 p-6 sm:p-8 space-y-5"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-[#999] mb-2"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full h-12 px-4 bg-[#1A1A1A] border border-white/10 rounded-xl text-white placeholder-[#555] focus:outline-none focus:border-[#E53935]/50 focus:ring-1 focus:ring-[#E53935]/50 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-sm font-medium text-[#999] mb-2"
                >
                  Phone
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="w-full h-12 px-4 bg-[#1A1A1A] border border-white/10 rounded-xl text-white placeholder-[#555] focus:outline-none focus:border-[#E53935]/50 focus:ring-1 focus:ring-[#E53935]/50 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-[#999] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Tell us about your fitness goals..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-white/10 rounded-xl text-white placeholder-[#555] focus:outline-none focus:border-[#E53935]/50 focus:ring-1 focus:ring-[#E53935]/50 transition-all resize-none"
                />
              </div>

              {error && (
                <p className="text-sm text-[#E53935]">{error}</p>
              )}

              {success && (
                <div className="flex items-center gap-2 text-[#66BB6A] text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>
                    Message sent successfully! We&apos;ll get back to you soon.
                  </span>
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#E53935] hover:bg-[#FF5252] text-white font-semibold h-12 rounded-xl disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
