"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarCheck } from "lucide-react";
import FreeTrialDialog from "./FreeTrialDialog";

export default function HeroSection() {
  const [trialOpen, setTrialOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/gym/hero-bg.png')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 sm:mb-8">
            <div className="w-2 h-2 rounded-full bg-[#E53935] animate-pulse" />
            <span className="text-xs sm:text-sm text-[#999] font-medium">
              Now Open — Your Neighborhood Gym
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
            Transform Your
            <br />
            Body,{" "}
            <span className="text-[#E53935]">Transform</span>
            <br />
            Your Life
          </h1>

          {/* Subheading */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#999] max-w-lg leading-relaxed">
            Your local gym with world-class equipment, certified trainers, and a
            community that pushes you forward. No contracts. No excuses.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#E53935] hover:bg-[#FF5252] text-white font-semibold text-base px-8 h-12 sm:h-14 rounded-xl group"
            >
              <a href="#contact">
                Join Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              onClick={() => setTrialOpen(true)}
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 hover:text-white font-semibold text-base px-8 h-12 sm:h-14 rounded-xl group"
            >
              <CalendarCheck className="mr-2 w-4 h-4" />
              Book a Free Trial
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 sm:mt-16 flex gap-8 sm:gap-12">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                500+
              </div>
              <div className="text-xs sm:text-sm text-[#999] mt-1">
                Active Members
              </div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                8+
              </div>
              <div className="text-xs sm:text-sm text-[#999] mt-1">
                Expert Trainers
              </div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                5+
              </div>
              <div className="text-xs sm:text-sm text-[#999] mt-1">
                Years Running
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
        </div>
      </div>

      {/* Free Trial Dialog */}
      <FreeTrialDialog open={trialOpen} onOpenChange={setTrialOpen} />
    </section>
  );
}
