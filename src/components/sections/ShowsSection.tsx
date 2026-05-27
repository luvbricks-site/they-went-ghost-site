import SectionShell from "@/components/sections/SectionShell";

export default function ShowsSection() {
  return (
    <SectionShell id="shows" eyebrow="Upcoming Shows" title="Next Show">
      <div className="border border-stone-200/15 bg-stone-950/70 p-6">
        <p className="text-stone-300">
          Upcoming show details will go here: venue, city, date, time, ticket
          link, flyer, age restriction, lineup, and map link.
        </p>
      </div>
    </SectionShell>
  );
}