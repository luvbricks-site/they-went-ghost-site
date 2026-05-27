import SectionShell from "@/components/sections/SectionShell";
import { featuredVideo } from "@/data/videos";
import Link from "next/link";

export default function VideoSection() {
  return (
    <SectionShell id="videos" eyebrow="Videos" title="Dark Theater Mode">
      <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
        <div className="aspect-video border border-stone-200/15 bg-stone-950 shadow-2xl">
          {featuredVideo?.youtubeId ? (
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${featuredVideo.youtubeId}`}
              title={featuredVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="grid h-full place-items-center text-center">
              <div>
                <p className="font-display text-4xl uppercase tracking-tighter">
                  YouTube Embed
                </p>

                <p className="mt-3 max-w-md text-xs uppercase tracking-[0.25em] text-stone-500">
                  Official videos will live here
                </p>
              </div>
            </div>
          )}
        </div>

        <aside className="twg-panel twg-panel-cut p-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8a6f4d]">
            Featured Video
          </p>

          {featuredVideo ? (
            <>
              <h3 className="font-display mt-4 text-4xl uppercase leading-none tracking-tighter text-stone-100">
                {featuredVideo.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-stone-400">
                {featuredVideo.description}
              </p>
            </>
          ) : (
            <p className="mt-4 text-sm text-stone-500">
              Video information will be added soon.
            </p>
          )}

          <Link
            href="/videos"
            className="twg-glitch-hover mt-8 inline-flex border border-stone-200/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-300 transition hover:border-stone-100 hover:text-stone-100"
          >
            View Video Page
          </Link>
        </aside>
      </div>
    </SectionShell>
  );
}