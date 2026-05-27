import AssetFrame from "@/components/AssetFrame";
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
      <div className="grid gap-8">
        {releases.map((release) => {
          const activeStreamingLinks = release.streamingLinks.filter((link) =>
            isActiveHref(link.href)
          );

          const hasPurchaseLink = isActiveHref(release.purchaseLink?.href);

          return (
            <article
              key={release.slug}
              className="grid gap-8 border border-stone-200/15 bg-stone-950/70 p-6 lg:grid-cols-[280px_1fr]"
            >
              <AssetFrame
                src={release.coverImage}
                alt={`${release.title} cover art`}
                label="Cover Art"
              />

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-stone-600">
                  {release.type} • {release.releaseDate}
                </p>

                <h2 className="font-display mt-3 text-5xl uppercase tracking-tighter text-stone-100">
                  {release.title}
                </h2>

                <p className="mt-4 max-w-3xl text-stone-400">
                  {release.shortDescription}
                </p>

                <div className="mt-6 grid gap-3 text-sm text-stone-300">
                  {release.tracks.map((track) => (
                    <div
                      key={`${release.slug}-${track.number}`}
                      className="flex justify-between border-b border-stone-200/10 pb-3"
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

                  {hasPurchaseLink && release.purchaseLink && (
                    <a
                      href={release.purchaseLink.href}
                      className="border border-stone-100 bg-stone-100 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-stone-100"
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
              </div>
            </article>
          );
        })}
      </div>
    </SubPageLayout>
  );
}