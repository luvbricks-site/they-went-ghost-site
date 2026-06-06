import ComicCaption from "@/components/ComicCaption";
import ComicPanel from "@/components/ComicPanel";
import SectionShell from "@/components/sections/SectionShell";
import { nextShow, showsSectionContent } from "@/data/shows";
import Link from "next/link";

export default function ShowsSection() {
  return (
    <SectionShell
      id="shows"
      eyebrow="Live"
      title={showsSectionContent.title}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_420px] lg:items-start">
        <ComicPanel className="p-6" cut="right">
          <ComicCaption>Stage Report</ComicCaption>

          <p className="twg-copy-caps mt-6 text-sm text-stone-300">
            {showsSectionContent.summary}
          </p>

          <Link
            href="/shows"
            className="twg-glitch-hover twg-touch-target mt-8 inline-flex items-center justify-center border border-stone-200/15 px-4 py-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-stone-300 transition hover:border-stone-100 hover:text-stone-100"
          >
            Ckick for more shows
          </Link>
        </ComicPanel>

        <ComicPanel className="p-6" cut="left">
          {nextShow ? (
            <>
              <ComicCaption>Next Show</ComicCaption>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.28em] text-[#8a6f4d]">
                {nextShow.date} • {nextShow.time}
              </p>

              <h3 className="font-display mt-4 text-4xl uppercase leading-none tracking-tighter text-stone-100">
                {nextShow.title}
              </h3>

              <p className="mt-4 text-stone-300">
                {nextShow.venue} — {nextShow.city}, {nextShow.state}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {nextShow.ageRestriction && (
                  <span className="border border-stone-200/10 bg-black/30 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-stone-400">
                    {nextShow.ageRestriction}
                  </span>
                )}

                {nextShow.doorFee && (
                  <span className="border border-stone-200/10 bg-black/30 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-stone-400">
                    {nextShow.doorFee}
                  </span>
                )}
              </div>
            </>
          ) : (
            <>
              <ComicCaption>No Dates Listed</ComicCaption>

              <p className="twg-copy-caps mt-6 text-sm text-stone-300">
                No upcoming shows are currently listed. Booking information and
                future show announcements will appear here.
              </p>
            </>
          )}
        </ComicPanel>
      </div>
    </SectionShell>
  );
}