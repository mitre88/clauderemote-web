"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="2" y="6" width="28" height="20" rx="3" stroke="#FF8C00" strokeWidth="2" />
        <rect x="2" y="6" width="28" height="6" rx="3" fill="rgba(255,140,0,0.2)" stroke="#FF8C00" strokeWidth="2" />
        <circle cx="6" cy="9" r="1.5" fill="#FF8C00" />
        <circle cx="10" cy="9" r="1.5" fill="#FF9800" />
        <circle cx="14" cy="9" r="1.5" fill="#4CAF50" />
        <rect x="6" y="17" width="12" height="2" rx="1" fill="rgba(255,140,0,0.6)" />
        <rect x="6" y="21" width="8" height="2" rx="1" fill="rgba(255,140,0,0.4)" />
      </svg>
    ),
    title: "Run the relay server on your Mac",
    description: "Start the lightweight ClaudeRemote relay with a single command. It discovers your Claude Code sessions and makes them available on your local network.",
    code: "npx clauderemote-relay",
  },
  {
    number: "02",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="9" y="1" width="14" height="30" rx="3" stroke="#9B59B6" strokeWidth="2" />
        <rect x="13" y="4" width="6" height="1.5" rx="0.75" fill="#9B59B6" opacity="0.6" />
        <circle cx="16" cy="28" r="1.5" fill="#9B59B6" />
        <rect x="11" y="7" width="10" height="18" rx="1" fill="rgba(155,89,182,0.15)" stroke="rgba(155,89,182,0.4)" strokeWidth="0.5" />
      </svg>
    ),
    title: "Open ClaudeRemote on your iPhone",
    description: "Launch the app and it instantly finds your Mac via Bonjour. No IP addresses, no manual setup — your Mac appears in seconds.",
    code: null,
  },
  {
    number: "03",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="12" stroke="#87CEEB" strokeWidth="2" />
        <circle cx="16" cy="16" r="6" stroke="#87CEEB" strokeWidth="1.5" opacity="0.6" />
        <circle cx="16" cy="16" r="2.5" fill="#87CEEB" />
        <line x1="16" y1="4" x2="16" y2="7" stroke="#87CEEB" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="25" x2="16" y2="28" stroke="#87CEEB" strokeWidth="2" strokeLinecap="round" />
        <line x1="4" y1="16" x2="7" y2="16" stroke="#87CEEB" strokeWidth="2" strokeLinecap="round" />
        <line x1="25" y1="16" x2="28" y2="16" stroke="#87CEEB" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Control your sessions from anywhere",
    description: "Send prompts, create new sessions, monitor running tasks, and see live responses — from your couch, your commute, or across the globe.",
    code: null,
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const steps = sectionRef.current?.querySelectorAll(".step-item");
            steps?.forEach((step, i) => {
              setTimeout(() => {
                step.classList.add("opacity-100", "translate-x-0");
                step.classList.remove("opacity-0", "-translate-x-8");
              }, i * 200);
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
      id="how-it-works"
      className="py-24 px-6 relative"
      style={{ background: "linear-gradient(180deg, #1A1208 0%, #0F0B06 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 uppercase tracking-widest"
            style={{
              background: "rgba(155, 89, 182, 0.1)",
              border: "1px solid rgba(155, 89, 182, 0.3)",
              color: "#9B59B6",
            }}
          >
            How It Works
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Up and running in{" "}
            <span className="gradient-text-purple">three steps</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            No complex setup, no cloud accounts, no configuration files. Just run and go.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="hidden lg:block absolute left-1/2 top-16 bottom-16 w-px -translate-x-1/2"
            style={{
              background: "linear-gradient(180deg, #FF8C00, #9B59B6, #87CEEB)",
              opacity: 0.3,
            }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`step-item opacity-0 -translate-x-8 transition-all duration-600 flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
              >
                {/* Step content */}
                <div className="flex-1 card-glass rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    {/* Number circle */}
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-black text-sm"
                      style={{
                        background: "linear-gradient(135deg, #FF8C00, #E05000)",
                        color: "white",
                        boxShadow: "0 4px 16px rgba(255, 140, 0, 0.4)",
                      }}
                    >
                      {step.number}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        {step.icon}
                        <h3 className="text-xl font-bold text-text-warm">{step.title}</h3>
                      </div>
                      <p className="text-text-muted leading-relaxed mb-4">{step.description}</p>

                      {step.code && (
                        <div
                          className="rounded-lg px-4 py-3 font-mono text-sm"
                          style={{
                            background: "rgba(0,0,0,0.4)",
                            border: "1px solid rgba(255, 140, 0, 0.2)",
                            color: "#FF8C00",
                          }}
                        >
                          <span className="text-text-muted mr-2">$</span>
                          {step.code}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Center node */}
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full hidden lg:flex items-center justify-center"
                  style={{
                    background: "#1A1208",
                    border: "2px solid #FF8C00",
                    boxShadow: "0 0 16px rgba(255, 140, 0, 0.4)",
                  }}
                  aria-hidden="true"
                >
                  <div className="w-3 h-3 rounded-full bg-brand-orange" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
