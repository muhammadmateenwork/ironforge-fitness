"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Clock, Navigation } from "lucide-react";

export default function LocationSection() {
  const gymAddress = "42 Fitness Avenue, Downtown, Lahore 54000, Pakistan";
  const gymCoords = { lat: 31.5497, lng: 74.3436 };
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${gymCoords.lat},${gymCoords.lng}`;
  const embedMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.0!2d${gymCoords.lng}!3d${gymCoords.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMyJzU4LjkiTiA3NMKwMjAnMzcuMCJF!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s`;

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="text-[#E53935] font-semibold text-sm tracking-wider uppercase">
            Find Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Come Visit Us
          </h2>
          <p className="mt-4 text-[#999] text-base sm:text-lg">
            We&apos;re right in your neighborhood. Drop by for a tour — no
            appointment needed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Embedded Map */}
          <div className="rounded-2xl overflow-hidden border border-white/5 h-[300px] sm:h-[400px] lg:h-auto">
            <iframe
              src={embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IronForge Fitness Location"
              className="grayscale-[60%] contrast-[1.1] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </div>

          {/* Info Card */}
          <div className="rounded-2xl bg-[#111] border border-white/5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#E53935]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    IronForge Fitness
                  </h3>
                  <p className="text-[#999] text-sm leading-relaxed">
                    {gymAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#E53935]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#E53935]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    Opening Hours
                  </h3>
                  <div className="text-[#999] text-sm space-y-0.5">
                    <p>Mon – Sat: 5:00 AM – 11:00 PM</p>
                    <p>Sunday: 6:00 AM – 9:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Quick Directions */}
              <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/5 mb-6">
                <p className="text-white font-medium text-sm mb-1">
                  📍 Easy to Find
                </p>
                <p className="text-[#999] text-sm leading-relaxed">
                  Located on Fitness Avenue, right next to City Center Mall.
                  Free parking available.
                </p>
              </div>
            </div>

            <Button
              asChild
              className="bg-[#E53935] hover:bg-[#FF5252] text-white font-semibold h-12 rounded-xl px-6 group w-full sm:w-auto"
            >
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <Navigation className="mr-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                Open in Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
