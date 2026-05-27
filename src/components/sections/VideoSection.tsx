import SectionShell from "@/components/sections/SectionShell";

export default function VideoSection() {
  return (
    <SectionShell id="videos" eyebrow="Videos" title="Dark Theater Mode">
      <div className="aspect-video border border-stone-200/15 bg-stone-950 shadow-2xl">
        <div className="grid h-full place-items-center text-center">
          <div>
            <p className="font-display text-4xl uppercase tracking-tighter">
              YouTube Embed
            </p>

            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-stone-500">
              Official videos will live here
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}