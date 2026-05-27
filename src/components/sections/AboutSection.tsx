import SectionShell from "@/components/sections/SectionShell";
import { aboutContent } from "@/data/about";
import Link from "next/link";

export default function AboutSection() {
  return (
    <SectionShell id="about" eyebrow="About" title="Original Music First">
      <div className="max-w-3xl">
        <p className="text-stone-300">{aboutContent.homepageSummary}</p>

        <Link
          href="/about"
          className="mt-8 inline-flex border border-stone-200/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-300 transition hover:border-stone-100 hover:text-stone-100"
        >
          Read About the Band
        </Link>
      </div>
    </SectionShell>
  );
}