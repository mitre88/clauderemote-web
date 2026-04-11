import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SmartAssistant from "@/components/SmartAssistant";
import HowItWorks from "@/components/HowItWorks";
import AppPreview from "@/components/AppPreview";
import MeetRemo from "@/components/MeetRemo";
import TechStack from "@/components/TechStack";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-dark overflow-x-hidden">
      <Hero />
      <Features />
      <SmartAssistant />
      <HowItWorks />
      <AppPreview />
      <MeetRemo />
      <TechStack />
      <Download />
      <Footer />
    </main>
  );
}
