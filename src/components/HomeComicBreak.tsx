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
  issueLabel = "01",
}: HomeComicBreakProps) {
  return (
    <section className="twg-home-gutter relative border-b border-stone-200/10 px-4 py-5 sm:py-6">
      <div className="mx-auto max-w-7xl">
        <div className="twg-comic-strip p-4 sm:p-5 md:p-5">
          <div className="relative z-10 grid gap-3 md:grid-cols-[140px_minmax(0,1fr)_80px] md:items-center">
            <div>
              <span className="twg-break-bubble">{eyebrow}</span>
            </div>

            <div className="flex justify-center">
              <div className="twg-break-speech mx-auto">
                <h2 className="twg-break-speech-title text-2xl sm:text-3xl md:text-[2.75rem] md:whitespace-nowrap">
                  {title}
                </h2>

                {description && (
                  <p className="twg-break-speech-description">
                    {description}
                  </p>
                )}
              </div>
            </div>

            <div className="hidden justify-self-end font-display text-5xl uppercase leading-none tracking-tight twg-issue-number md:block">
              {issueLabel}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}