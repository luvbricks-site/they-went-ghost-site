import SectionShell from "@/components/sections/SectionShell";
import { featuredVideo } from "@/data/videos";

export default function VideoSection() {
  return (
    <SectionShell id="videos" eyebrow="Videos" title="Dark Theater Mode">
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

      {featuredVideo && (
        <div className="mt-6 max-w-3xl">
          <h3 className="font-display text-3xl uppercase tracking-tighter text-stone-100">
            {featuredVideo.title}
          </h3>

          <p className="mt-2 text-stone-400">{featuredVideo.description}</p>
        </div>
      )}
    </SectionShell>
  );
}