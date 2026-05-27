"use client";

import BrandMark from "@/components/BrandMark";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/data/site";

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/10 bg-black/90 shadow-[0_1px_0_rgba(200,184,155,0.08)] backdrop-blur-xl">
      <div className="relative">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:py-4">
          <Link
            href="/"
            className="group min-w-0"
            onClick={closeMobileMenu}
          >
            <BrandMark />
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400 transition hover:text-stone-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="twg-touch-target grid w-11 shrink-0 place-items-center border border-stone-200/15 text-stone-100 transition hover:border-stone-100 md:hidden"
            aria-label="Toggle mobile navigation"
            aria-expanded={mobileOpen}
          >
            <span className="text-2xl leading-none">
              {mobileOpen ? "×" : "≡"}
            </span>
          </button>
        </div>

        {mobileOpen && (
          <div className="absolute inset-x-0 top-full z-50 border-b border-stone-200/10 bg-black/95 px-4 py-5 shadow-2xl backdrop-blur-xl md:hidden">
            <nav className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="twg-touch-target border border-stone-200/10 bg-stone-950/80 px-5 py-4 font-display text-2xl uppercase leading-none tracking-tighter text-stone-100 transition hover:border-stone-100"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}