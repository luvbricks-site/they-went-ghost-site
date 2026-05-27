import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import type { ReactNode } from "react";

type SubPageLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export default function SubPageLayout({
  eyebrow,
  title,
  description,
  children,
}: SubPageLayoutProps) {
  return (
    <main className="min-h-screen bg-black text-stone-100">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-stone-200/10 px-4 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(138,111,77,0.18),transparent_35%),linear-gradient(180deg,rgba(12,10,9,0.92),rgba(0,0,0,0.98))]" />
        <div className="absolute inset-0 opacity-[0.06] twg-scratch" />

        <div className="relative mx-auto max-w-7xl border-l border-stone-200/15 pl-5">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.45em] text-[#8a6f4d]">
            {eyebrow}
          </p>

          <h1 className="twg-glitch font-display max-w-5xl text-5xl uppercase leading-[0.9] tracking-tighter text-stone-100 md:text-7xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-400">
            {description}
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 md:py-20">
        <div className="absolute inset-0 opacity-[0.025] twg-scratch" />
        <div className="relative mx-auto max-w-7xl">{children}</div>
      </section>

      <SiteFooter />
    </main>
  );
}