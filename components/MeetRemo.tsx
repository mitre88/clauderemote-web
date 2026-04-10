"use client";

import { useEffect, useRef, useState } from "react";
import RemoMascot from "./RemoMascot";

type MoodState = "idle" | "happy" | "thinking" | "excited";

const moodPhrases: Record<MoodState, string[]> = {
  idle: ["Ready when you are.", "All systems nominal.", "Watching your sessions..."],
  happy: ["Build succeeded! Great work!", "All tests passing — you're on fire!", "Session complete! Nice one."],
  thinking: ["Analyzing your codebase...", "Working on it, give me a sec...", "Processing... this one's complex."],
  excited: ["NEW SESSION STARTED! Let's go!", "Five sessions running? Let's get it!", "You're unstoppable today!"],
};

export default function MeetRemo() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mood, setMood] = useState<MoodState>("idle");
  const [phrase, setPhrase] = useState(moodPhrases.idle[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = sectionRef.current?.querySelectorAll(".remo-animate");
            els?.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("opacity-100", "translate-y-0", "scale-100");
                el.classList.remove("opacity-0", "translate-y-8", "scale-95");
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMoodChange = (newMood: MoodState) => {
    setMood(newMood);
    const phrases = moodPhrases[newMood];
    setPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
  };

  const moodButtons: Array<{ mood: MoodState; label: string; color: string; emoji: string }> = [
    { mood: "idle", label: "Idle", color: "#87CEEB", emoji: "😌" },
    { mood: "happy", label: "Happy", color: "#4CAF50", emoji: "😊" },
    { mood: "thinking", label: "Thinking", color: "#9B59B6", emoji: "🤔" },
    { mood: "excited", label: "Excited", color: "#FF8C00", emoji: "🎉" },
  ];

  return (
    <section
      ref={sectionRef}
      id="meet-remo"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1A1208 0%, #220F05 50%, #1A1208 100%)" }}
    >
      {/* Warm glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,140,0,0.05) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Remo */}
          <div
            className="remo-animate opacity-0 translate-y-8 scale-95 transition-all duration-700 flex-shrink-0 flex flex-col items-center"
            style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
          >
            <RemoMascot size={200} mood={mood} />

            {/* Speech bubble */}
            <div
              className="mt-4 relative px-5 py-3 rounded-2xl text-sm font-medium max-w-48 text-center"
              style={{
                background: "rgba(42, 31, 16, 0.9)",
                border: "1px solid rgba(255, 140, 0, 0.3)",
                color: "#F5E6D3",
              }}
            >
              <div
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-2"
                style={{
                  background: "rgba(42, 31, 16, 0.9)",
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                  border: "none",
                }}
                aria-hidden="true"
              />
              &ldquo;{phrase}&rdquo;
            </div>

            {/* Mood switcher */}
            <div className="flex gap-2 mt-6 flex-wrap justify-center">
              {moodButtons.map((btn) => (
                <button
                  key={btn.mood}
                  onClick={() => handleMoodChange(btn.mood)}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200"
                  style={{
                    background: mood === btn.mood ? `${btn.color}30` : "rgba(42,31,16,0.6)",
                    border: `1px solid ${mood === btn.mood ? btn.color : "rgba(255,140,0,0.15)"}`,
                    color: mood === btn.mood ? btn.color : "#A0896A",
                    transform: mood === btn.mood ? "scale(1.05)" : "scale(1)",
                  }}
                  aria-label={`Set Remo mood to ${btn.label}`}
                >
                  {btn.emoji} {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1">
            <div
              className="remo-animate opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-widest"
              style={{
                background: "rgba(255, 140, 0, 0.1)",
                border: "1px solid rgba(255, 140, 0, 0.3)",
                color: "#FF8C00",
                transitionDelay: "150ms",
              }}
            >
              Meet Remo
            </div>

            <h2
              className="remo-animate opacity-0 translate-y-8 transition-all duration-700 text-4xl lg:text-5xl font-black text-white mb-6"
              style={{ transitionDelay: "250ms" }}
            >
              Your coding companion,{" "}
              <span className="gradient-text">always watching</span>
            </h2>

            <p
              className="remo-animate opacity-0 translate-y-8 transition-all duration-700 text-text-muted text-lg leading-relaxed mb-8"
              style={{ transitionDelay: "350ms" }}
            >
              Remo is the kawaii voxel fox who lives inside ClaudeRemote. He&apos;s not just decoration —
              Remo reacts to the real state of your sessions, giving you emotional context at a glance.
            </p>

            <div
              className="remo-animate opacity-0 translate-y-8 transition-all duration-700 grid grid-cols-1 sm:grid-cols-2 gap-4"
              style={{ transitionDelay: "450ms" }}
            >
              {[
                {
                  state: "When builds succeed",
                  reaction: "Remo does a happy dance, tail wagging",
                  color: "#4CAF50",
                  emoji: "🎉",
                },
                {
                  state: "During long tasks",
                  reaction: "Remo enters thinking mode, thinking bubbles floating up",
                  color: "#9B59B6",
                  emoji: "🤔",
                },
                {
                  state: "New session created",
                  reaction: "Remo gets excited, sparkling with energy",
                  color: "#FF8C00",
                  emoji: "⚡",
                },
                {
                  state: "All quiet",
                  reaction: "Remo breathes peacefully, eyes half-closed",
                  color: "#87CEEB",
                  emoji: "😌",
                },
              ].map((item) => (
                <div
                  key={item.state}
                  className="card-glass rounded-xl p-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <div>
                      <div className="font-semibold text-sm" style={{ color: item.color }}>
                        {item.state}
                      </div>
                      <div className="text-text-muted text-xs mt-1 leading-relaxed">
                        {item.reaction}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p
              className="remo-animate opacity-0 translate-y-8 transition-all duration-700 text-text-muted text-sm mt-6 italic"
              style={{ transitionDelay: "550ms" }}
            >
              Tap the mood buttons above to see Remo in action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
