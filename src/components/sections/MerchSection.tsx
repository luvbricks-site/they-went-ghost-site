import SectionShell from "@/components/sections/SectionShell";
import { merchCategories } from "@/data/merch";

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
    <div className="min-h-56 border border-stone-200/15 bg-stone-950/70 p-6 transition hover:border-stone-100/50">
      <h3 className="font-display text-4xl uppercase tracking-tighter">
        {title}
      </h3>

      <p className="mt-4 text-stone-400">{description}</p>
    </div>
  );
}