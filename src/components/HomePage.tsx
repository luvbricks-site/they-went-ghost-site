import HomeComicBreak from "@/components/HomeComicBreak";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
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
        eyebrow="Chapter 1"
        title="!BOOM! A LOW RUMBLE FROM THE SEWER"
        description=""
        issueLabel="01"
      />

      <MusicSection />

      <HomeComicBreak
        eyebrow="Chapter 2"
        title="!BUZZZ!...OUR HEROES HAVE RISEN...!HISS!"
        description=""
        issueLabel="02"
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