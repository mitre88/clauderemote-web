"use client";

import { useEffect, useState } from "react";

type MoodState = "idle" | "happy" | "thinking" | "excited";

interface RemoMascotProps {
  size?: number;
  mood?: MoodState;
  className?: string;
}

export default function RemoMascot({ size = 120, mood = "idle", className = "" }: RemoMascotProps) {
  const [blinkOpen, setBlinkOpen] = useState(true);
  const [currentMood, setCurrentMood] = useState(mood);

  useEffect(() => {
    const blinkTimer = setInterval(() => {
      setBlinkOpen(false);
      setTimeout(() => setBlinkOpen(true), 150);
    }, 3200 + Math.random() * 1500);

    return () => clearInterval(blinkTimer);
  }, []);

  useEffect(() => {
    setCurrentMood(mood);
  }, [mood]);

  const scale = size / 120;
  const s = (v: number) => v * scale;

  const getMouthPath = () => {
    if (currentMood === "happy" || currentMood === "excited") {
      return `M ${s(46)} ${s(82)} Q ${s(60)} ${s(92)} ${s(74)} ${s(82)}`;
    }
    if (currentMood === "thinking") {
      return `M ${s(50)} ${s(84)} Q ${s(60)} ${s(88)} ${s(70)} ${s(84)}`;
    }
    return `M ${s(48)} ${s(83)} Q ${s(60)} ${s(90)} ${s(72)} ${s(83)}`;
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 120 120`}
      className={`${className} animate-breathe`}
      style={{ filter: "drop-shadow(0 8px 24px rgba(255, 140, 0, 0.4))" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body — voxel orange fox */}
      {/* Main body block */}
      <rect x="35" y="60" width="50" height="45" rx="6" fill="#FF8C00" />
      {/* Body highlight */}
      <rect x="35" y="60" width="50" height="8" rx="6" fill="#FFB347" />

      {/* Left leg */}
      <rect x="38" y="98" width="16" height="14" rx="4" fill="#E07000" />
      {/* Right leg */}
      <rect x="66" y="98" width="16" height="14" rx="4" fill="#E07000" />

      {/* Left paw */}
      <rect x="36" y="108" width="20" height="8" rx="4" fill="#CC5500" />
      {/* Right paw */}
      <rect x="64" y="108" width="20" height="8" rx="4" fill="#CC5500" />

      {/* Left arm */}
      <rect x="18" y="62" width="20" height="30" rx="6" fill="#FF8C00" />
      {/* Left hand */}
      <rect x="14" y="86" width="24" height="10" rx="5" fill="#E07000" />

      {/* Right arm */}
      <rect x="82" y="62" width="20" height="30" rx="6" fill="#FF8C00" />
      {/* Right hand */}
      <rect x="82" y="86" width="24" height="10" rx="5" fill="#E07000" />

      {/* Head */}
      <rect x="28" y="28" width="64" height="38" rx="10" fill="#FF8C00" />
      {/* Head highlight */}
      <rect x="28" y="28" width="64" height="10" rx="10" fill="#FFB347" />

      {/* Left ear */}
      <polygon points="32,32 22,12 42,24" fill="#FF8C00" />
      <polygon points="33,30 24,14 40,24" fill="#CC5500" />

      {/* Right ear */}
      <polygon points="88,32 98,12 78,24" fill="#FF8C00" />
      <polygon points="87,30 96,14 80,24" fill="#CC5500" />

      {/* Face — muzzle */}
      <rect x="42" y="68" width="36" height="22" rx="8" fill="#F5E6D3" />

      {/* Eyes */}
      {blinkOpen ? (
        <>
          {/* Left eye */}
          <circle cx="43" cy="54" r="7" fill="#2A1F10" />
          <circle cx="43" cy="54" r="4.5" fill="#1A0F00" />
          <circle cx="41" cy="52" r="1.5" fill="white" />
          {currentMood === "happy" || currentMood === "excited" ? (
            <path d="M 37 54 Q 43 50 49 54" stroke="#2A1F10" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          ) : null}

          {/* Right eye */}
          <circle cx="77" cy="54" r="7" fill="#2A1F10" />
          <circle cx="77" cy="54" r="4.5" fill="#1A0F00" />
          <circle cx="75" cy="52" r="1.5" fill="white" />
          {currentMood === "happy" || currentMood === "excited" ? (
            <path d="M 71 54 Q 77 50 83 54" stroke="#2A1F10" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          ) : null}

          {/* Thinking indicator */}
          {currentMood === "thinking" ? (
            <>
              <circle cx="90" cy="30" r="4" fill="#9B59B6" opacity="0.9" />
              <circle cx="98" cy="22" r="3" fill="#9B59B6" opacity="0.6" />
              <circle cx="104" cy="15" r="2" fill="#9B59B6" opacity="0.3" />
            </>
          ) : null}

          {/* Excited sparkles */}
          {currentMood === "excited" ? (
            <>
              <text x="95" y="35" fontSize="12" fill="#FFFF00">✦</text>
              <text x="12" y="35" fontSize="10" fill="#FFFF00">✦</text>
            </>
          ) : null}
        </>
      ) : (
        <>
          {/* Blink — closed eyes */}
          <rect x="37" y="52" width="12" height="3" rx="1.5" fill="#2A1F10" />
          <rect x="71" y="52" width="12" height="3" rx="1.5" fill="#2A1F10" />
        </>
      )}

      {/* Nose */}
      <ellipse cx="60" cy="73" rx="4" ry="3" fill="#CC5500" />
      {/* Nose highlight */}
      <circle cx="58.5" cy="72" r="1" fill="rgba(255,255,255,0.4)" />

      {/* Mouth */}
      <path
        d={getMouthPath()}
        stroke="#A04500"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Cheek blush */}
      <ellipse cx="34" cy="67" rx="6" ry="4" fill="rgba(255, 120, 80, 0.35)" />
      <ellipse cx="86" cy="67" rx="6" ry="4" fill="rgba(255, 120, 80, 0.35)" />

      {/* PURPLE BERET */}
      <ellipse cx="60" cy="32" rx="34" ry="8" fill="#7D3C98" />
      <ellipse cx="60" cy="30" rx="26" ry="12" fill="#9B59B6" />
      <ellipse cx="60" cy="26" rx="22" ry="9" fill="#A66DBF" />
      {/* Beret top button */}
      <circle cx="60" cy="22" r="4" fill="#7D3C98" />
      <circle cx="60" cy="22" r="2" fill="#5B2C6F" />
      {/* Beret brim highlight */}
      <path d="M 30 31 Q 60 26 90 31" stroke="rgba(200, 150, 230, 0.4)" strokeWidth="1.5" fill="none" />

      {/* Tail */}
      <path
        d="M 85 90 Q 110 75 105 58 Q 102 48 95 52"
        stroke="#FF8C00"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 95 52 Q 92 48 98 44"
        stroke="#F5E6D3"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
