import ComicCaption from "@/components/ComicCaption";
import ComicPanel from "@/components/ComicPanel";
import SubPageLayout from "@/components/SubPageLayout";
import { videos } from "@/data/videos";

export default function VideosPage() {
  return (
    <SubPageLayout
      eyebrow="Videos"
      title="Dark Theater"
      description="Official They Went Ghost music videos and promo videos embedded from YouTube."
    >
      <div className="grid gap-10">
        {videos.map((video) => (
          <article key={video.slug} className="grid gap-5">
            <ComicPanel className="p-3 sm:p-4" cut="none">
              <div className="aspect-video border border-stone-200/15 bg-stone-950 shadow-2xl">
                {video.youtubeId ? (
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div className="grid h-full place-items-center text-center">
                    <div>
                      <p className="font-display text-4xl uppercase tracking-tighter">
                        YouTube Embed
                      </p>
                      <p className="mt-3 text-xs uppercase tracking-[0.25em] text-stone-500">
                        Placeholder
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </ComicPanel>

            <ComicPanel className="p-6" cut="left">
              <ComicCaption>Featured Video</ComicCaption>

              <h2 className="font-display mt-6 text-4xl uppercase tracking-tighter text-stone-100">
                {video.title}
              </h2>

              <p className="mt-3 max-w-3xl text-stone-400">
                {video.description}
              </p>
            </ComicPanel>
          </article>
        ))}
      </div>
    </SubPageLayout>
  );
}