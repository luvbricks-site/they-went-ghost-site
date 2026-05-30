import HomeComicBreak from "@/components/HomeComicBreak";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import MerchSection from "@/components/sections/MerchSection";
import MusicSection from "@/components/sections/MusicSection";
import ShowsSection from "@/components/sections/ShowsSection";
import VideoSection from "@/components/sections/VideoSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-stone-100">
      <SiteHeader />

      <HeroSection />

      <HomeComicBreak
        eyebrow="Issue 01"
        title="The Self-Titled EP"
        description=""
        issueLabel="01"
      />

      <MusicSection />

      <HomeComicBreak
        eyebrow="Dark Theater"
        title="Watch the Signal"
        description=""
        issueLabel="02"
      />

      <VideoSection />

      <HomeComicBreak
        eyebrow="Live / Merch / Identity"
        title="Everything Else Lives in the Margins"
        description=""
        issueLabel="03"
      />

      <ShowsSection />
      <MerchSection />
      <AboutSection />

      <HomeComicBreak
        eyebrow="Final Panel"
        title="Booking, Links, and Contact"
        description=""
        issueLabel="04"
      />

      <ContactSection />

      <SiteFooter />
    </main>
  );
}