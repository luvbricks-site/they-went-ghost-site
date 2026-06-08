import AssetFrame from "@/components/AssetFrame";
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
            View Shows Page
          </Link>
        </ComicPanel>

        {nextShow ? (
          <AssetFrame
            src={nextShow.flyerImage}
            alt={`${nextShow.title} flyer`}
            label="Show Flyer"
            sublabel="Coming Soon"
            aspect="poster"
            className="mx-auto w-full max-w-105 lg:max-w-none"
          />
        ) : (
          <ComicPanel className="p-6" cut="left">
            <ComicCaption>No Dates Listed</ComicCaption>

            <p className="twg-copy-caps mt-6 text-sm text-stone-300">
              No upcoming shows are currently listed. Future show announcements
              will appear here.
            </p>
          </ComicPanel>
        )}
      </div>
    </SectionShell>
  );
}