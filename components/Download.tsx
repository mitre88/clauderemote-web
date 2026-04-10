"use client";

import { useEffect, useRef } from "react";

export default function Download() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = sectionRef.current?.querySelectorAll(".dl-animate");
            els?.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("opacity-100", "translate-y-0");
                el.classList.remove("opacity-0", "translate-y-8");
              }, i * 120);
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
      id="download"
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0F0B06 0%, #1A1208 30%, #2A1208 60%, #1A1208 100%)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(255,140,0,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div
          className="dl-animate opacity-0 translate-y-8 transition-all duration-700 text-6xl mb-6"
          style={{ filter: "drop-shadow(0 0 20px rgba(255,140,0,0.4))" }}
          aria-hidden="true"
        >
          🦊
        </div>

        <h2
          className="dl-animate opacity-0 translate-y-8 transition-all duration-700 text-4xl lg:text-6xl font-black text-white mb-4"
          style={{ transitionDelay: "100ms" }}
        >
          Ready to take control?
        </h2>

        <p
          className="dl-animate opacity-0 translate-y-8 transition-all duration-700 text-text-muted text-xl mb-10 max-w-lg mx-auto"
          style={{ transitionDelay: "200ms" }}
        >
          Download ClaudeRemote and never be chained to your desk again.
          Your Mac stays home. Your work comes with you.
        </p>

        {/* Badges */}
        <div
          className="dl-animate opacity-0 translate-y-8 transition-all duration-700 flex flex-wrap gap-3 justify-center mb-10"
          style={{ transitionDelay: "300ms" }}
        >
          {[
            { text: "iOS 18+", color: "#FF8C00" },
            { text: "Free & Open Source", color: "#4CAF50" },
            { text: "No Cloud Required", color: "#9B59B6" },
            { text: "5 Languages", color: "#87CEEB" },
          ].map((badge) => (
            <span
              key={badge.text}
              className="px-4 py-2 rounded-xl text-sm font-semibold"
              style={{
                background: `${badge.color}15`,
                border: `1px solid ${badge.color}40`,
                color: badge.color,
              }}
            >
              {badge.text}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="dl-animate opacity-0 translate-y-8 transition-all duration-700 flex flex-wrap gap-4 justify-center"
          style={{ transitionDelay: "400ms" }}
        >
          <a
            href="https://apps.apple.com"
            className="btn-primary text-lg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download ClaudeRemote on the App Store"
          >
            <svg width="22" height="22" viewBox="0 0 20 20" fill="white" aria-hidden="true">
              <path d="M14.5 10.5c0-2.2 1.8-3.3 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.7-.8-2.9-.8-1.5 0-2.8.9-3.6 2.2-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.1 1.1 0 1.5-.7 2.8-.7 1.4 0 1.7.7 2.9.7 1.1 0 1.9-1 2.7-2.1.8-1.2 1.1-2.3 1.1-2.4-.1 0-2.1-.8-2.1-3.4zM12.4 4.2c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.6.6-1 1.6-.9 2.6 1 .1 1.9-.5 2.5-1.2z" />
            </svg>
            Download on the App Store
          </a>

          <a
            href="https://github.com/mitre88/clauderemote"
            className="btn-secondary text-lg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View ClaudeRemote source code on GitHub"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View Source on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
