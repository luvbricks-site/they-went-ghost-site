import SectionShell from "@/components/sections/SectionShell";
import { merchCategories } from "@/data/merch";
import Link from "next/link";

export default function MerchSection() {
  return (
    <SectionShell id="merch" eyebrow="Merch" title="Apparel & Music">
      <div className="grid gap-4 md:grid-cols-2">
        {merchCategories.map((category) => (
          <MerchCard
            key={category.slug}
            title={category.title}
            description={category.description}
          />
        ))}
      </div>

      <div className="mt-8 twg-panel twg-panel-cut p-6">
        <p className="text-stone-300">
          Official merch will focus on apparel and music first. Print-on-demand
          products and direct checkout will be added after the core site is fully
          polished.
        </p>

        <Link
          href="/merch"
          className="twg-glitch-hover mt-6 inline-flex border border-stone-200/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-300 transition hover:border-stone-100 hover:text-stone-100"
        >
          View Merch Page
        </Link>
      </div>
    </SectionShell>
  );
}

function MerchCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="twg-panel twg-panel-cut min-h-56 p-6 transition hover:border-stone-100/50">
      <h3 className="font-display text-4xl uppercase tracking-tighter">
        {title}
      </h3>

      <p className="mt-4 text-stone-400">{description}</p>
    </div>
  );
}