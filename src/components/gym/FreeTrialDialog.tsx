"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CalendarCheck, CheckCircle, User, Phone } from "lucide-react";

interface FreeTrialDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function FreeTrialDialog({
  open,
  onOpenChange,
}: FreeTrialDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredDay: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: `FREE TRIAL REQUEST — Preferred Day: ${formData.preferredDay || "Any day"}`,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setSuccess(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to submit");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset after dialog closes
    setTimeout(() => {
      setFormData({ name: "", phone: "", preferredDay: "" });
      setSuccess(false);
      setError("");
    }, 200);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-[#111] border-white/10 text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl text-white">
            <CalendarCheck className="w-5 h-5 text-[#E53935]" />
            Book Your Free Trial
          </DialogTitle>
          <DialogDescription className="text-[#999]">
            Try IronForge Fitness for a full day — absolutely free. No
            commitment, no pressure.
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#66BB6A]/10 flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-[#66BB6A]" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">
              You&apos;re Booked! 🎉
            </h3>
            <p className="text-[#999] text-sm mb-6">
              We&apos;ll call you shortly to confirm your free trial day. Get
              ready to crush it!
            </p>
            <Button
              onClick={handleClose}
              className="bg-[#E53935] hover:bg-[#FF5252] text-white font-semibold h-11 rounded-xl px-6"
            >
              Sounds Great!
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div>
              <label
                htmlFor="trial-name"
                className="block text-sm font-medium text-[#999] mb-2"
              >
                <User className="w-3.5 h-3.5 inline mr-1.5" />
                Full Name
              </label>
              <input
                id="trial-name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full h-11 px-4 bg-[#1A1A1A] border border-white/10 rounded-lg text-white placeholder-[#555] focus:outline-none focus:border-[#E53935]/50 focus:ring-1 focus:ring-[#E53935]/50 transition-all text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="trial-phone"
                className="block text-sm font-medium text-[#999] mb-2"
              >
                <Phone className="w-3.5 h-3.5 inline mr-1.5" />
                Phone Number
              </label>
              <input
                id="trial-phone"
                type="tel"
                placeholder="We'll call to confirm"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                className="w-full h-11 px-4 bg-[#1A1A1A] border border-white/10 rounded-lg text-white placeholder-[#555] focus:outline-none focus:border-[#E53935]/50 focus:ring-1 focus:ring-[#E53935]/50 transition-all text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="trial-day"
                className="block text-sm font-medium text-[#999] mb-2"
              >
                <CalendarCheck className="w-3.5 h-3.5 inline mr-1.5" />
                Preferred Day
              </label>
              <select
                id="trial-day"
                value={formData.preferredDay}
                onChange={(e) =>
                  setFormData({ ...formData, preferredDay: e.target.value })
                }
                className="w-full h-11 px-4 bg-[#1A1A1A] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#E53935]/50 focus:ring-1 focus:ring-[#E53935]/50 transition-all text-sm appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#1A1A1A]">
                  Any day works for me
                </option>
                <option value="Monday" className="bg-[#1A1A1A]">
                  Monday
                </option>
                <option value="Tuesday" className="bg-[#1A1A1A]">
                  Tuesday
                </option>
                <option value="Wednesday" className="bg-[#1A1A1A]">
                  Wednesday
                </option>
                <option value="Thursday" className="bg-[#1A1A1A]">
                  Thursday
                </option>
                <option value="Friday" className="bg-[#1A1A1A]">
                  Friday
                </option>
                <option value="Saturday" className="bg-[#1A1A1A]">
                  Saturday
                </option>
                <option value="Sunday" className="bg-[#1A1A1A]">
                  Sunday
                </option>
              </select>
            </div>

            {error && <p className="text-sm text-[#E53935]">{error}</p>}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#E53935] hover:bg-[#FF5252] text-white font-semibold h-11 rounded-xl disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Booking...
                </span>
              ) : (
                "Claim My Free Day Pass"
              )}
            </Button>

            <p className="text-[#555] text-xs text-center">
              No payment required. Just show up and work out.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
