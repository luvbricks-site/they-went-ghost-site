import ComicCaption from "@/components/ComicCaption";
import ComicPanel from "@/components/ComicPanel";
import SectionShell from "@/components/sections/SectionShell";
import { merchCategories, merchStory } from "@/data/merch";
import Link from "next/link";

export default function MerchSection() {
  return (
    <SectionShell id="merch" eyebrow="Merch" title="Marked Against the Dark">
      <p className="twg-copy-caps mb-8 max-w-4xl text-sm text-stone-300 sm:text-base sm:leading-7">
        {merchStory}
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {merchCategories.map((category, index) => (
          <ComicPanel
            key={category.slug}
            className="min-h-56 p-6"
            cut={index % 2 === 0 ? "right" : "left"}
          >
            <ComicCaption>Get Battle Ready</ComicCaption>

            <h3 className="font-display mt-6 text-4xl uppercase tracking-tighter text-stone-100">
              {category.title}
            </h3>

            <p className="mt-4 text-stone-400">{category.description}</p>

            <Link
              href={category.href}
              className="twg-glitch-hover twg-touch-target mt-6 inline-flex items-center justify-center border border-stone-200/15 px-4 py-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-stone-300 transition hover:border-stone-100 hover:text-stone-100"
            >
              {category.buttonLabel}
            </Link>
          </ComicPanel>
        ))}
      </div>
    </SectionShell>
  );
}