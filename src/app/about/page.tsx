import AssetFrame from "@/components/AssetFrame";
import ComicCaption from "@/components/ComicCaption";
import ComicPanel from "@/components/ComicPanel";
import SubPageLayout from "@/components/SubPageLayout";
import { aboutContent } from "@/data/about";

export default function AboutPage() {
  return (
    <SubPageLayout
      eyebrow="About"
      title="They Went Ghost"
      description={aboutContent.pageIntro}
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
        <ComicPanel className="p-6 sm:p-8" cut="right">
          <ComicCaption>Original Music First</ComicCaption>

          <div className="mt-8 space-y-6 text-stone-300">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </ComicPanel>

        <div className="space-y-6">
          <AssetFrame
            src={aboutContent.bandPhoto}
            alt="They Went Ghost band promo photo"
            label="Band Photo"
            aspect="poster"
          />

          <ComicPanel className="p-6" cut="left">
            <ComicCaption>Visual Direction</ComicCaption>

            <ul className="mt-6 space-y-3 text-sm text-stone-400">
              {aboutContent.visualDirection.map((item) => (
                <li key={item} className="border-b border-stone-200/10 pb-2">
                  {item}
                </li>
              ))}
            </ul>
          </ComicPanel>
        </div>
      </div>
    </SubPageLayout>
  );
}