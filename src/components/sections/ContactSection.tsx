import ComicCaption from "@/components/ComicCaption";
import ComicPanel from "@/components/ComicPanel";
import SectionShell from "@/components/sections/SectionShell";
import { activeSocialLinks, siteConfig } from "@/data/site";
import Link from "next/link";
import PlatformLink from "@/components/PlatformLink";

export default function ContactSection() {
  return (
    <SectionShell id="contact" eyebrow="Contact" title={siteConfig.contactTitle}>
      <p className="twg-copy-caps mb-8 max-w-4xl text-sm text-stone-300 sm:text-base sm:leading-7">
        {siteConfig.contactStory}
      </p>

      <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
        <ComicPanel className="p-6" cut="right">
          <ComicCaption>Booking</ComicCaption>

          <p className="mt-6 text-stone-300">
            {siteConfig.bookingDescription}
          </p>

          {siteConfig.bookingEmail ? (
            <PlatformLink
              href={`mailto:${siteConfig.bookingEmail}`}
              label="Email"
              displayLabel={siteConfig.bookingEmail}
              variant="solid"
              className="mt-8 px-5 py-3"
            />
          ) : (
            <p className="mt-6 text-sm text-stone-500">
              Booking email will be added later.
            </p>
          )}
        </ComicPanel>

        <ComicPanel className="p-6" cut="left">
          <ComicCaption>Socials</ComicCaption>

          {activeSocialLinks.length > 0 ? (
            <div className="mt-6 grid gap-3">
              {activeSocialLinks.map((link) => (
                <PlatformLink
                key={link.label}
                href={link.href}
                label={link.label}
                className="py-3"
                />
              ))}
            </div>
          ) : (
            <p className="mt-6 text-sm text-stone-500">
              Social links will be added soon.
            </p>
          )}

          <Link
            href="/contact"
            className="twg-glitch-hover twg-touch-target mt-8 inline-flex items-center justify-center border border-stone-200/15 px-4 py-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-stone-300 transition hover:border-stone-100 hover:text-stone-100"
          >
            Contact Page
          </Link>
        </ComicPanel>
      </div>
    </SectionShell>
  );
}