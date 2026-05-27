import SectionShell from "@/components/sections/SectionShell";

export default function AboutSection() {
  return (
    <SectionShell id="about" eyebrow="About" title="Original Music First">
      <p className="max-w-3xl text-stone-300">
        They Went Ghost is presented here as an original-music-first band. Cover
        gigs can be mentioned as a secondary booking note, but the main identity
        of this website is the band’s original music, releases, videos, and merch.
      </p>
    </SectionShell>
  );
}