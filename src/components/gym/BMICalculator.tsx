"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calculator, Activity } from "lucide-react";

interface BMIResult {
  value: number;
  category: string;
  color: string;
  recommendation: string;
}

function calculateBMI(heightCm: number, weightKg: number): BMIResult | null {
  if (!heightCm || !weightKg || heightCm <= 0 || weightKg <= 0) return null;

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  const value = Math.round(bmi * 10) / 10;

  if (bmi < 18.5) {
    return {
      value,
      category: "Underweight",
      color: "#42A5F5",
      recommendation:
        "Consider a nutrition-rich diet with strength training to build healthy muscle mass. Our trainers can help design a personalized plan.",
    };
  } else if (bmi < 25) {
    return {
      value,
      category: "Normal Weight",
      color: "#66BB6A",
      recommendation:
        "Great job maintaining a healthy weight! Stay consistent with regular exercise and balanced nutrition to keep it up.",
    };
  } else if (bmi < 30) {
    return {
      value,
      category: "Overweight",
      color: "#FFA726",
      recommendation:
        "A combination of cardio and strength training can help. Our weight loss programs are designed to help you reach a healthier range.",
    };
  } else {
    return {
      value,
      category: "Obese",
      color: "#E53935",
      recommendation:
        "We recommend starting with our personal training program for safe, guided fitness. Our certified trainers will help you every step of the way.",
    };
  }
}

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<BMIResult | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    setError("");
    setResult(null);

    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w) {
      setError("Please enter both height and weight.");
      return;
    }

    if (h < 50 || h > 300) {
      setError("Please enter a valid height (50–300 cm).");
      return;
    }

    if (w < 10 || w > 500) {
      setError("Please enter a valid weight (10–500 kg).");
      return;
    }

    const bmiResult = calculateBMI(h, w);
    setResult(bmiResult);
  };

  const handleReset = () => {
    setHeight("");
    setWeight("");
    setResult(null);
    setError("");
  };

  return (
    <section id="bmi" className="py-20 sm:py-28 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="text-[#E53935] font-semibold text-sm tracking-wider uppercase">
            Health Check
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            BMI Calculator
          </h2>
          <p className="mt-4 text-[#999] text-base sm:text-lg">
            Know your Body Mass Index and get a quick health snapshot. It takes
            seconds.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl bg-[#111] border border-white/5 p-6 sm:p-10">
            {/* Inputs */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="height"
                  className="block text-sm font-medium text-[#999] mb-2"
                >
                  Height (cm)
                </label>
                <div className="relative">
                  <input
                    id="height"
                    type="number"
                    placeholder="e.g., 175"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full h-12 px-4 bg-[#1A1A1A] border border-white/10 rounded-xl text-white placeholder-[#555] focus:outline-none focus:border-[#E53935]/50 focus:ring-1 focus:ring-[#E53935]/50 transition-all"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="weight"
                  className="block text-sm font-medium text-[#999] mb-2"
                >
                  Weight (kg)
                </label>
                <div className="relative">
                  <input
                    id="weight"
                    type="number"
                    placeholder="e.g., 70"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full h-12 px-4 bg-[#1A1A1A] border border-white/10 rounded-xl text-white placeholder-[#555] focus:outline-none focus:border-[#E53935]/50 focus:ring-1 focus:ring-[#E53935]/50 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Error */}
            {error && (
              <p className="mt-4 text-sm text-[#E53935]">{error}</p>
            )}

            {/* Buttons */}
            <div className="mt-6 flex gap-3">
              <Button
                onClick={handleCalculate}
                className="flex-1 bg-[#E53935] hover:bg-[#FF5252] text-white font-semibold h-12 rounded-xl"
              >
                <Calculator className="mr-2 w-4 h-4" />
                Calculate BMI
              </Button>
              <Button
                onClick={handleReset}
                variant="outline"
                className="border-white/10 text-[#999] hover:text-white hover:bg-white/5 h-12 rounded-xl"
              >
                Reset
              </Button>
            </div>

            {/* Result */}
            {result && (
              <div className="mt-8 p-6 rounded-xl bg-[#0A0A0A] border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="w-5 h-5" style={{ color: result.color }} />
                  <span className="text-sm font-medium text-[#999]">
                    Your Result
                  </span>
                </div>

                <div className="flex items-baseline gap-3 mb-2">
                  <span
                    className="text-4xl sm:text-5xl font-bold"
                    style={{ color: result.color }}
                  >
                    {result.value}
                  </span>
                  <span
                    className="text-lg font-semibold"
                    style={{ color: result.color }}
                  >
                    {result.category}
                  </span>
                </div>

                {/* BMI Scale */}
                <div className="mt-4 mb-4">
                  <div className="h-2 rounded-full bg-[#1A1A1A] overflow-hidden flex">
                    <div className="h-full bg-[#42A5F5] w-[25%]" />
                    <div className="h-full bg-[#66BB6A] w-[25%]" />
                    <div className="h-full bg-[#FFA726] w-[25%]" />
                    <div className="h-full bg-[#E53935] w-[25%]" />
                  </div>
                  <div className="flex justify-between mt-1.5 text-[10px] text-[#555]">
                    <span>Underweight</span>
                    <span>Normal</span>
                    <span>Overweight</span>
                    <span>Obese</span>
                  </div>
                </div>

                <p className="text-[#999] text-sm leading-relaxed mt-4">
                  {result.recommendation}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
