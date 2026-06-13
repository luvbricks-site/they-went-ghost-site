import Image from "next/image";
import ComicPanel from "@/components/ComicPanel";

type HomeStoryPanelProps = {
  src: string;
  alt: string;
};

export default function HomeStoryPanel({ src, alt }: HomeStoryPanelProps) {
  return (
    <section className="relative border-b border-stone-200/10 bg-black px-4 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl">
        <ComicPanel className="p-3 sm:p-4" cut="right">
          <div className="relative min-h-105 overflow-hidden border border-stone-200/10 bg-black shadow-2xl sm:min-h-130 lg:min-h-160">
            <Image
              src={src}
              alt={alt}
              fill
              className="h-full w-full object-contain object-top"
            />

            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-stone-100/10" />
          </div>
        </ComicPanel>
      </div>
    </section>
  );
}