"use client";

import { useEffect, useRef } from "react";

const techItems = [
  { name: "SwiftUI", category: "UI Framework" },
  { name: "Bonjour / mDNS", category: "Discovery" },
  { name: "Network.framework", category: "Networking" },
  { name: "async / await", category: "Concurrency" },
  { name: "Actor Model", category: "Thread Safety" },
  { name: "URLSession", category: "HTTP" },
  { name: "Combine", category: "Reactive" },
  { name: "UserDefaults", category: "Persistence" },
  { name: "LocalAuthentication", category: "Security" },
  { name: "Localization", category: "i18n • 5 Languages" },
  { name: "Next.js 15", category: "Web • App Router" },
  { name: "Tailwind CSS", category: "Web • Styles" },
];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const badges = sectionRef.current?.querySelectorAll(".tech-badge");
            badges?.forEach((badge, i) => {
              setTimeout(() => {
                badge.classList.add("opacity-100", "scale-100");
                badge.classList.remove("opacity-0", "scale-90");
              }, i * 60);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tech-stack"
      className="py-20 px-6"
      style={{ background: "#0F0B06" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <span
          className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 uppercase tracking-widest"
          style={{
            background: "rgba(135, 206, 235, 0.08)",
            border: "1px solid rgba(135, 206, 235, 0.2)",
            color: "#87CEEB",
          }}
        >
          Built With
        </span>

        <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
          Native. Fast. Modern.
        </h2>
        <p className="text-text-muted mb-12 max-w-xl mx-auto">
          ClaudeRemote is built with the latest Apple frameworks — no third-party dependencies,
          no SDKs, no nonsense.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          {techItems.map((tech) => (
            <div
              key={tech.name}
              className="tech-badge opacity-0 scale-90 transition-all duration-300 group"
              style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
            >
              <div
                className="px-4 py-2.5 rounded-xl cursor-default transition-all duration-300 group-hover:scale-105"
                style={{
                  background: "rgba(42, 31, 16, 0.8)",
                  border: "1px solid rgba(255, 140, 0, 0.15)",
                }}
              >
                <div
                  className="font-mono font-bold text-sm"
                  style={{ color: "#F5E6D3" }}
                >
                  {tech.name}
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{ color: "#7A6A50" }}
                >
                  {tech.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="mt-16 pt-8"
          style={{ borderTop: "1px solid rgba(255,140,0,0.1)" }}
        >
          <p className="text-text-muted text-sm">
            100% written in Swift. No React Native, no Electron, no cross-platform compromises.
            <br />
            The way Apple intended.
          </p>
        </div>
      </div>
    </section>
  );
}
