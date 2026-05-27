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
    <section id={id} className="border-b border-stone-200/10 bg-black px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-stone-600">
          {eyebrow}
        </p>

        <h2 className="font-display mb-8 text-4xl uppercase tracking-tighter text-stone-100 md:text-6xl">
          {title}
        </h2>

        {children}
      </div>
    </section>
  );
}