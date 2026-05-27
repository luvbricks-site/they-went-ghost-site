import AssetFrame from "@/components/AssetFrame";
import ComicCaption from "@/components/ComicCaption";
import ComicPanel from "@/components/ComicPanel";
import SubPageLayout from "@/components/SubPageLayout";
import { releases } from "@/data/releases";
import { isActiveHref } from "@/lib/links";

export default function MusicPage() {
  return (
    <SubPageLayout
      eyebrow="Music"
      title="Releases"
      description="Albums, EPs, track lists, release dates, streaming links, and digital downloads from They Went Ghost."
    >
      <div className="grid gap-10">
        {releases.map((release) => {
          const activeStreamingLinks = release.streamingLinks.filter((link) =>
            isActiveHref(link.href)
          );

          const hasPurchaseLink = isActiveHref(release.purchaseLink?.href);

          return (
            <article
              key={release.slug}
              className="grid gap-6 lg:grid-cols-[360px_1fr]"
            >
              <div>
                <AssetFrame
                  src={release.coverImage}
                  alt={`${release.title} cover art`}
                  label="Cover Art"
                  className="mx-auto max-w-105 lg:max-w-none"
                />
              </div>

              <ComicPanel className="p-6 sm:p-8" cut="left">
                <ComicCaption>
                  {release.type} • {release.releaseDate}
                </ComicCaption>

                <h2 className="twg-ink-line font-display mt-6 text-5xl uppercase leading-none tracking-tighter text-stone-100 sm:text-6xl">
                  {release.title}
                </h2>

                <p className="mt-8 max-w-3xl text-stone-300">
                  {release.shortDescription}
                </p>

                <div className="mt-8 border-y border-stone-200/10 py-4">
                  <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#8a6f4d]">
                    Track List
                  </p>

                  <div className="grid gap-3 text-sm text-stone-300">
                    {release.tracks.map((track) => (
                      <div
                        key={`${release.slug}-${track.number}`}
                        className="twg-safe-text grid grid-cols-[42px_1fr] gap-3 border-b border-stone-200/10 pb-3 last:border-b-0 last:pb-0"
                      >
                        <span className="text-stone-600">{track.number}</span>
                        <span>{track.title}</span>
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

                  {hasPurchaseLink && release.purchaseLink && (
                    <a
                      href={release.purchaseLink.href}
                      className="twg-glitch-hover twg-touch-target inline-flex items-center justify-center border border-stone-100 bg-stone-100 px-4 py-2 text-center text-xs font-black uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-stone-100"
                    >
                      {release.purchaseLink.label}
                    </a>
                  )}
                </div>

                {activeStreamingLinks.length === 0 && !hasPurchaseLink && (
                  <p className="mt-5 text-sm text-stone-600">
                    Streaming and digital download links will be added soon.
                  </p>
                )}
              </ComicPanel>
            </article>
          );
        })}
      </div>
    </SubPageLayout>
  );
}