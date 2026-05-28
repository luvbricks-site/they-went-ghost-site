import AssetFrame from "@/components/AssetFrame";
import ComicCaption from "@/components/ComicCaption";
import ComicPanel from "@/components/ComicPanel";
import TwgButton from "@/components/TwgButton";
import { aboutContent } from "@/data/about";
import { featuredRelease } from "@/data/releases";
import { siteConfig } from "@/data/site";

export default function HeroSection() {
  return (
    <section className="twg-comic-page relative isolate min-h-[90vh] overflow-hidden border-b border-stone-200/10">
      <div className="absolute inset-0 opacity-[0.075] twg-scratch" />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-10 px-4 py-12 sm:py-16 md:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
        <div className="max-w-4xl">
          <ComicCaption>Official Site • Album Promo</ComicCaption>

          <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.32em] text-[#8a6f4d] sm:text-xs sm:tracking-[0.45em]">
            Original Music • Dark Cinematic Rock
          </p>

          <h1 className="twg-glitch twg-mobile-tight-title font-display mt-4 text-5xl uppercase leading-[0.84] tracking-[-0.08em] text-stone-100 sm:text-7xl md:text-8xl lg:text-9xl">
            {siteConfig.bandName}
          </h1>

          <p className="mt-6 max-w-2xl border-l-2 border-[#8a6f4d]/45 pl-4 text-base leading-7 text-stone-300 sm:mt-8 sm:pl-5 sm:text-lg sm:leading-8 md:text-xl">
            {siteConfig.tagline}
          </p>

          <ComicPanel className="mt-7 p-5 sm:mt-8" cut="left">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-stone-600 sm:text-xs sm:tracking-[0.32em]">
              Featured Release
            </p>

            <p className="font-display mt-3 text-3xl uppercase leading-none tracking-tighter text-stone-100 sm:text-4xl">
              {featuredRelease.title}
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#8a6f4d] sm:tracking-[0.22em]">
              {featuredRelease.releaseDate}
            </p>
          </ComicPanel>

          <div className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap">
            <TwgButton href="/listen" variant="primary">
              Listen Now
            </TwgButton>

            <TwgButton href="/videos">Watch Video</TwgButton>

            <TwgButton href="/music">View EP</TwgButton>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="grid gap-5 md:grid-cols-[1.06fr_0.94fr] md:items-start">
            <AssetFrame
              src={aboutContent.bandPhoto}
              alt="They Went Ghost band promo photo"
              label="Band Photo"
              aspect="poster"
              className="twg-panel-tilt-left mx-auto w-full max-w-105 md:max-w-none"
            />

            <div className="grid gap-5">
              <AssetFrame
                src={featuredRelease.coverImage}
                alt={`${featuredRelease.title} cover art`}
                label="EP Cover"
                aspect="square"
                className="twg-panel-tilt-right mx-auto w-full max-w-90 md:max-w-none"
              />

              <ComicPanel className="p-5" cut="right">
                <ComicCaption>Track List</ComicCaption>

                <div className="mt-5 grid gap-2 text-sm text-stone-300">
                  {featuredRelease.tracks.map((track) => (
                    <div
                      key={`${track.number}-${track.title}`}
                      className="twg-safe-text grid grid-cols-[36px_1fr] gap-3 border-b border-stone-200/10 pb-2 last:border-b-0 last:pb-0"
                    >
                      <span className="text-stone-600">{track.number}</span>
                      <span>{track.title}</span>
                    </div>
                  ))}
                </div>
              </ComicPanel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}