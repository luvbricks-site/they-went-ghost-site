
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

      <HomeStoryPanel
        src="/story-panels/rooftop-rock.png"
        alt="Graphic novel panel showing They Went Ghost performing on the roof of the old theater and retaking the city through music"
      />

      <ShowsSection />
      <MerchSection />

      <HomeStoryPanel
        src="/story-panels/victory.png"
        alt="Graphic novel panel showing They Went Ghost victorious on the roof of the old theater with the caption Victory"
      />

      <ContactSection />

      <SiteFooter />
    </main>
  );
}