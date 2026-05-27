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
      <MusicSection />
      <VideoSection />
      <ShowsSection />
      <MerchSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}