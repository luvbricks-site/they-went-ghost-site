import ComicCaption from "@/components/ComicCaption";
import ComicPanel from "@/components/ComicPanel";
import SectionShell from "@/components/sections/SectionShell";
import { nextShow } from "@/data/shows";
import Link from "next/link";

export default function ShowsSection() {
  return (
    <SectionShell id="shows" eyebrow="Upcoming Shows" title="Next Show">
      <ComicPanel className="p-6" cut="right">
        {nextShow ? (
          <>
            <ComicCaption>
              {nextShow.date} • {nextShow.time}
            </ComicCaption>

            <h3 className="font-display mt-6 text-4xl uppercase tracking-tighter text-stone-100">
              {nextShow.title}
            </h3>

            <p className="mt-3 text-stone-300">
              {nextShow.venue} — {nextShow.city}, {nextShow.state}
            </p>
          </>
        ) : (
          <>
            <ComicCaption>No Dates Listed</ComicCaption>

            <p className="mt-6 text-stone-300">
              No upcoming shows are currently listed. Booking information and
              future show announcements will appear here.
            </p>
          </>
        )}

        <Link
          href="/shows"
          className="twg-glitch-hover twg-touch-target mt-8 inline-flex items-center justify-center border border-stone-200/15 px-4 py-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-stone-300 transition hover:border-stone-100 hover:text-stone-100"
        >
          View Shows Page
        </Link>
      </ComicPanel>
    </SectionShell>
  );
}