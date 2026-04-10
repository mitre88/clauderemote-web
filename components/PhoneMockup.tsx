"use client";

const sessions = [
  {
    id: "CR-001",
    name: "refactor-auth-module",
    status: "running",
    lastMessage: "Analyzing authentication flow...",
    time: "2m ago",
    dots: 3,
  },
  {
    id: "CR-002",
    name: "fix-api-timeout",
    status: "done",
    lastMessage: "Fixed: increased timeout to 30s",
    time: "12m ago",
    dots: 0,
  },
  {
    id: "CR-003",
    name: "add-dark-mode",
    status: "waiting",
    lastMessage: "Ready for next prompt",
    time: "1h ago",
    dots: 0,
  },
  {
    id: "CR-004",
    name: "unit-tests-coverage",
    status: "running",
    lastMessage: "Writing test cases for UserService...",
    time: "4m ago",
    dots: 2,
  },
];

const statusConfig = {
  running: { color: "#FF9800", label: "Running", dot: true },
  done: { color: "#4CAF50", label: "Done", dot: false },
  waiting: { color: "#87CEEB", label: "Waiting", dot: false },
};

export default function PhoneMockup() {
  return (
    <div
      className="relative mx-auto"
      style={{
        width: "280px",
        transform: "perspective(1000px) rotateY(-8deg) rotateX(2deg)",
        filter: "drop-shadow(-20px 20px 60px rgba(0,0,0,0.6)) drop-shadow(0 0 40px rgba(255,140,0,0.15))",
      }}
    >
      {/* Phone frame */}
      <div
        className="rounded-[42px] overflow-hidden"
        style={{
          background: "#111111",
          border: "2px solid rgba(255,255,255,0.15)",
          padding: "12px",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)",
        }}
      >
        {/* Screen */}
        <div
          className="rounded-[32px] overflow-hidden"
          style={{
            background: "#1A1208",
            minHeight: "520px",
          }}
        >
          {/* Status bar */}
          <div
            className="flex justify-between items-center px-5 py-3"
            style={{ background: "#0D0A05" }}
          >
            <span className="text-white text-xs font-semibold">9:41</span>
            {/* Dynamic island */}
            <div
              className="w-20 h-5 rounded-full"
              style={{ background: "#000" }}
            />
            <div className="flex gap-1 items-center">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="white" opacity="0.8" aria-hidden="true">
                <rect x="0" y="4" width="2" height="6" rx="0.5" />
                <rect x="3" y="2" width="2" height="8" rx="0.5" />
                <rect x="6" y="0" width="2" height="10" rx="0.5" />
                <rect x="9" y="1" width="2" height="9" rx="0.5" />
              </svg>
              <svg width="12" height="10" viewBox="0 0 12 10" fill="white" opacity="0.8" aria-hidden="true">
                <path d="M1 5 Q6 1 11 5 Q8.5 2.5 6 2.5 Q3.5 2.5 1 5Z" />
                <path d="M2.5 6.5 Q6 3.5 9.5 6.5 Q7.5 4.5 6 4.5 Q4.5 4.5 2.5 6.5Z" />
                <circle cx="6" cy="8" r="1.2" />
              </svg>
              <div
                className="text-xs font-bold"
                style={{ color: "#4CAF50" }}
              >
                87%
              </div>
            </div>
          </div>

          {/* App header */}
          <div className="px-4 py-3">
            <div className="flex items-center justify-between mb-1">
              <div>
                <h1
                  className="font-black text-lg leading-tight"
                  style={{
                    background: "linear-gradient(135deg, #FF8C00, #FFB347)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  ClaudeRemote
                </h1>
                <p className="text-xs" style={{ color: "#A0896A" }}>
                  MacBook Pro connected
                </p>
              </div>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                style={{ background: "rgba(255,140,0,0.2)" }}
              >
                🦊
              </div>
            </div>

            {/* Connection status */}
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg mt-2"
              style={{ background: "rgba(76, 175, 80, 0.1)", border: "1px solid rgba(76,175,80,0.2)" }}
            >
              <div className="w-2 h-2 rounded-full bg-status-green animate-pulse" />
              <span className="text-xs font-medium" style={{ color: "#4CAF50" }}>
                Connected • MacBook-Pro-Alex.local
              </span>
            </div>
          </div>

          {/* Sessions list */}
          <div className="px-4 pb-4 flex flex-col gap-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#A0896A" }}>
                Active Sessions
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-bold"
                style={{ background: "rgba(255,140,0,0.2)", color: "#FF8C00" }}
              >
                {sessions.length}
              </span>
            </div>

            {sessions.map((session) => {
              const status = statusConfig[session.status as keyof typeof statusConfig];
              return (
                <div
                  key={session.id}
                  className="rounded-xl p-3"
                  style={{
                    background: "linear-gradient(145deg, #3A2E1E, #2A1F10)",
                    border: "1px solid rgba(255,140,0,0.12)",
                  }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{
                            background: status.color,
                            boxShadow: status.dot ? `0 0 6px ${status.color}` : "none",
                            animation: status.dot ? "pulse 2s infinite" : "none",
                          }}
                        />
                        <span
                          className="text-xs font-mono font-bold truncate"
                          style={{ color: "#F5E6D3" }}
                        >
                          {session.name}
                        </span>
                      </div>
                      <p
                        className="text-xs truncate"
                        style={{ color: "#7A6A50" }}
                      >
                        {session.lastMessage}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1 flex-shrink-0">
                      <span
                        className="text-xs px-1.5 py-0.5 rounded-md font-semibold"
                        style={{
                          background: `${status.color}20`,
                          color: status.color,
                        }}
                      >
                        {status.label}
                      </span>
                      <span className="text-xs" style={{ color: "#5A4A30" }}>
                        {session.time}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* New session button */}
            <button
              className="w-full rounded-xl py-2.5 text-sm font-bold transition-colors mt-1"
              style={{
                background: "linear-gradient(135deg, rgba(255,140,0,0.2), rgba(255,107,0,0.1))",
                border: "1px solid rgba(255,140,0,0.3)",
                color: "#FF8C00",
              }}
            >
              + New Session
            </button>
          </div>
        </div>
      </div>

      {/* Phone side buttons */}
      <div
        className="absolute -right-1 top-24 w-1 h-10 rounded-r-sm"
        style={{ background: "#222" }}
        aria-hidden="true"
      />
      <div
        className="absolute -left-1 top-20 w-1 h-8 rounded-l-sm"
        style={{ background: "#222" }}
        aria-hidden="true"
      />
      <div
        className="absolute -left-1 top-32 w-1 h-8 rounded-l-sm"
        style={{ background: "#222" }}
        aria-hidden="true"
      />
    </div>
  );
}
