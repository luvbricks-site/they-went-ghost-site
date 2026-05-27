import AssetFrame from "@/components/AssetFrame";
import SubPageLayout from "@/components/SubPageLayout";
import { aboutContent } from "@/data/about";

export default function AboutPage() {
  return (
    <SubPageLayout
      eyebrow="About"
      title="They Went Ghost"
      description={aboutContent.pageIntro}
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_420px]">
        <div className="space-y-6 text-stone-300">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="space-y-6">
          <AssetFrame
            src={aboutContent.bandPhoto}
            alt="They Went Ghost band promo photo"
            label="Band Photo"
            aspect="poster"
          />

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
      </div>
    </SubPageLayout>
  );
}