import AssetFrame from "@/components/AssetFrame";
import SectionShell from "@/components/sections/SectionShell";
import { aboutContent } from "@/data/about";
import Link from "next/link";

export default function AboutSection() {
  return (
    <SectionShell id="about" eyebrow="About" title="Original Music First">
      <div className="grid gap-8 lg:grid-cols-[420px_1fr] lg:items-start">
        <AssetFrame
          src={aboutContent.bandPhoto}
          alt="They Went Ghost band promo photo"
          label="Band Photo"
          aspect="poster"
        />

        <div>
          <p className="max-w-3xl text-lg leading-8 text-stone-300">
            {aboutContent.homepageSummary}
          </p>

          <div className="mt-8 twg-panel twg-panel-cut p-6">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#8a6f4d]">
              Visual Direction
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {aboutContent.visualDirection.map((item) => (
                <span
                  key={item}
                  className="border border-stone-200/10 bg-black/30 px-3 py-2 text-xs uppercase tracking-[0.18em] text-stone-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <Link
            href="/about"
            className="twg-glitch-hover mt-8 inline-flex border border-stone-200/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-300 transition hover:border-stone-100 hover:text-stone-100"
          >
            Read About the Band
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}