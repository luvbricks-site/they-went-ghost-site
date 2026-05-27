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
      className="relative overflow-hidden border-b border-stone-200/10 bg-black/70 px-4 py-20 md:py-28"
    >
      <div className="absolute inset-0 opacity-[0.035] twg-scratch" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 border-l border-stone-200/15 pl-5">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#8a6f4d]">
            {eyebrow}
          </p>

          <h2 className="twg-glitch font-display max-w-4xl text-4xl uppercase leading-[0.9] tracking-tighter text-stone-100 md:text-6xl">
            {title}
          </h2>
        </div>

        {children}
      </div>
    </section>
  );
}