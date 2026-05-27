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
      <div className="grid gap-8 lg:grid-cols-[360px_1fr] lg:items-start lg:gap-10">
        <AssetFrame
          src={featuredRelease.coverImage}
          alt={`${featuredRelease.title} cover art`}
          label="Album Art"
          className="mx-auto w-full max-w-90 lg:max-w-none"
        />

        <div>
          <p className="max-w-3xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">
            {featuredRelease.shortDescription}
          </p>

          <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-[#8a6f4d]">
            Released {featuredRelease.releaseDate}
          </p>

          <div className="mt-8 twg-panel twg-panel-cut p-4 sm:p-5">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-stone-600">
              Track List
            </p>

            <div className="grid gap-3 text-sm text-stone-300">
              {featuredRelease.tracks.map((track) => (
                <div
                  key={`${track.number}-${track.title}`}
                  className="twg-safe-text flex items-start gap-3 border-b border-stone-200/10 pb-3 sm:justify-between sm:gap-4"
                >
                  <span>
                    <span className="mr-3 shrink-0 text-stone-600">
                      {track.number}
                    </span>
                    {track.title}
                  </span>

                  {track.duration && (
                    <span className="hidden shrink-0 text-stone-600 sm:inline">
                      {track.duration}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            {activeStreamingLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="twg-glitch-hover twg-touch-target inline-flex items-center justify-center border border-stone-200/15 px-4 py-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-stone-300 transition hover:border-stone-100 hover:text-stone-100"
              >
                {link.label}
              </a>
            ))}

            {hasPurchaseLink && featuredRelease.purchaseLink && (
              <a
                href={featuredRelease.purchaseLink.href}
                className="twg-glitch-hover twg-touch-target inline-flex items-center justify-center border border-stone-100 bg-stone-100 px-4 py-2 text-center text-xs font-black uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-stone-100"
              >
                {featuredRelease.purchaseLink.label}
              </a>
            )}

            <Link
              href="/music"
              className="twg-glitch-hover twg-touch-target inline-flex items-center justify-center border border-stone-200/15 px-4 py-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-stone-300 transition hover:border-stone-100 hover:text-stone-100"
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