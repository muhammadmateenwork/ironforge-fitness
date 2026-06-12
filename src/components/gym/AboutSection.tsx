"use client";

import { Shield, Clock, Award, Banknote } from "lucide-react";

const whyUs = [
  {
    icon: Banknote,
    title: "Affordable Membership",
    description:
      "Premium facilities without the premium price tag. Flexible plans that fit your budget.",
  },
  {
    icon: Award,
    title: "Certified Trainers",
    description:
      "Our trainers hold nationally recognized certifications and years of real coaching experience.",
  },
  {
    icon: Shield,
    title: "Clean Environment",
    description:
      "A spotless, well-maintained gym is our standard. Your health and comfort always come first.",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description:
      "Open early, close late. Train on your schedule — morning, noon, or night.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text */}
          <div>
            <span className="text-[#E53935] font-semibold text-sm tracking-wider uppercase">
              About Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              More Than a Gym.
              <br />
              <span className="text-[#999]">Your Fitness Home.</span>
            </h2>
            <p className="mt-5 text-[#999] leading-relaxed text-base sm:text-lg">
              IronForge Fitness is your neighborhood gym — built for people who
              want real results without the intimidation of big-box chains. We
              keep it simple: great equipment, expert coaching, and a community
              that actually cares about your progress.
            </p>
            <p className="mt-4 text-[#999] leading-relaxed text-base sm:text-lg">
              Whether you&apos;re just starting out or pushing toward your next
              milestone, this is the place where you belong.
            </p>
          </div>

          {/* Right - Why Choose Us Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="p-5 sm:p-6 rounded-xl bg-[#111] border border-white/5 hover:border-[#E53935]/30 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-lg bg-[#E53935]/10 flex items-center justify-center mb-4 group-hover:bg-[#E53935]/20 transition-colors">
                  <item.icon className="w-5 h-5 text-[#E53935]" />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-[#999] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
