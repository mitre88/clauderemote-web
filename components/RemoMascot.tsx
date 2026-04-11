"use client";

import { useEffect, useState } from "react";

type MoodState = "idle" | "happy" | "thinking" | "excited";

interface RemoMascotProps {
  size?: number;
  mood?: MoodState;
  className?: string;
}

const moodStyles: Record<
  MoodState,
  {
    glow: string;
    rotation: number;
    scale: number;
    glowRadius: number;
    accent: string;
  }
> = {
  idle: {
    glow: "rgba(255, 140, 0, 0.35)",
    rotation: 0,
    scale: 1.0,
    glowRadius: 40,
    accent: "#FF8C00",
  },
  happy: {
    glow: "rgba(76, 175, 80, 0.4)",
    rotation: -3,
    scale: 1.04,
    glowRadius: 52,
    accent: "#4CAF50",
  },
  thinking: {
    glow: "rgba(155, 89, 182, 0.4)",
    rotation: 2,
    scale: 0.98,
    glowRadius: 48,
    accent: "#9B59B6",
  },
  excited: {
    glow: "rgba(255, 200, 0, 0.5)",
    rotation: 0,
    scale: 1.08,
    glowRadius: 60,
    accent: "#FFC107",
  },
};

export default function RemoMascot({
  size = 120,
  mood = "idle",
  className = "",
}: RemoMascotProps) {
  const [bounce, setBounce] = useState(false);
  const style = moodStyles[mood];

  // Micro bounce whenever mood changes
  useEffect(() => {
    setBounce(true);
    const t = setTimeout(() => setBounce(false), 420);
    return () => clearTimeout(t);
  }, [mood]);

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{
        width: size,
        height: size,
      }}
      aria-label={`Remo mascot — ${mood}`}
      role="img"
    >
      {/* Aura glow */}
      <div
        className="absolute inset-0 transition-all duration-700 ease-out pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${style.glow} 0%, transparent 65%)`,
          filter: `blur(${style.glowRadius * 0.4}px)`,
          transform: "scale(1.35)",
        }}
        aria-hidden="true"
      />

      {/* Main image wrapper — handles mood rotation/scale */}
      <div
        className="relative z-10 w-full h-full transition-all duration-500 ease-out"
        style={{
          transform: `rotate(${style.rotation}deg) scale(${
            bounce ? style.scale * 1.08 : style.scale
          })`,
        }}
      >
        {/* Inner breathing wrapper — keeps transform isolated from the mood transform */}
        <div
          className="w-full h-full"
          style={{ animation: "remo-breathe 3.2s ease-in-out infinite" }}
        >
          <img
            src="/mascot/remo.png"
            alt=""
            width={size}
            height={size}
            draggable={false}
            className="w-full h-full select-none"
            style={{
              filter: `drop-shadow(0 12px 28px ${style.glow}) drop-shadow(0 4px 12px rgba(0,0,0,0.35))`,
            }}
          />
        </div>
      </div>

      {/* Thinking bubbles */}
      {mood === "thinking" && (
        <>
          <div
            className="absolute rounded-full"
            style={{
              width: size * 0.07,
              height: size * 0.07,
              top: size * 0.08,
              right: size * 0.1,
              background: "rgba(155, 89, 182, 0.85)",
              boxShadow: "0 0 10px rgba(155, 89, 182, 0.7)",
              animation: "remo-float-up 2.4s ease-in-out infinite",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute rounded-full"
            style={{
              width: size * 0.05,
              height: size * 0.05,
              top: size * 0.02,
              right: size * 0.02,
              background: "rgba(155, 89, 182, 0.6)",
              boxShadow: "0 0 8px rgba(155, 89, 182, 0.5)",
              animation: "remo-float-up 2.8s ease-in-out 0.3s infinite",
            }}
            aria-hidden="true"
          />
        </>
      )}

      {/* Excited sparkles */}
      {mood === "excited" && (
        <>
          <span
            className="absolute z-20 font-black"
            style={{
              top: size * 0.05,
              right: size * 0.08,
              color: "#FFD700",
              fontSize: size * 0.14,
              textShadow: "0 0 10px rgba(255, 215, 0, 0.9)",
              animation: "remo-sparkle 1.4s ease-in-out infinite",
            }}
            aria-hidden="true"
          >
            ✦
          </span>
          <span
            className="absolute z-20 font-black"
            style={{
              top: size * 0.15,
              left: size * 0.05,
              color: "#FFD700",
              fontSize: size * 0.1,
              textShadow: "0 0 8px rgba(255, 215, 0, 0.9)",
              animation: "remo-sparkle 1.8s ease-in-out 0.3s infinite",
            }}
            aria-hidden="true"
          >
            ✦
          </span>
          <span
            className="absolute z-20 font-black"
            style={{
              bottom: size * 0.08,
              right: size * 0.12,
              color: "#FFD700",
              fontSize: size * 0.09,
              textShadow: "0 0 8px rgba(255, 215, 0, 0.9)",
              animation: "remo-sparkle 1.6s ease-in-out 0.6s infinite",
            }}
            aria-hidden="true"
          >
            ✦
          </span>
        </>
      )}

      {/* Happy cheek blush overlays */}
      {(mood === "happy" || mood === "excited") && (
        <>
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: size * 0.12,
              height: size * 0.08,
              top: size * 0.55,
              left: size * 0.18,
              background:
                "radial-gradient(circle, rgba(255, 120, 80, 0.55) 0%, transparent 70%)",
              filter: "blur(2px)",
              zIndex: 11,
            }}
            aria-hidden="true"
          />
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: size * 0.12,
              height: size * 0.08,
              top: size * 0.55,
              right: size * 0.18,
              background:
                "radial-gradient(circle, rgba(255, 120, 80, 0.55) 0%, transparent 70%)",
              filter: "blur(2px)",
              zIndex: 11,
            }}
            aria-hidden="true"
          />
        </>
      )}
    </div>
  );
}
