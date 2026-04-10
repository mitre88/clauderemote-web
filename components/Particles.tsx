"use client";

import { useEffect, useRef } from "react";

export default function Particles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];

    const createParticle = () => {
      const particle = document.createElement("div");
      const size = Math.random() * 4 + 2;
      const left = Math.random() * 100;
      const duration = Math.random() * 8 + 8;
      const delay = Math.random() * 6;
      const opacity = Math.random() * 0.5 + 0.1;
      const isOrange = Math.random() > 0.4;

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: ${isOrange ? "#FF8C00" : "#9B59B6"};
        left: ${left}%;
        bottom: -10px;
        opacity: 0;
        animation: particleFloat ${duration}s ${delay}s linear infinite;
        pointer-events: none;
      `;

      container.appendChild(particle);
      particles.push(particle);
    };

    const style = document.createElement("style");
    style.textContent = `
      @keyframes particleFloat {
        0% { transform: translateY(0) translateX(0); opacity: 0; }
        10% { opacity: var(--p-opacity, 0.4); }
        90% { opacity: var(--p-opacity, 0.4); }
        100% { transform: translateY(-100vh) translateX(${Math.random() > 0.5 ? "" : "-"}${Math.floor(Math.random() * 60 + 20)}px); opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    for (let i = 0; i < 30; i++) {
      createParticle();
    }

    return () => {
      particles.forEach((p) => p.remove());
      style.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Static CSS particles for SSR */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${(i % 3) + 2}px`,
            height: `${(i % 3) + 2}px`,
            background: i % 3 === 0 ? "#FF8C00" : i % 3 === 1 ? "#9B59B6" : "#87CEEB",
            left: `${(i * 5.2 + 2) % 100}%`,
            bottom: `${(i * 7.3) % 80}%`,
            opacity: 0.2 + (i % 4) * 0.1,
            animation: `particle${(i % 3) + 1} ${10 + (i % 5) * 2}s ${i * 0.5}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
}
