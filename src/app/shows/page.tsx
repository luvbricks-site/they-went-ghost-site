import ComicCaption from "@/components/ComicCaption";
import ComicPanel from "@/components/ComicPanel";
import SubPageLayout from "@/components/SubPageLayout";
import { upcomingShows } from "@/data/shows";

export default function ShowsPage() {
  return (
    <SubPageLayout
      eyebrow="Shows"
      title="Upcoming Shows"
      description="Upcoming live dates, venue information, ticket links, and booking details."
    >
      {upcomingShows.length > 0 ? (
        <div className="grid gap-6">
          {upcomingShows.map((show) => (
            <ComicPanel key={show.slug} className="p-6" cut="right">
              <ComicCaption>
                {show.date} • {show.time}
              </ComicCaption>

              <h2 className="font-display mt-6 text-5xl uppercase tracking-tighter">
                {show.title}
              </h2>

              <p className="mt-4 text-stone-300">
                {show.venue} — {show.city}, {show.state}
              </p>

              {show.ageRestriction && (
                <p className="mt-2 text-sm text-stone-500">
                  {show.ageRestriction}
                </p>
              )}

              {show.lineup && (
                <p className="mt-2 text-sm text-stone-500">{show.lineup}</p>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                {show.ticketUrl && (
                  <a
                    href={show.ticketUrl}
                    className="twg-glitch-hover twg-touch-target inline-flex items-center justify-center border border-stone-100 bg-stone-100 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-stone-100"
                  >
                    Tickets
                  </a>
                )}

                {show.mapUrl && (
                  <a
                    href={show.mapUrl}
                    className="twg-glitch-hover twg-touch-target inline-flex items-center justify-center border border-stone-200/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-300 transition hover:border-stone-100 hover:text-stone-100"
                  >
                    Map
                  </a>
                )}
              </div>
            </ComicPanel>
          ))}
        </div>
      ) : (
        <ComicPanel className="p-6" cut="left">
          <ComicCaption>No Dates Listed</ComicCaption>

          <p className="mt-6 text-stone-300">
            No upcoming shows are currently listed. Future show announcements
            will appear here.
          </p>

          <p className="mt-4 text-stone-500">
            For booking inquiries, use the contact page.
          </p>
        </ComicPanel>
      )}
    </SubPageLayout>
  );
}