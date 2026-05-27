import BrandMark from "@/components/BrandMark";
import Link from "next/link";
import ReplayIntroButton from "@/components/ReplayIntroButton";
import { activeSocialLinks, navItems } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-stone-200/10 bg-black px-4 py-12 text-stone-400">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <BrandMark size="lg" />

          <p className="mt-5 max-w-md text-sm leading-6 text-stone-500">
            Original music from the darker edge of modern rock. Serious,
            cinematic, and built around the world of They Went Ghost.
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

          {activeSocialLinks.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {activeSocialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="border border-stone-200/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-stone-500 transition hover:border-stone-100 hover:text-stone-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : (
            <p className="text-sm text-stone-600">Social links coming soon.</p>
          )}
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-stone-200/10 pt-6 text-xs uppercase tracking-[0.2em] text-stone-700 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} They Went Ghost</p>
        <p>Original Music First</p>
      </div>
    </footer>
  );
}