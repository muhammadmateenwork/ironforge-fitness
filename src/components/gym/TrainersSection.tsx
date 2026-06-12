"use client";

import Image from "next/image";

const trainers = [
  {
    name: "Marcus Johnson",
    specialty: "Strength & Conditioning",
    image: "/gym/trainer-1.png",
  },
  {
    name: "Sarah Kim",
    specialty: "HIIT & Cardio Training",
    image: "/gym/trainer-2.png",
  },
  {
    name: "David Chen",
    specialty: "Muscle Building & Nutrition",
    image: "/gym/trainer-3.png",
  },
  {
    name: "Emily Rodriguez",
    specialty: "Flexibility & Group Fitness",
    image: "/gym/trainer-4.png",
  },
];

export default function TrainersSection() {
  return (
    <section id="trainers" className="py-20 sm:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="text-[#E53935] font-semibold text-sm tracking-wider uppercase">
            Meet the Team
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Your Coaches, Your Edge
          </h2>
          <p className="mt-4 text-[#999] text-base sm:text-lg">
            Certified professionals who are passionate about helping you become
            your strongest self.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="group rounded-xl overflow-hidden bg-[#111] border border-white/5 hover:border-[#E53935]/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="p-5 -mt-8 relative z-10">
                <h3 className="text-white font-semibold text-lg">
                  {trainer.name}
                </h3>
                <p className="text-[#E53935] text-sm font-medium mt-1">
                  {trainer.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
