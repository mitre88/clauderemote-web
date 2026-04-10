import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — ClaudeRemote",
  description: "Get help with ClaudeRemote. Find answers to common questions or reach out on GitHub.",
};

export default function Support() {
  const faqs = [
    {
      q: "How do I set up the relay server on my Mac?",
      a: "Run `npx clauderemote-relay` in your terminal. The relay will start automatically and advertise itself on your local network via Bonjour. Keep the terminal window open while using the app.",
    },
    {
      q: "My iPhone can't find my Mac. What should I do?",
      a: "Make sure both devices are on the same WiFi network. Check that the relay server is running on your Mac. On iPhone, try pulling down to refresh the discovery list. If still not working, check that your Mac's firewall isn't blocking the relay port (default: 8765).",
    },
    {
      q: "Is ClaudeRemote safe to use?",
      a: "Yes. ClaudeRemote only communicates on your local network — it never sends data to external servers. All traffic stays between your iPhone and your Mac. You can verify this by inspecting the open-source code on GitHub.",
    },
    {
      q: "Does ClaudeRemote work over the internet (not just local network)?",
      a: "Currently ClaudeRemote requires both devices to be on the same local network. Remote access over the internet (e.g., via VPN or SSH tunnel) is planned for a future version.",
    },
    {
      q: "Which languages does ClaudeRemote support?",
      a: "ClaudeRemote is fully localized in English, Spanish (Español), French (Français), Chinese Simplified (中文), and Portuguese (Português). The app follows your iPhone's system language automatically.",
    },
    {
      q: "How do I create a new Claude Code session from my iPhone?",
      a: "Tap the '+' button on the Sessions screen. Enter your working directory path and initial prompt. The relay will start a new Claude Code session on your Mac with those parameters.",
    },
    {
      q: "What versions of iOS are supported?",
      a: "ClaudeRemote requires iOS 18 or later to take advantage of the latest SwiftUI features and performance improvements.",
    },
    {
      q: "Is there a macOS companion app?",
      a: "The relay server runs as a terminal process on macOS. A native macOS menu bar companion app is planned for a future release.",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ background: "#1A1208", color: "#F5E6D3" }}
    >
      {/* Header */}
      <header
        className="px-6 py-5 border-b"
        style={{ borderColor: "rgba(255,140,0,0.1)" }}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-black text-lg"
            style={{
              background: "linear-gradient(135deg, #FF8C00, #FFB347)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            🦊 ClaudeRemote
          </Link>
          <Link
            href="/"
            className="text-sm px-4 py-2 rounded-xl transition-colors"
            style={{
              background: "rgba(255,140,0,0.1)",
              border: "1px solid rgba(255,140,0,0.2)",
              color: "#FF8C00",
            }}
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1
          className="text-4xl font-black mb-2"
          style={{
            background: "linear-gradient(135deg, #FF8C00, #FFB347)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Support
        </h1>
        <p className="text-lg mb-12" style={{ color: "#7A6A50" }}>
          Need help with ClaudeRemote? We&apos;ve got you covered.
        </p>

        {/* Quick links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {[
            {
              icon: "📖",
              title: "Documentation",
              desc: "Full setup guide and API reference",
              href: "https://github.com/mitre88/clauderemote#readme",
              external: true,
            },
            {
              icon: "🐛",
              title: "Report a Bug",
              desc: "Found an issue? Let us know on GitHub",
              href: "https://github.com/mitre88/clauderemote/issues/new",
              external: true,
            },
            {
              icon: "💡",
              title: "Feature Request",
              desc: "Suggest improvements or new features",
              href: "https://github.com/mitre88/clauderemote/discussions",
              external: true,
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="block p-5 rounded-2xl transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(145deg, #3A2E1E, #2A1F10)",
                border: "1px solid rgba(255,140,0,0.15)",
                textDecoration: "none",
              }}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="font-bold mb-1" style={{ color: "#F5E6D3" }}>
                {item.title}
              </div>
              <div className="text-sm" style={{ color: "#7A6A50" }}>
                {item.desc}
              </div>
            </a>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold mb-8" style={{ color: "#FF8C00" }}>
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #3A2E1E, #2A1F10)",
                border: "1px solid rgba(255,140,0,0.12)",
              }}
            >
              <summary
                className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold list-none"
                style={{ color: "#F5E6D3" }}
              >
                {faq.q}
                <span
                  className="flex-shrink-0 ml-4 transition-transform duration-200 group-open:rotate-45"
                  style={{ color: "#FF8C00" }}
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div
                className="px-6 pb-5 leading-relaxed"
                style={{ color: "#A0896A" }}
              >
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        {/* Contact */}
        <div
          className="mt-16 p-8 rounded-2xl text-center"
          style={{
            background: "rgba(255,140,0,0.05)",
            border: "1px solid rgba(255,140,0,0.2)",
          }}
        >
          <div className="text-4xl mb-4" aria-hidden="true">🦊</div>
          <h3 className="text-xl font-bold mb-2" style={{ color: "#F5E6D3" }}>
            Still need help?
          </h3>
          <p className="mb-6" style={{ color: "#7A6A50" }}>
            Open an issue on GitHub and the community will help you out.
          </p>
          <a
            href="https://github.com/mitre88/clauderemote/issues"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open an Issue on GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
