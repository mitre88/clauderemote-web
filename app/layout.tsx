import type { Metadata } from "next";
import "./globals.css";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ClaudeRemote",
  operatingSystem: "iOS",
  applicationCategory: "DeveloperApplication",
  description: "Control Claude Code sessions remotely from your iPhone. View sessions, send prompts, and manage workflows from anywhere.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "Dr. Alex Mitre",
  },
};

export const metadata: Metadata = {
  title: "ClaudeRemote — Claude Code from your iPhone, any model, any effort",
  description: "Run Claude Code sessions from your iPhone. Pick the model (Opus, Sonnet, Haiku), dial reasoning effort from Standard to Ultrathink, send prompts, and monitor workflows from anywhere — no cloud required.",
  keywords: ["Claude Code", "Claude Opus", "Claude Sonnet", "Claude Haiku", "remote control", "iOS app", "developer tools", "AI assistant", "iPhone", "MacBook", "Bonjour", "SwiftUI", "ultrathink"],
  authors: [{ name: "Dr. Alex Mitre" }],
  creator: "Dr. Alex Mitre",
  openGraph: {
    title: "ClaudeRemote — Control Claude Code from Your iPhone",
    description: "Send prompts, monitor sessions, manage workflows — all from your iPhone, even miles away from your Mac.",
    url: "https://clauderemote.vercel.app",
    siteName: "ClaudeRemote",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ClaudeRemote — Control Claude Code from Your iPhone",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClaudeRemote — Control Claude Code from Your iPhone",
    description: "Send prompts, monitor sessions, manage workflows — all from your iPhone.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://clauderemote.vercel.app"),
  alternates: {
    canonical: "https://clauderemote.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
