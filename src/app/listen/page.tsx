import ComicCaption from "@/components/ComicCaption";
import ComicPanel from "@/components/ComicPanel";
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
        <div className="grid gap-5 md:grid-cols-2">
          {activeStreamingLinks.map((link, index) => (
            <ComicPanel
              key={link.label}
              className="group min-h-56 p-6 transition hover:border-stone-100"
              cut={index % 2 === 0 ? "right" : "left"}
            >
              <ComicCaption>Streaming Platform</ComicCaption>

              <h2 className="font-display mt-8 text-5xl uppercase leading-none tracking-tighter text-stone-100">
                {link.label}
              </h2>

              <p className="mt-4 text-stone-500 group-hover:text-stone-300">
                Open They Went Ghost on {link.label}.
              </p>

              <a
                href={link.href}
                className="twg-glitch-hover twg-touch-target mt-8 inline-flex items-center justify-center border border-stone-200/15 px-4 py-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-stone-300 transition hover:border-stone-100 hover:text-stone-100"
              >
                Open Link
              </a>
            </ComicPanel>
          ))}
        </div>
      ) : (
        <ComicPanel className="p-6">
          <p className="text-stone-300">
            Streaming links are being prepared. Spotify, Apple Music, YouTube
            Music, and YouTube links will be added here when ready.
          </p>
        </ComicPanel>
      )}
    </SubPageLayout>
  );
}