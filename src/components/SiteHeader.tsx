import { navItems, siteConfig } from "@/data/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#" className="group flex items-center gap-3">
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
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400 transition hover:text-stone-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}