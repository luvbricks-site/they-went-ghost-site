import AssetFrame from "@/components/AssetFrame";
import TwgButton from "@/components/TwgButton";
import { aboutContent } from "@/data/about";
import { featuredRelease } from "@/data/releases";
import { siteConfig } from "@/data/site";

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden border-b border-stone-200/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(138,111,77,0.22),transparent_35%),linear-gradient(135deg,rgba(0,0,0,0.92),rgba(28,25,23,0.84),rgba(0,0,0,0.96))]" />

      <div className="absolute inset-0 opacity-[0.075] twg-scratch" />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.45em] text-[#8a6f4d]">
            Original Music • Dark Cinematic Rock
          </p>

          <h1 className="twg-glitch font-display text-6xl uppercase leading-[0.84] tracking-[-0.08em] text-stone-100 sm:text-7xl md:text-8xl lg:text-9xl">
            {siteConfig.bandName}
          </h1>

          <p className="mt-8 max-w-2xl border-l border-stone-200/15 pl-5 text-lg leading-8 text-stone-300 md:text-xl">
            {siteConfig.tagline}
          </p>

          <div className="mt-8 max-w-xl border border-stone-200/10 bg-black/30 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-stone-600">
              Featured Release
            </p>

            <p className="font-display mt-3 text-4xl uppercase tracking-tighter text-stone-100">
              {featuredRelease.title}
            </p>

            <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[#8a6f4d]">
              {featuredRelease.releaseDate}
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <TwgButton href="/listen" variant="primary">
              Listen Now
            </TwgButton>

            <TwgButton href="/videos">Watch Video</TwgButton>

            <TwgButton href="/music">View EP</TwgButton>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="grid gap-5">
            <div className="grid grid-cols-[0.9fr_1.1fr] gap-5">
              <AssetFrame
                src={featuredRelease.coverImage}
                alt={`${featuredRelease.title} cover art`}
                label="EP Cover"
                aspect="square"
                className="rotate-[-1.5deg]"
              />

              <AssetFrame
                src={aboutContent.bandPhoto}
                alt="They Went Ghost band promo photo"
                label="Band Photo"
                aspect="poster"
                className="translate-y-8 rotate-[1.5deg]"
              />
            </div>

            <div className="twg-panel twg-panel-cut p-5">
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#8a6f4d]">
                Self-Titled EP
              </p>

              <div className="mt-4 grid gap-2 text-sm text-stone-300">
                {featuredRelease.tracks.map((track) => (
                  <div
                    key={`${track.number}-${track.title}`}
                    className="flex gap-3 border-b border-stone-200/10 pb-2"
                  >
                    <span className="text-stone-600">{track.number}</span>
                    <span>{track.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}