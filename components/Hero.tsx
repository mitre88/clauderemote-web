"use client";

import { useEffect, useRef } from "react";
import RemoMascot from "./RemoMascot";
import Particles from "./Particles";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll(".fade-in-element");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at top center, #3A2010 0%, #2A1208 30%, #1A1208 60%, #0D0A05 100%)",
      }}
    >
      <Particles />

      {/* Glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255, 140, 0, 0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(155, 89, 182, 0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div
            className="fade-in-element opacity-0 translate-y-8 transition-all duration-700 inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: "rgba(255, 140, 0, 0.1)",
              border: "1px solid rgba(255, 140, 0, 0.3)",
              transitionDelay: "0ms",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-brand-orange text-sm font-semibold tracking-wide">iOS 18+ • Free & Open Source</span>
          </div>

          <h1
            className="fade-in-element opacity-0 translate-y-8 transition-all duration-700 font-black text-5xl lg:text-7xl leading-tight mb-6"
            style={{ transitionDelay: "100ms" }}
          >
            <span className="gradient-text">Claude</span>
            <span className="text-white">Remote</span>
          </h1>

          <p
            className="fade-in-element opacity-0 translate-y-8 transition-all duration-700 text-2xl lg:text-3xl font-semibold text-text-warm mb-4"
            style={{ transitionDelay: "200ms" }}
          >
            Control Claude Code from your pocket
          </p>

          <p
            className="fade-in-element opacity-0 translate-y-8 transition-all duration-700 text-lg text-text-muted max-w-xl lg:mx-0 mx-auto mb-10 leading-relaxed"
            style={{ transitionDelay: "300ms" }}
          >
            Send prompts, monitor sessions, manage workflows — all from your iPhone,
            even miles away from your Mac.
          </p>

          <div
            className="fade-in-element opacity-0 translate-y-8 transition-all duration-700 flex flex-wrap gap-4 justify-center lg:justify-start"
            style={{ transitionDelay: "400ms" }}
          >
            <a
              href="https://apps.apple.com"
              className="btn-primary text-lg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download ClaudeRemote on the App Store"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="white" aria-hidden="true">
                <path d="M14.5 10.5c0-2.2 1.8-3.3 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.7-.8-2.9-.8-1.5 0-2.8.9-3.6 2.2-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.1 1.1 0 1.5-.7 2.8-.7 1.4 0 1.7.7 2.9.7 1.1 0 1.9-1 2.7-2.1.8-1.2 1.1-2.3 1.1-2.4-.1 0-2.1-.8-2.1-3.4zM12.4 4.2c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.6.6-1 1.6-.9 2.6 1 .1 1.9-.5 2.5-1.2z" />
              </svg>
              Download on App Store
            </a>

            <a
              href="https://github.com/mitre88/clauderemote"
              className="btn-secondary text-lg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View ClaudeRemote on GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>

          {/* Stats row */}
          <div
            className="fade-in-element opacity-0 translate-y-8 transition-all duration-700 flex gap-8 mt-12 justify-center lg:justify-start"
            style={{ transitionDelay: "500ms" }}
          >
            {[
              { value: "5", label: "Languages" },
              { value: "0ms", label: "Config needed" },
              { value: "100%", label: "Local & Private" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-2xl font-black gradient-text">{stat.value}</div>
                <div className="text-xs text-text-muted uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Remo mascot + decorative elements */}
        <div className="flex-shrink-0 relative">
          <div className="relative flex items-center justify-center">
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-full animate-glow-pulse"
              style={{
                background: "radial-gradient(circle, rgba(255, 140, 0, 0.15) 0%, transparent 70%)",
                width: "300px",
                height: "300px",
                transform: "translate(-50%, -50%)",
                left: "50%",
                top: "50%",
              }}
              aria-hidden="true"
            />

            <RemoMascot size={220} mood="happy" className="animate-float" />

            {/* Floating label */}
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-sm font-semibold"
              style={{
                background: "rgba(155, 89, 182, 0.2)",
                border: "1px solid rgba(155, 89, 182, 0.4)",
                color: "#C39BD3",
                whiteSpace: "nowrap",
              }}
            >
              Meet Remo, your coding companion
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-orange to-transparent" />
      </div>
    </section>
  );
}
