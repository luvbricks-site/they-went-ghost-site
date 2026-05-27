import SectionShell from "@/components/sections/SectionShell";

export default function MusicSection() {
  return (
    <SectionShell id="music" eyebrow="Latest Release" title="Self-Titled EP">
      <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
        <div className="aspect-square border border-stone-200/15 bg-stone-900/80 p-6 shadow-2xl">
          <div className="grid h-full place-items-center border border-stone-200/10 bg-black/70 text-center">
            <div>
              <p className="font-display text-4xl uppercase tracking-tighter">
                Album Art
              </p>

              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-stone-500">
                Placeholder
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-stone-300">
            The newest They Went Ghost EP is self-titled. This section will hold
            cover art, track list, release date, streaming links, and a digital
            download purchase option.
          </p>

          <div className="mt-6 grid gap-3 text-sm text-stone-300">
            <div className="border-b border-stone-200/10 pb-3">
              01. Track One
            </div>
            <div className="border-b border-stone-200/10 pb-3">
              02. Track Two
            </div>
            <div className="border-b border-stone-200/10 pb-3">
              03. Track Three
            </div>
            <div className="border-b border-stone-200/10 pb-3">
              04. Track Four
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}