import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — ClaudeRemote",
  description: "ClaudeRemote terms of service. Clear, fair terms for using the app.",
};

export default function TermsOfService() {
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
          Terms of Service
        </h1>
        <p className="text-sm mb-12" style={{ color: "#7A6A50" }}>
          Last updated: January 1, 2026
        </p>

        <div className="space-y-10" style={{ color: "#A0896A" }}>
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#FF8C00" }}>
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              By downloading or using ClaudeRemote, you agree to be bound by these Terms of Service.
              If you do not agree to these terms, do not use the application. ClaudeRemote is provided
              as-is, free of charge, as an open-source project.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#FF8C00" }}>
              2. Description of Service
            </h2>
            <p className="leading-relaxed">
              ClaudeRemote is an iOS application that enables users to remotely control Claude Code
              sessions running on their Mac via a local network relay. The app facilitates communication
              between your iPhone and your Mac. ClaudeRemote is not affiliated with, endorsed by, or
              officially connected to Anthropic PBC or the Claude AI product.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#FF8C00" }}>
              3. License and Open Source
            </h2>
            <p className="leading-relaxed">
              ClaudeRemote is released under the MIT License. You are free to use, copy, modify, merge,
              publish, distribute, sublicense, and sell copies of the software, subject to the conditions
              of the MIT License. The full license text is available in the{" "}
              <a
                href="https://github.com/mitre88/clauderemote"
                className="underline transition-colors"
                style={{ color: "#FF8C00" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub repository
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#FF8C00" }}>
              4. Acceptable Use
            </h2>
            <p className="mb-4 leading-relaxed">
              You agree to use ClaudeRemote only for lawful purposes. You may not:
            </p>
            <ul className="space-y-2">
              {[
                "Use the app to violate any local, national, or international laws",
                "Use the app to access computing resources you do not own or have permission to use",
                "Modify the app to remove attribution or misrepresent its origin",
                "Use the app to process or transmit malicious code",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span style={{ color: "#FF8C00" }} className="mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#FF8C00" }}>
              5. Intellectual Property
            </h2>
            <p className="leading-relaxed">
              The ClaudeRemote name, Remo mascot design, and associated branding are owned by Dr. Alex Mitre.
              The source code is available under the MIT License. &quot;Claude&quot; and &quot;Claude Code&quot; are
              trademarks of Anthropic PBC. ClaudeRemote is not affiliated with Anthropic.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#FF8C00" }}>
              6. Disclaimer of Warranties
            </h2>
            <p className="leading-relaxed">
              ClaudeRemote is provided &quot;as is&quot; without warranty of any kind, express or implied,
              including but not limited to warranties of merchantability, fitness for a particular purpose,
              and non-infringement. We do not warrant that the app will be error-free, uninterrupted,
              or meet your specific requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#FF8C00" }}>
              7. Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              In no event shall Dr. Alex Mitre or ClaudeRemote contributors be liable for any indirect,
              incidental, special, exemplary, or consequential damages arising from your use of the app,
              even if advised of the possibility of such damages. Total liability shall not exceed the
              amount you paid for the app (zero, as it is free).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#FF8C00" }}>
              8. Governing Law
            </h2>
            <p className="leading-relaxed">
              These terms are governed by and construed in accordance with the laws of Mexico,
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#FF8C00" }}>
              9. Changes to Terms
            </h2>
            <p className="leading-relaxed">
              We reserve the right to update these terms at any time. Changes will be reflected by
              updating the date at the top of this page. Continued use of the app after changes
              constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#FF8C00" }}>
              10. Contact
            </h2>
            <p className="leading-relaxed">
              For questions about these terms, open an issue on{" "}
              <a
                href="https://github.com/mitre88/clauderemote"
                className="underline transition-colors"
                style={{ color: "#FF8C00" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{" "}
              or visit our{" "}
              <Link
                href="/support"
                className="underline transition-colors"
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
