import ComicCaption from "@/components/ComicCaption";

type HomeComicBreakProps = {
  eyebrow: string;
  title: string;
  description: string;
  issueLabel?: string;
};

export default function HomeComicBreak({
  eyebrow,
  title,
  description,
  issueLabel = "TWG",
}: HomeComicBreakProps) {
  return (
    <section className="twg-home-gutter relative border-b border-stone-200/10 px-4 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="twg-comic-strip p-5 sm:p-6">
          <div className="relative z-10 grid gap-5 md:grid-cols-[220px_1fr_120px] md:items-center">
            <div>
              <ComicCaption>{eyebrow}</ComicCaption>
            </div>

            <div>
              <h2 className="font-display text-3xl uppercase leading-none tracking-tighter text-stone-100 sm:text-4xl md:text-5xl">
                {title}
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-stone-400">
                {description}
              </p>
            </div>

            <div className="hidden justify-self-end font-display text-6xl uppercase leading-none tracking-tighter twg-issue-number md:block">
              {issueLabel}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}