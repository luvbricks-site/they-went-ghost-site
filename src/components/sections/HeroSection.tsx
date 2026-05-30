import AssetFrame from "@/components/AssetFrame";
import ComicCaption from "@/components/ComicCaption";
import ComicPanel from "@/components/ComicPanel";
import TwgButton from "@/components/TwgButton";
import { aboutContent } from "@/data/about";
import { bandMembers } from "@/data/bandMembers";
import { featuredRelease } from "@/data/releases";

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
        {/* LEFT SIDE: album cover feature */}
        <div className="max-w-xl">
          <ComicCaption>Official Site • Album Promo</ComicCaption>

          <div className="max-w-xl">
          <ComicCaption>ISSUE O1</ComicCaption></div>

          <div className="mt-5">
            <AssetFrame
              src={featuredRelease.coverImage}
              alt={`${featuredRelease.title} cover art`}
              label="Album Cover"
              aspect="square"
              className="twg-panel-tilt-left mx-auto w-full max-w-140"
            />
          </div>

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <TwgButton href="/listen" variant="primary">
              Listen Now
            </TwgButton>

            <TwgButton href="/videos">Watch Video</TwgButton>

            <TwgButton href="/music">View EP</TwgButton>
          </div>
        </div>

        {/* RIGHT SIDE: band photo, members, short bio */}
        <div className="hidden lg:grid gap-5">
          <AssetFrame
            src={aboutContent.bandPhoto}
            alt="They Went Ghost band promo photo"
            label="Band Photo"
            aspect="wide"
            imageClassName="object-contain bg-black"
            className="twg-panel-tilt-right w-full"
          />

          <div className="grid grid-cols-4 gap-5">
            {bandMembers.map((member, index) => (
              <ComicPanel
                key={member.name}
                className="aspect-3/4 p-2"
                cut={index % 2 === 0 ? "left" : "right"}
              >
                <div className="relative h-full overflow-hidden border border-stone-200/10 bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-black/75 to-transparent p-3">
                    <p className="twg-safe-text font-display text-base uppercase leading-none tracking-tighter text-stone-100">
                      {member.name}
                    </p>

                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#c8b89b]">
                      {member.role}
                    </p>
                  </div>
                </div>
              </ComicPanel>
            ))}
          </div>

          <ComicPanel className="p-5" cut="left">
            <ComicCaption>Short Band Bio</ComicCaption>

            <p className="twg-copy-caps mt-5 text-sm text-stone-300">
              {aboutContent.homepageSummary}
            </p>
          </ComicPanel>
        </div>
      </div>
    </section>
  );
}