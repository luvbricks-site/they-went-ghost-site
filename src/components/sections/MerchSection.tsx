import ComicCaption from "@/components/ComicCaption";
import ComicPanel from "@/components/ComicPanel";
import SectionShell from "@/components/sections/SectionShell";
import { merchCategories } from "@/data/merch";
import Link from "next/link";

export default function MerchSection() {
  return (
    <SectionShell id="merch" eyebrow="Merch" title="Apparel & Music">
      <div className="grid gap-5 md:grid-cols-2">
        {merchCategories.map((category, index) => (
          <ComicPanel
            key={category.slug}
            className="min-h-56 p-6"
            cut={index % 2 === 0 ? "right" : "left"}
          >
            <ComicCaption>Category</ComicCaption>

            <h3 className="font-display mt-6 text-4xl uppercase tracking-tighter text-stone-100">
              {category.title}
            </h3>

            <p className="mt-4 text-stone-400">{category.description}</p>
          </ComicPanel>
        ))}
      </div>

      <ComicPanel className="mt-8 p-6" cut="left">
        <ComicCaption>Coming Soon</ComicCaption>

        <p className="mt-6 text-stone-300">
          Official merch will focus on apparel and music first. Print-on-demand
          products and direct checkout will be added after the core site is fully
          polished.
        </p>

        <Link
          href="/merch"
          className="twg-glitch-hover twg-touch-target mt-6 inline-flex items-center justify-center border border-stone-200/15 px-4 py-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-stone-300 transition hover:border-stone-100 hover:text-stone-100"
        >
          View Merch Page
        </Link>
      </ComicPanel>
    </SectionShell>
  );
}