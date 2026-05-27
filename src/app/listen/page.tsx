import SubPageLayout from "@/components/SubPageLayout";
import { featuredRelease } from "@/data/releases";

export default function ListenPage() {
  return (
    <SubPageLayout
      eyebrow="Listen"
      title="Listen Everywhere"
      description="A dedicated streaming hub for They Went Ghost releases."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {featuredRelease.streamingLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="group border border-stone-200/15 bg-stone-950/70 p-8 transition hover:border-stone-100"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-stone-600">
              Streaming Platform
            </p>

            <h2 className="font-display mt-4 text-5xl uppercase tracking-tighter text-stone-100">
              {link.label}
            </h2>

            <p className="mt-4 text-stone-500 group-hover:text-stone-300">
              Open They Went Ghost on {link.label}.
            </p>
          </a>
        ))}
      </div>
    </SubPageLayout>
  );
}