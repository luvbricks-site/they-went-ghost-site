import HomeComicBreak from "@/components/HomeComicBreak";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import MerchSection from "@/components/sections/MerchSection";
import MusicSection from "@/components/sections/MusicSection";
import ShowsSection from "@/components/sections/ShowsSection";
import VideoSection from "@/components/sections/VideoSection";
import HomeStoryPanel from "@/components/HomeStoryPanel";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-stone-100">
      <SiteHeader />

      <HeroSection />

      <HomeStoryPanel
        src="/story-panels/old-theatre.png"
        alt="Graphic novel panel showing a sewer grate rumbling beneath the city with the caption A Low Rumble From the Sewer"
      />

      <MusicSection />

      <HomeStoryPanel
        src="/story-panels/heroes-rising-in-the-dark-theater.png"
        alt="Graphic novel panel showing the band emerging in a dark theater with the caption Our Heroes Have Risen"
      />

      <VideoSection />

      <HomeComicBreak
        eyebrow="Chapter 3"
        title="!BANG!...RETAKING THE CITY...!BOOM!"
        description=""
        issueLabel="03"
      />

      <ShowsSection />
      <MerchSection />

      <HomeComicBreak
        eyebrow="The Final Chapter"
        title="VICTORY! THE CITY IS OURS! FOR NOW..."
        description=""
        issueLabel="04"
      />

      <ContactSection />

      <SiteFooter />
    </main>
  );
}