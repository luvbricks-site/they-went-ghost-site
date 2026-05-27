import TwgButton from "@/components/TwgButton";
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

      <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-4 py-20 lg:grid-cols-[1.15fr_0.85fr]">
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

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <TwgButton href="/music" variant="primary">
              Listen to the EP
            </TwgButton>

            <TwgButton href="/videos">Watch Videos</TwgButton>
          </div>
        </div>

        <div className="twg-panel twg-panel-cut hidden min-h-[130] p-5 lg:block">
          <div className="relative h-full overflow-hidden border border-stone-200/10 bg-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,184,155,0.16),transparent_34%),linear-gradient(145deg,rgba(0,0,0,0.2),rgba(0,0,0,0.92))]" />
            <div className="absolute inset-0 opacity-[0.12] twg-scratch" />

            <div className="absolute left-6 top-6 border border-stone-200/15 bg-black/60 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-stone-400">
              Album Promo
            </div>

            <div className="absolute bottom-8 left-6 right-6">
              <p className="font-display text-5xl uppercase leading-none tracking-tighter text-stone-100">
                Intro Video
              </p>

              <p className="mt-3 max-w-sm text-sm leading-6 text-stone-400">
                The final landing video and poster frame will drop into the
                public media folder when ready.
              </p>
            </div>

            <div className="absolute `-right-15` top-20 h-24 w-72 rotate-12 border border-stone-200/10 bg-stone-100/5" />
            <div className="absolute bottom-24 `-right-22.5` h-16 w-80 -rotate-12 border border-[#8a6f4d]/30 bg-[#8a6f4d]/10" />
          </div>
        </div>
      </div>
    </section>
  );
}