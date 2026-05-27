import SectionShell from "@/components/sections/SectionShell";
import { featuredRelease } from "@/data/releases";

export default function MusicSection() {
  return (
    <SectionShell id="music" eyebrow="Latest Release" title={featuredRelease.title}>
      <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
        <div className="aspect-square border border-stone-200/15 bg-stone-900/80 p-6 shadow-2xl">
          <div className="grid h-full place-items-center border border-stone-200/10 bg-black/70 text-center">
            {featuredRelease.coverImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={featuredRelease.coverImage}
                alt={`${featuredRelease.title} cover art`}
                className="h-full w-full object-cover"
              />
            ) : (
              <div>
                <p className="font-display text-4xl uppercase tracking-tighter">
                  Album Art
                </p>

                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-stone-500">
                  Placeholder
                </p>
              </div>
            )}
          </div>
        </div>

        <div>
          <p className="text-stone-300">{featuredRelease.shortDescription}</p>

          <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-stone-500">
            {featuredRelease.releaseDate}
          </p>

          <div className="mt-6 grid gap-3 text-sm text-stone-300">
            {featuredRelease.tracks.map((track) => (
              <div
                key={`${track.number}-${track.title}`}
                className="flex items-center justify-between border-b border-stone-200/10 pb-3"
              >
                <span>
                  {track.number}. {track.title}
                </span>

                {track.duration && (
                  <span className="text-stone-600">{track.duration}</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {featuredRelease.streamingLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="border border-stone-200/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-300 transition hover:border-stone-100 hover:text-stone-100"
              >
                {link.label}
              </a>
            ))}

            {featuredRelease.purchaseLink && (
              <a
                href={featuredRelease.purchaseLink.href}
                className="border border-stone-100 bg-stone-100 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-stone-100"
              >
                {featuredRelease.purchaseLink.label}
              </a>
            )}
              <a
                href="/music"
                className="border border-stone-200/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-300 transition hover:border-stone-100 hover:text-stone-100"
              >
                View Music Page
            </a>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}