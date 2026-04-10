import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — ClaudeRemote",
  description: "ClaudeRemote privacy policy. Learn how we handle your data — spoiler: we don't collect any.",
};

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="text-sm mb-12" style={{ color: "#7A6A50" }}>
          Last updated: January 1, 2026
        </p>

        <div
          className="prose max-w-none"
          style={{
            color: "#F5E6D3",
          }}
        >
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#FF8C00" }}>
              1. Overview
            </h2>
            <p className="leading-relaxed" style={{ color: "#A0896A" }}>
              ClaudeRemote is designed from the ground up to respect your privacy. We do not collect,
              store, transmit, or process any personal data on external servers. ClaudeRemote operates
              entirely on your local network between your iPhone and your Mac.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#FF8C00" }}>
              2. Data We Do Not Collect
            </h2>
            <p className="mb-4 leading-relaxed" style={{ color: "#A0896A" }}>
              ClaudeRemote does not collect or transmit:
            </p>
            <ul className="space-y-2" style={{ color: "#A0896A" }}>
              {[
                "Personal identification information",
                "Device identifiers or advertising IDs",
                "Location data",
                "Usage analytics or telemetry",
                "Prompt content or Claude Code session data",
                "Network information beyond what is required for local discovery",
                "Crash reports to external servers",
                "Any data to Anthropic or third parties",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand-orange mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#FF8C00" }}>
              3. Local Data Storage
            </h2>
            <p className="leading-relaxed" style={{ color: "#A0896A" }}>
              ClaudeRemote stores minimal configuration data locally on your device using Apple&apos;s
              standard UserDefaults system. This includes your preferred language and UI preferences.
              This data never leaves your device. You can delete all stored data by uninstalling the app.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#FF8C00" }}>
              4. Network Communication
            </h2>
            <p className="leading-relaxed" style={{ color: "#A0896A" }}>
              ClaudeRemote communicates exclusively over your local network (LAN/WiFi) between your
              iPhone and your Mac. It uses Apple&apos;s Bonjour protocol for device discovery, which
              broadcasts only the relay server&apos;s presence on your local network. No data is transmitted
              to external servers, cloud services, or Anthropic. The relay server running on your Mac
              connects to Claude Code, which is a local process on your Mac.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#FF8C00" }}>
              5. Third-Party Services
            </h2>
            <p className="leading-relaxed" style={{ color: "#A0896A" }}>
              ClaudeRemote does not integrate with any third-party analytics, advertising, or data
              collection services. The app does not use crash reporting SDKs that transmit data externally.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#FF8C00" }}>
              6. Children&apos;s Privacy
            </h2>
            <p className="leading-relaxed" style={{ color: "#A0896A" }}>
              ClaudeRemote is designed for software developers and is not intended for children under
              13 years of age. We do not knowingly collect information from children.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#FF8C00" }}>
              7. Open Source
            </h2>
            <p className="leading-relaxed" style={{ color: "#A0896A" }}>
              ClaudeRemote is open source. You can inspect every line of code that runs on your device
              at{" "}
              <a
                href="https://github.com/mitre88/clauderemote"
                className="underline hover:text-brand-orange transition-colors"
                style={{ color: "#FF8C00" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/mitre88/clauderemote
              </a>
              . Privacy claims are verifiable.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#FF8C00" }}>
              8. Changes to This Policy
            </h2>
            <p className="leading-relaxed" style={{ color: "#A0896A" }}>
              If we update this privacy policy, we will update the date at the top of this page and,
              where appropriate, notify users via the app or GitHub repository.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#FF8C00" }}>
              9. Contact
            </h2>
            <p className="leading-relaxed" style={{ color: "#A0896A" }}>
              For privacy-related questions, open an issue on our{" "}
              <a
                href="https://github.com/mitre88/clauderemote"
                className="underline hover:text-brand-orange transition-colors"
                style={{ color: "#FF8C00" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub repository
              </a>{" "}
              or visit our{" "}
              <Link
                href="/support"
                className="underline hover:text-brand-orange transition-colors"
                style={{ color: "#FF8C00" }}
              >
                support page
              </Link>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
