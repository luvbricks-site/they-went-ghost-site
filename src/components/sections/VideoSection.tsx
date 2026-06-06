import ComicCaption from "@/components/ComicCaption";
import ComicPanel from "@/components/ComicPanel";
import SectionShell from "@/components/sections/SectionShell";
import { featuredVideo, supportingVideos } from "@/data/videos";
import Link from "next/link";

export default function VideoSection() {
  return (
    <SectionShell id="videos" eyebrow="Videos" title="THE INTERCEPTED SIGNAL">
      <div className="grid gap-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
          <ComicPanel className="p-3 sm:p-4" cut="none">
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
                <VideoPlaceholder title="Featured Video" />
              )}
            </div>
          </ComicPanel>

          <ComicPanel className="p-6" cut="left">
            <ComicCaption>Featured Videos</ComicCaption>

            {featuredVideo ? (
              <>
                <h3 className="font-display mt-6 text-4xl uppercase leading-none tracking-tighter text-stone-100">
                  {featuredVideo.title}
                </h3>

                <p className="twg-copy-caps mt-4 text-sm text-stone-400">
                  {featuredVideo.description}
                </p>

                {featuredVideo.youtubeUrl && (
                  <a
                    href={featuredVideo.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="twg-glitch-hover twg-touch-target mt-8 inline-flex items-center justify-center border border-stone-100 bg-stone-100 px-4 py-2 text-center text-xs font-black uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-stone-100"
                  >
                    Watch on YouTube
                  </a>
                )}
              </>
            ) : (
              <p className="mt-4 text-sm text-stone-500">
                Video information will be added soon.
              </p>
            )}

            <Link
              href="/videos"
              className="twg-glitch-hover twg-touch-target mt-4 inline-flex items-center justify-center border border-stone-200/15 px-4 py-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-stone-300 transition hover:border-stone-100 hover:text-stone-100"
            >
              View Video Page
            </Link>
          </ComicPanel>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {supportingVideos.slice(0, 2).map((video) => (
            <ComicPanel key={video.slug} className="p-3" cut="right">
              <div className="aspect-video border border-stone-200/15 bg-stone-950">
                {video.youtubeId ? (
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <VideoPlaceholder title={video.title} />
                )}
              </div>

              <div className="p-3">
                <p className="font-display text-2xl uppercase leading-none tracking-tighter text-stone-100">
                  {video.title}
                </p>

                {video.youtubeUrl ? (
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8b89b] transition hover:text-stone-100"
                  >
                    Watch on YouTube
                  </a>
                ) : (
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-600">
                    Coming Soon
                  </p>
                )}
              </div>
            </ComicPanel>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function VideoPlaceholder({ title }: { title: string }) {
  return (
    <div className="grid h-full place-items-center text-center">
      <div className="px-4">
        <p className="font-display text-3xl uppercase tracking-tighter text-stone-100">
          {title}
        </p>

        <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-stone-500">
          YouTube Embed Coming Soon
        </p>
      </div>
    </div>
  );
}