"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    icon: "🧠",
    title: "Pick Your Brain",
    description: "Choose the Claude model per session — Opus for hard refactors, Sonnet for daily work, Haiku for instant fixes. Different projects, different brains.",
    color: "#FF8C00",
  },
  {
    icon: "🔥",
    title: "Dial Reasoning Effort",
    description: "Toggle between Standard, Think, Think hard, and Ultrathink. Pick how much time Claude spends planning before it types a line of code.",
    color: "#9B59B6",
  },
  {
    icon: "💬",
    title: "Wide Chat Bubbles",
    description: "Rewritten chat UI with edge-to-edge bubbles, code blocks, typing indicators, and a keyboard bar that finally dismisses when you want it to.",
    color: "#87CEEB",
  },
  {
    icon: "📡",
    title: "Auto-Discovery",
    description: "Bonjour finds your Mac on the same Wi-Fi automatically. Zero configuration. Or drop in an IP to reach your Mac from anywhere.",
    color: "#FF8C00",
  },
  {
    icon: "🌍",
    title: "5 Languages",
    description: "English, Español, Français, 中文, Português — switch live from settings. ClaudeRemote speaks your language so you can focus on building.",
    color: "#4CAF50",
  },
  {
    icon: "🔒",
    title: "Local & Secure",
    description: "Everything runs on your own relay server. No cloud, no third parties, no telemetry. Your code and your prompts stay yours.",
    color: "#FFFF00",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = sectionRef.current?.querySelectorAll(".feature-card");
            cards?.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add("opacity-100", "translate-y-0");
                card.classList.remove("opacity-0", "translate-y-8");
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-24 px-6 relative"
      style={{ background: "linear-gradient(180deg, #0D0A05 0%, #1A1208 50%, #1A1208 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 uppercase tracking-widest"
            style={{
              background: "rgba(255, 140, 0, 0.1)",
              border: "1px solid rgba(255, 140, 0, 0.3)",
              color: "#FF8C00",
            }}
          >
            Features
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Everything you need to{" "}
            <span className="gradient-text">stay in control</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            ClaudeRemote bridges the gap between your iPhone and your Mac development environment with zero friction.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card card-glass opacity-0 translate-y-8 transition-all duration-500 rounded-2xl p-6 group cursor-default"
              style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `rgba(${feature.color === "#FF8C00" ? "255, 140, 0" : feature.color === "#9B59B6" ? "155, 89, 182" : feature.color === "#87CEEB" ? "135, 206, 235" : feature.color === "#4CAF50" ? "76, 175, 80" : "255, 255, 0"}, 0.15)`,
                  border: `1px solid ${feature.color}30`,
                }}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3
                className="text-lg font-bold mb-2 transition-colors duration-300"
                style={{ color: "#F5E6D3" }}
              >
                {feature.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom accent */}
              <div
                className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
