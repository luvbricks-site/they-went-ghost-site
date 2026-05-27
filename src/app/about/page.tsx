import SubPageLayout from "@/components/SubPageLayout";

export default function AboutPage() {
  return (
    <SubPageLayout
      eyebrow="About"
      title="They Went Ghost"
      description="A dark cinematic rock project focused first on original music."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6 text-stone-300">
          <p>
            They Went Ghost is presented as an original-music-first band with a
            serious, dark, cinematic identity.
          </p>

          <p>
            The visual direction of the site pulls from smoky graphic-novel
            texture, shadow-heavy rock imagery, handwritten type, and organized
            chaos rather than traditional horror styling.
          </p>

          <p>
            Cover gigs can be mentioned as a secondary booking option, but the
            main identity of the site should remain centered on original music,
            releases, videos, shows, and official merch.
          </p>
        </div>

        <aside className="border border-stone-200/15 bg-stone-950/70 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-stone-600">
            Visual Direction
          </p>

          <ul className="mt-5 space-y-3 text-sm text-stone-400">
            <li>Dark cinematic rock</li>
            <li>Graphic novel grit</li>
            <li>Smoky gray, sepia, tan, off-white</li>
            <li>Professional, not gimmicky</li>
            <li>Organized but intentionally chaotic</li>
          </ul>
        </aside>
      </div>
    </SubPageLayout>
  );
}