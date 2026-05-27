"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems, siteConfig } from "@/data/site";

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="group flex items-center gap-3" onClick={closeMobileMenu}>
          <div className="grid h-10 w-10 place-items-center border border-stone-300/30 bg-stone-100 text-sm font-black text-black">
            TWG
          </div>

          <div>
            <div className="font-display text-lg uppercase tracking-[0.18em] text-stone-100">
              {siteConfig.bandName}
            </div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-stone-500">
              Official Site
            </div>
          </div>
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
          className="grid h-10 w-10 place-items-center border border-stone-200/15 text-stone-100 transition hover:border-stone-100 md:hidden"
          aria-label="Toggle mobile navigation"
          aria-expanded={mobileOpen}
        >
          <span className="text-xl leading-none">{mobileOpen ? "×" : "≡"}</span>
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-x-0 `top-18.25` z-50 border-b border-stone-200/10 bg-black/95 px-4 py-8 shadow-2xl backdrop-blur-xl md:hidden">
          <nav className="mx-auto grid max-w-7xl gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="border border-stone-200/10 bg-stone-950/70 px-5 py-4 font-display text-3xl uppercase tracking-tighter text-stone-100 transition hover:border-stone-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}