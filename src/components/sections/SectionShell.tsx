import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export default function SectionShell({
  id,
  eyebrow,
  title,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className="relative overflow-hidden border-b border-stone-200/10 bg-black/70 px-4 py-16 sm:py-20 md:py-28"
    >
      <div className="absolute inset-0 opacity-[0.035] twg-scratch" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 border-l border-stone-200/15 pl-4 sm:mb-10 sm:pl-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#8a6f4d] sm:text-xs sm:tracking-[0.4em]">
            {eyebrow}
          </p>

          <h2 className="twg-glitch twg-mobile-tight-title font-display max-w-4xl text-4xl uppercase leading-[0.9] tracking-tighter text-stone-100 sm:text-5xl md:text-6xl">
            {title}
          </h2>
        </div>

        {children}
      </div>
    </section>
  );
}