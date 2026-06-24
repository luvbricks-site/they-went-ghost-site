import BrandMark from "@/components/BrandMark";
import Link from "next/link";
import ReplayIntroButton from "@/components/ReplayIntroButton";
import { activeSocialLinks, navItems } from "@/data/site";
import PlatformLink from "@/components/PlatformLink";

export default function SiteFooter() {
  return (
    <footer className="border-t border-stone-200/10 bg-black px-4 py-10 text-stone-400 sm:py-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <BrandMark size="lg" />

          <p className="mt-5 max-w-md text-sm leading-6 text-stone-500">
            
          </p>

          <div className="mt-6">
            <ReplayIntroButton />
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-stone-600">
            Navigation
          </p>

          <nav className="grid grid-cols-2 gap-2 sm:grid-cols-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="twg-touch-target inline-flex items-center text-sm uppercase tracking-[0.18em] text-stone-500 transition hover:text-stone-100"
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
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              {activeSocialLinks.map((link) => (
                <PlatformLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  iconOnly
                  className="text-stone-500"
                />
              ))}
            </div>
          ) : (
            <p className="text-sm text-stone-600">Social links coming soon.</p>
          )}
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-stone-200/10 pt-6 text-xs uppercase tracking-[0.2em] text-stone-700 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} They Went Ghost</p>
        <p>Website designed and built by Michael Cagley</p>
      </div>
    </footer>
  );
}