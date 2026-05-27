import AssetFrame from "@/components/AssetFrame";
import SectionShell from "@/components/sections/SectionShell";
import { featuredRelease } from "@/data/releases";
import { isActiveHref } from "@/lib/links";
import Link from "next/link";

export default function MusicSection() {
  const activeStreamingLinks = featuredRelease.streamingLinks.filter((link) =>
    isActiveHref(link.href)
  );

  const hasPurchaseLink = isActiveHref(featuredRelease.purchaseLink?.href);

  return (
    <SectionShell id="music" eyebrow="Latest Release" title={featuredRelease.title}>
      <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
        <AssetFrame
          src={featuredRelease.coverImage}
          alt={`${featuredRelease.title} cover art`}
          label="Album Art"
        />

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
            {activeStreamingLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="border border-stone-200/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-300 transition hover:border-stone-100 hover:text-stone-100"
              >
                {link.label}
              </a>
            ))}

            {hasPurchaseLink && featuredRelease.purchaseLink && (
              <a
                href={featuredRelease.purchaseLink.href}
                className="border border-stone-100 bg-stone-100 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-stone-100"
              >
                {featuredRelease.purchaseLink.label}
              </a>
            )}

            <Link
              href="/music"
              className="border border-stone-200/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-300 transition hover:border-stone-100 hover:text-stone-100"
            >
              View Music Page
            </Link>
          </div>

          {activeStreamingLinks.length === 0 && !hasPurchaseLink && (
            <p className="mt-5 text-sm text-stone-600">
              Streaming and digital download links will be added soon.
            </p>
          )}
        </div>
      </div>
    </SectionShell>
  );
}