import SectionShell from "@/components/sections/SectionShell";
import { nextShow } from "@/data/shows";

export default function ShowsSection() {
  return (
    <SectionShell id="shows" eyebrow="Upcoming Shows" title="Next Show">
      {nextShow ? (
        <article className="border border-stone-200/15 bg-stone-950/70 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-stone-500">
            {nextShow.date} • {nextShow.time}
          </p>

          <h3 className="font-display mt-4 text-4xl uppercase tracking-tighter text-stone-100">
            {nextShow.title}
          </h3>

          <p className="mt-3 text-stone-300">
            {nextShow.venue} — {nextShow.city}, {nextShow.state}
          </p>

          {nextShow.lineup && (
            <p className="mt-2 text-sm text-stone-500">{nextShow.lineup}</p>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            {nextShow.ticketUrl && (
              <a
                href={nextShow.ticketUrl}
                className="border border-stone-100 bg-stone-100 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-stone-100"
              >
                Tickets
              </a>
            )}

            {nextShow.mapUrl && (
              <a
                href={nextShow.mapUrl}
                className="border border-stone-200/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-300 transition hover:border-stone-100 hover:text-stone-100"
              >
                Map
              </a>
            )}
          </div>
        </article>
      ) : (
        <div className="border border-stone-200/15 bg-stone-950/70 p-6">
          <p className="text-stone-300">
            No upcoming shows are currently listed. Booking information and
            future show announcements will appear here.
          </p>
        </div>
      )}
    </SectionShell>
  );
}