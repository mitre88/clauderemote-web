import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="py-12 px-6"
      style={{
        background: "#0D0A05",
        borderTop: "1px solid rgba(255, 140, 0, 0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl" aria-hidden="true">🦊</span>
              <span
                className="font-black text-xl"
                style={{
                  background: "linear-gradient(135deg, #FF8C00, #FFB347)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ClaudeRemote
              </span>
            </div>
            <p className="text-text-muted text-sm text-center md:text-left">
              Built with 🧡 for the Claude Code community
            </p>
            <p className="text-text-muted text-xs">
              By{" "}
              <a
                href="https://twitter.com/dralexmitre"
                className="transition-colors hover:text-brand-orange"
                style={{ color: "#A0896A" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Dr. Alex Mitre
              </a>
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6 justify-center" aria-label="Footer navigation">
            <a
              href="https://github.com/mitre88/clauderemote"
              className="text-text-muted hover:text-brand-orange transition-colors text-sm flex items-center gap-1.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://twitter.com/dralexmitre"
              className="text-text-muted hover:text-brand-orange transition-colors text-sm flex items-center gap-1.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter / X
            </a>
            <Link
              href="/privacy-policy"
              className="text-text-muted hover:text-brand-orange transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-text-muted hover:text-brand-orange transition-colors text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="/support"
              className="text-text-muted hover:text-brand-orange transition-colors text-sm"
            >
              Support
            </Link>
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p className="text-xs" style={{ color: "#5A4A30" }}>
            Copyright 2026 ClaudeRemote. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#5A4A30" }}>
            Not affiliated with Anthropic. ClaudeRemote is an independent open-source project.
          </p>
        </div>
      </div>
    </footer>
  );
}
