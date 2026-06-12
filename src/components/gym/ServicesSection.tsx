"use client";

import { Flame, Dumbbell, User, Users } from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Weight Loss Programs",
    description:
      "Structured fat-burning programs combining cardio, strength training, and nutrition guidance to help you shed pounds effectively.",
    tag: "Popular",
  },
  {
    icon: Dumbbell,
    title: "Muscle Gain Training",
    description:
      "Progressive overload training plans designed to build lean muscle mass with proper form, technique, and recovery protocols.",
    tag: null,
  },
  {
    icon: User,
    title: "Personal Training",
    description:
      "One-on-one coaching tailored to your goals. Get personalized workout plans, form correction, and accountability.",
    tag: "1-on-1",
  },
  {
    icon: Users,
    title: "Group Classes",
    description:
      "High-energy group sessions including HIIT, circuit training, and functional fitness. Fun, motivating, and effective.",
    tag: null,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="text-[#E53935] font-semibold text-sm tracking-wider uppercase">
            What We Offer
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Programs That Deliver Results
          </h2>
          <p className="mt-4 text-[#999] text-base sm:text-lg">
            No fluff. No gimmicks. Just proven training programs designed to help
            you reach your fitness goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative p-6 rounded-xl bg-[#111] border border-white/5 hover:border-[#E53935]/30 transition-all duration-300 group"
            >
              {service.tag && (
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider bg-[#E53935]/10 text-[#E53935] px-2 py-1 rounded-md">
                  {service.tag}
                </span>
              )}
              <div className="w-12 h-12 rounded-lg bg-[#E53935]/10 flex items-center justify-center mb-5 group-hover:bg-[#E53935]/20 transition-colors">
                <service.icon className="w-6 h-6 text-[#E53935]" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">
                {service.title}
              </h3>
              <p className="text-[#999] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
