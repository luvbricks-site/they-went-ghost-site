import SiteHeader from "@/components/SiteHeader";
import { siteConfig, socialLinks } from "@/data/site";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-stone-100">
      <SiteHeader />

      <section className="relative isolate min-h-[88vh] overflow-hidden border-b border-stone-200/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(120,113,108,0.28),transparent_36%),linear-gradient(135deg,rgba(0,0,0,0.92),rgba(28,25,23,0.84),rgba(0,0,0,0.96))]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-size-[72px_72px]" />

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

      <Section id="music" eyebrow="Latest Release" title="Self-Titled EP">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
          <div className="aspect-square border border-stone-200/15 bg-stone-900/80 p-6 shadow-2xl">
            <div className="grid h-full place-items-center border border-stone-200/10 bg-black/70 text-center">
              <div>
                <p className="font-display text-4xl uppercase tracking-tighter">
                  Album Art
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-stone-500">
                  Placeholder
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-stone-300">
              The newest They Went Ghost EP is self-titled. This section will hold
              cover art, track list, release date, streaming links, and a digital
              download purchase option.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-stone-300">
              <div className="border-b border-stone-200/10 pb-3">01. Track One</div>
              <div className="border-b border-stone-200/10 pb-3">02. Track Two</div>
              <div className="border-b border-stone-200/10 pb-3">03. Track Three</div>
              <div className="border-b border-stone-200/10 pb-3">04. Track Four</div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="videos" eyebrow="Videos" title="Dark Theater Mode">
        <div className="aspect-video border border-stone-200/15 bg-stone-950 shadow-2xl">
          <div className="grid h-full place-items-center text-center">
            <div>
              <p className="font-display text-4xl uppercase tracking-tighter">
                YouTube Embed
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-stone-500">
                Official videos will live here
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="shows" eyebrow="Upcoming Shows" title="Next Show">
        <div className="border border-stone-200/15 bg-stone-950/70 p-6">
          <p className="text-stone-300">
            Upcoming show details will go here: venue, city, date, time, ticket
            link, flyer, age restriction, lineup, and map link.
          </p>
        </div>
      </Section>

      <Section id="merch" eyebrow="Merch" title="Apparel & Music">
        <div className="grid gap-4 md:grid-cols-2">
          <MerchCard title="Apparel" description="Shirts, hoodies, hats, tanks, mugs, and more." />
          <MerchCard title="Music" description="Digital downloads and album-related products." />
        </div>
      </Section>

      <Section id="about" eyebrow="About" title="Original Music First">
        <p className="max-w-3xl text-stone-300">
          They Went Ghost is presented here as an original-music-first band. Cover
          gigs can be mentioned as a secondary booking note, but the main identity
          of this website is the band’s original music, releases, videos, and merch.
        </p>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Booking & Links">
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="border border-stone-200/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-300 transition hover:border-stone-100 hover:text-stone-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Section>
    </main>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-b border-stone-200/10 bg-black px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-stone-600">
          {eyebrow}
        </p>
        <h2 className="font-display mb-8 text-4xl uppercase tracking-[-0.06em] text-stone-100 md:text-6xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

function MerchCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="min-h-56 border border-stone-200/15 bg-stone-950/70 p-6 transition hover:border-stone-100/50">
      <h3 className="font-display text-4xl uppercase tracking-[-0.06em]">
        {title}
      </h3>
      <p className="mt-4 text-stone-400">{description}</p>
    </div>
  );
}