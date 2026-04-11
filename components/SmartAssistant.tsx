"use client";

import { useEffect, useRef, useState } from "react";

type ModelKey = "auto" | "opus" | "sonnet" | "haiku";
type EffortKey = "standard" | "think" | "thinkHard" | "ultrathink";

const models: Array<{
  key: ModelKey;
  name: string;
  tagline: string;
  speed: number;
  power: number;
  description: string;
}> = [
  {
    key: "auto",
    name: "Auto",
    tagline: "Let Claude decide",
    speed: 3,
    power: 3,
    description:
      "Pick the right brain for the job automatically. Great when you don't want to think about which model to use — ClaudeRemote routes your prompt to the best fit.",
  },
  {
    key: "opus",
    name: "Opus",
    tagline: "Most capable",
    speed: 2,
    power: 5,
    description:
      "The reasoning heavyweight. Use Opus when you're deep in a complex refactor, a tricky migration, or a debug session that doesn't fit inside your head.",
  },
  {
    key: "sonnet",
    name: "Sonnet",
    tagline: "Balanced",
    speed: 4,
    power: 4,
    description:
      "Fast enough for rapid iteration, smart enough for real engineering work. The daily driver that ships features without drama.",
  },
  {
    key: "haiku",
    name: "Haiku",
    tagline: "Fastest",
    speed: 5,
    power: 3,
    description:
      "Instant answers for quick edits, small fixes, snippets, and anything you'd normally ping a colleague for. Minimal latency, maximal flow.",
  },
];

const efforts: Array<{
  key: EffortKey;
  name: string;
  chip: string;
  description: string;
}> = [
  {
    key: "standard",
    name: "Standard",
    chip: "Fast responses",
    description: "Ship-it mode. Claude answers right away — perfect for most day-to-day prompts.",
  },
  {
    key: "think",
    name: "Think",
    chip: "Dedicated thinking budget",
    description: "A small reasoning lane before the answer. Better quality on anything non-trivial.",
  },
  {
    key: "thinkHard",
    name: "Think hard",
    chip: "Extra thinking",
    description: "More tokens spent on planning, weighing trade-offs, and catching edge cases before writing code.",
  },
  {
    key: "ultrathink",
    name: "Ultrathink",
    chip: "Maximum reasoning",
    description: "When you need the deepest analysis Claude can do — architectural calls, root-cause debugging, protocol design.",
  },
];

function Bars({ count, total = 5, color }: { count: number; total?: number; color: string }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className="block h-1.5 w-4 rounded-full transition-all duration-500"
          style={{
            background: i < count ? color : "rgba(255,255,255,0.12)",
            boxShadow: i < count ? `0 0 8px ${color}55` : "none",
          }}
        />
      ))}
    </div>
  );
}

export default function SmartAssistant() {
  const sectionRef = useRef<HTMLElement>(null);
  const [model, setModel] = useState<ModelKey>("sonnet");
  const [effort, setEffort] = useState<EffortKey>("think");

  const activeModel = models.find((m) => m.key === model)!;
  const activeEffort = efforts.find((e) => e.key === effort)!;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = sectionRef.current?.querySelectorAll(".sa-animate");
            els?.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("opacity-100", "translate-y-0");
                el.classList.remove("opacity-0", "translate-y-8");
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="smart-assistant"
      className="py-28 px-6 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #1A1208 0%, #0D0A05 40%, #120B05 70%, #1A1208 100%)",
      }}
    >
      {/* Decorative glows */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 140, 0, 0.08) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(155, 89, 182, 0.08) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="sa-animate opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 uppercase tracking-widest"
            style={{
              background: "rgba(155, 89, 182, 0.12)",
              border: "1px solid rgba(155, 89, 182, 0.35)",
              color: "#C39BD3",
            }}
          >
            New in v1.0
          </span>
          <h2
            className="sa-animate opacity-0 translate-y-8 transition-all duration-700 text-4xl lg:text-5xl font-black text-white mb-4"
          >
            Pick your brain.{" "}
            <span className="gradient-text-purple">Dial your reasoning.</span>
          </h2>
          <p className="sa-animate opacity-0 translate-y-8 transition-all duration-700 text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Every session can run on a different Claude model, with its own reasoning budget.
            Fast fixes on Haiku, deep refactors on Opus, ultrathink on the problem that&apos;s
            been haunting you all week.
          </p>
        </div>

        {/* Two-column interactive picker */}
        <div className="sa-animate opacity-0 translate-y-8 transition-all duration-700 grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* LEFT: controls */}
          <div className="lg:col-span-3 card-glass rounded-3xl p-6 lg:p-8">
            {/* Model section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                  Model
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-brand-orange/30 to-transparent" />
              </div>

              <div className="flex flex-wrap gap-2">
                {models.map((m) => {
                  const selected = m.key === model;
                  return (
                    <button
                      key={m.key}
                      onClick={() => setModel(m.key)}
                      className="group relative px-4 py-3 rounded-2xl text-left transition-all duration-300"
                      style={{
                        background: selected
                          ? "linear-gradient(135deg, #FF8C00 0%, #E05000 100%)"
                          : "rgba(42, 31, 16, 0.6)",
                        border: `1px solid ${
                          selected ? "rgba(255, 140, 0, 0.8)" : "rgba(255, 140, 0, 0.2)"
                        }`,
                        boxShadow: selected
                          ? "0 8px 28px rgba(255, 140, 0, 0.35)"
                          : "none",
                        transform: selected ? "translateY(-1px)" : "translateY(0)",
                      }}
                      aria-pressed={selected}
                    >
                      <div
                        className="text-sm font-bold"
                        style={{ color: selected ? "#FFFFFF" : "#F5E6D3" }}
                      >
                        {m.name}
                      </div>
                      <div
                        className="text-[10px] font-medium mt-0.5"
                        style={{
                          color: selected ? "rgba(255,255,255,0.85)" : "#A0896A",
                        }}
                      >
                        {m.tagline}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Effort section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#C39BD3" }}>
                  Reasoning effort
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-purple-400/30 to-transparent" />
              </div>

              <div className="flex flex-wrap gap-2">
                {efforts.map((e) => {
                  const selected = e.key === effort;
                  return (
                    <button
                      key={e.key}
                      onClick={() => setEffort(e.key)}
                      className="group px-4 py-3 rounded-2xl text-left transition-all duration-300"
                      style={{
                        background: selected
                          ? "linear-gradient(135deg, #9B59B6 0%, #6F3B84 100%)"
                          : "rgba(42, 31, 16, 0.6)",
                        border: `1px solid ${
                          selected ? "rgba(155, 89, 182, 0.8)" : "rgba(155, 89, 182, 0.2)"
                        }`,
                        boxShadow: selected
                          ? "0 8px 28px rgba(155, 89, 182, 0.35)"
                          : "none",
                        transform: selected ? "translateY(-1px)" : "translateY(0)",
                      }}
                      aria-pressed={selected}
                    >
                      <div
                        className="text-sm font-bold"
                        style={{ color: selected ? "#FFFFFF" : "#F5E6D3" }}
                      >
                        {e.name}
                      </div>
                      <div
                        className="text-[10px] font-medium mt-0.5"
                        style={{
                          color: selected ? "rgba(255,255,255,0.85)" : "#A0896A",
                        }}
                      >
                        {e.chip}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: live preview card */}
          <div className="lg:col-span-2 card-glass rounded-3xl p-6 lg:p-8 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-text-muted">
                Your session
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] text-green-400 font-semibold uppercase tracking-wider">
                  Ready
                </span>
              </div>
            </div>

            <div className="mb-5">
              <div className="text-3xl font-black gradient-text mb-1 transition-all duration-500">
                {activeModel.name}
              </div>
              <div className="text-sm text-text-muted">{activeModel.tagline}</div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-text-muted font-semibold">
                  Speed
                </span>
                <Bars count={activeModel.speed} color="#FF8C00" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-text-muted font-semibold">
                  Reasoning
                </span>
                <Bars count={activeModel.power} color="#9B59B6" />
              </div>
            </div>

            <div
              className="rounded-2xl px-4 py-3 mb-4"
              style={{
                background: "rgba(155, 89, 182, 0.12)",
                border: "1px solid rgba(155, 89, 182, 0.3)",
              }}
            >
              <div className="text-[10px] uppercase tracking-widest font-bold mb-1" style={{ color: "#C39BD3" }}>
                Effort: {activeEffort.name}
              </div>
              <div className="text-xs leading-relaxed" style={{ color: "#F5E6D3" }}>
                {activeEffort.description}
              </div>
            </div>

            <p className="text-xs leading-relaxed text-text-muted flex-1">
              {activeModel.description}
            </p>

            <div className="mt-6 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2 text-[11px] text-text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                <span>Changes apply per session — different projects, different brains.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer hint */}
        <p className="sa-animate opacity-0 translate-y-8 transition-all duration-700 text-center text-text-muted text-sm mt-8 italic">
          Click any chip above to preview the combination.
        </p>
      </div>
    </section>
  );
}
