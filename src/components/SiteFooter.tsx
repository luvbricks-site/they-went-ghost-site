import Link from "next/link";
import ReplayIntroButton from "@/components/ReplayIntroButton";
import { navItems, siteConfig, socialLinks } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-stone-200/10 bg-black px-4 py-12 text-stone-400">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center border border-stone-300/30 bg-stone-100 text-sm font-black text-black">
              TWG
            </div>

            <div>
              <p className="font-display text-xl uppercase tracking-[0.12em] text-stone-100">
                {siteConfig.bandName}
              </p>
              <p className="text-[10px] uppercase tracking-[0.28em] text-stone-600">
                Official Site
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-md text-sm leading-6 text-stone-500">
            Original music from the darker edge of modern rock. Serious, cinematic,
            and built around the world of They Went Ghost.
          </p>

          <div className="mt-6">
            <ReplayIntroButton />
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-stone-600">
            Navigation
          </p>

          <nav className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-[0.18em] text-stone-500 transition hover:text-stone-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-stone-600">
            Follow
          </p>

          <div className="flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="border border-stone-200/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-stone-500 transition hover:border-stone-100 hover:text-stone-100"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-stone-200/10 pt-6 text-xs uppercase tracking-[0.2em] text-stone-700 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} They Went Ghost</p>
        <p>Original Music First</p>
      </div>
    </footer>
  );
}