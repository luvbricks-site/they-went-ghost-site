import { siteConfig } from "@/data/site";

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden border-b border-stone-200/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(120,113,108,0.28),transparent_36%),linear-gradient(135deg,rgba(0,0,0,0.92),rgba(28,25,23,0.84),rgba(0,0,0,0.96))]" />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center px-4 py-20">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.45em] text-stone-500">
            Original Music • Dark Cinematic Rock
          </p>

          <h1 className="font-display text-6xl uppercase leading-[0.9] tracking-[-0.08em] text-stone-100 sm:text-7xl md:text-8xl lg:text-9xl">
            {siteConfig.bandName}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-300 md:text-xl">
            {siteConfig.tagline}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#music"
              className="inline-flex items-center justify-center border border-stone-100 bg-stone-100 px-6 py-3 text-xs font-black uppercase tracking-[0.25em] text-black transition hover:bg-transparent hover:text-stone-100"
            >
              Listen to the EP
            </a>

            <a
              href="#videos"
              className="inline-flex items-center justify-center border border-stone-300/30 px-6 py-3 text-xs font-black uppercase tracking-[0.25em] text-stone-100 transition hover:border-stone-100 hover:bg-stone-100 hover:text-black"
            >
              Watch Videos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}