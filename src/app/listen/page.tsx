import SubPageLayout from "@/components/SubPageLayout";
import { featuredRelease } from "@/data/releases";
import { isActiveHref } from "@/lib/links";

export default function ListenPage() {
  const activeStreamingLinks = featuredRelease.streamingLinks.filter((link) =>
    isActiveHref(link.href)
  );

  return (
    <SubPageLayout
      eyebrow="Listen"
      title="Listen Everywhere"
      description="A dedicated streaming hub for They Went Ghost releases."
    >
      {activeStreamingLinks.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {activeStreamingLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group border border-stone-200/15 bg-stone-950/70 p-8 transition hover:border-stone-100"
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-stone-600">
                Streaming Platform
              </p>

              <h2 className="font-display mt-4 text-5xl uppercase tracking-tighter text-stone-100">
                {link.label}
              </h2>

              <p className="mt-4 text-stone-500 group-hover:text-stone-300">
                Open They Went Ghost on {link.label}.
              </p>
            </a>
          ))}
        </div>
      ) : (
        <div className="twg-panel twg-panel-cut p-6">
          <p className="text-stone-300">
            Streaming links are being prepared. Spotify, Apple Music, YouTube
            Music, and YouTube links will be added here when ready.
          </p>
        </div>
      )}
    </SubPageLayout>
  );
}