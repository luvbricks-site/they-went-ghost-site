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

      <section className="border-b border-stone-200/10 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.45em] text-stone-600">
            {eyebrow}
          </p>

          <h1 className="font-display max-w-5xl text-5xl uppercase leading-[0.9] tracking-tighter text-stone-100 md:text-7xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-400">
            {description}
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">{children}</div>
      </section>

      <SiteFooter />
    </main>
  );
}