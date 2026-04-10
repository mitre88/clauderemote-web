"use client";

import { useEffect, useRef } from "react";
import PhoneMockup from "./PhoneMockup";

export default function AppPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = sectionRef.current?.querySelectorAll(".preview-animate");
            els?.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("opacity-100", "translate-y-0");
                el.classList.remove("opacity-0", "translate-y-12");
              }, i * 150);
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
      id="app-preview"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0F0B06 0%, #1A1208 100%)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(155,89,182,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Phone mockup */}
          <div className="preview-animate opacity-0 translate-y-12 transition-all duration-700 flex-shrink-0 relative">
            <PhoneMockup />
            {/* Reflection */}
            <div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 rounded-full"
              style={{
                background: "radial-gradient(ellipse, rgba(255,140,0,0.2) 0%, transparent 70%)",
                filter: "blur(8px)",
              }}
              aria-hidden="true"
            />
          </div>

          {/* Text content */}
          <div className="flex-1 max-w-xl">
            <div
              className="preview-animate opacity-0 translate-y-12 transition-all duration-700 inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-widest"
              style={{
                background: "rgba(135, 206, 235, 0.1)",
                border: "1px solid rgba(135, 206, 235, 0.3)",
                color: "#87CEEB",
                transitionDelay: "100ms",
              }}
            >
              App Preview
            </div>

            <h2
              className="preview-animate opacity-0 translate-y-12 transition-all duration-700 text-4xl lg:text-5xl font-black text-white mb-6"
              style={{ transitionDelay: "200ms" }}
            >
              Beautiful UI,{" "}
              <span className="gradient-text">zero clutter</span>
            </h2>

            <p
              className="preview-animate opacity-0 translate-y-12 transition-all duration-700 text-text-muted text-lg leading-relaxed mb-8"
              style={{ transitionDelay: "300ms" }}
            >
              ClaudeRemote puts all your sessions at a glance. Color-coded status badges,
              real-time updates, and one-tap access to any session — designed to be used
              one-handed, on the go.
            </p>

            {/* Feature highlights */}
            <div
              className="preview-animate opacity-0 translate-y-12 transition-all duration-700 flex flex-col gap-4"
              style={{ transitionDelay: "400ms" }}
            >
              {[
                { icon: "🟢", text: "Live status for every session" },
                { icon: "📲", text: "Swipe to send, tap to open" },
                { icon: "🌙", text: "Warm dark theme — easy on the eyes at night" },
                { icon: "🔤", text: "Full-keyboard prompt input with history" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <span className="text-text-warm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
