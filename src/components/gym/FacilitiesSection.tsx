"use client";

import {
  HeartPulse,
  Dumbbell,
  UserCheck,
  Sparkles,
  Lock,
} from "lucide-react";

const facilities = [
  {
    icon: HeartPulse,
    title: "Cardio Zone",
    description:
      "Treadmills, ellipticals, bikes, and rowing machines — all maintained and ready for your workout.",
  },
  {
    icon: Dumbbell,
    title: "Weight Training Zone",
    description:
      "Full range of free weights, machines, and squat racks. Everything you need for serious strength training.",
  },
  {
    icon: UserCheck,
    title: "Personal Coaching Area",
    description:
      "Dedicated space for one-on-one training sessions with privacy and focus.",
  },
  {
    icon: Sparkles,
    title: "Clean Environment",
    description:
      "Sanitized equipment, fresh air circulation, and spotless floors — hygiene is non-negotiable.",
  },
  {
    icon: Lock,
    title: "Locker Rooms",
    description:
      "Secure lockers with showers and changing areas. Fresh towels available daily.",
  },
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="py-20 sm:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="text-[#E53935] font-semibold text-sm tracking-wider uppercase">
            Our Facilities
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Everything You Need,
            <br />
            <span className="text-[#999]">Nothing You Don&apos;t</span>
          </h2>
          <p className="mt-4 text-[#999] text-base sm:text-lg">
            Clean, well-equipped, and designed for serious training. No fluff —
            just what works.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {facilities.map((facility, index) => (
            <div
              key={facility.title}
              className={`p-6 sm:p-7 rounded-xl bg-[#111] border border-white/5 hover:border-[#E53935]/30 transition-all duration-300 group ${
                index === facilities.length - 1 && facilities.length % 3 === 2
                  ? "sm:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <div className="w-12 h-12 rounded-lg bg-[#E53935]/10 flex items-center justify-center mb-5 group-hover:bg-[#E53935]/20 transition-colors">
                <facility.icon className="w-6 h-6 text-[#E53935]" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {facility.title}
              </h3>
              <p className="text-[#999] text-sm leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
