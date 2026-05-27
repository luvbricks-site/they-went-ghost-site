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

      <section className="twg-comic-page relative overflow-hidden border-b border-stone-200/10 px-4 py-16 sm:py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.06] twg-scratch" />

        <div className="relative mx-auto max-w-7xl border-l-2 border-[#8a6f4d]/45 pl-4 sm:pl-5">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.32em] text-[#8a6f4d] sm:text-xs sm:tracking-[0.45em]">
            {eyebrow}
          </p>

          <h1 className="twg-glitch twg-mobile-tight-title font-display max-w-5xl text-5xl uppercase leading-[0.9] tracking-tighter text-stone-100 sm:text-6xl md:text-7xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-stone-400 sm:text-lg sm:leading-8">
            {description}
          </p>
        </div>
      </section>

      <section className="twg-comic-page relative overflow-hidden px-4 py-14 sm:py-16 md:py-20">
        <div className="absolute inset-0 opacity-[0.025] twg-scratch" />
        <div className="relative mx-auto max-w-7xl">{children}</div>
      </section>

      <SiteFooter />
    </main>
  );
}