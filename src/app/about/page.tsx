import SubPageLayout from "@/components/SubPageLayout";
import { aboutContent } from "@/data/about";

export default function AboutPage() {
  return (
    <SubPageLayout
      eyebrow="About"
      title="They Went Ghost"
      description={aboutContent.pageIntro}
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6 text-stone-300">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside className="twg-panel twg-panel-cut p-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-stone-600">
            Visual Direction
          </p>

          <ul className="mt-5 space-y-3 text-sm text-stone-400">
            {aboutContent.visualDirection.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </SubPageLayout>
  );
}