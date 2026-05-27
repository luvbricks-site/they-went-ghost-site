import SectionShell from "@/components/sections/SectionShell";
import { activeSocialLinks, siteConfig } from "@/data/site";
import Link from "next/link";

export default function ContactSection() {
  return (
    <SectionShell id="contact" eyebrow="Contact" title="Booking & Links">
      <div className="max-w-3xl">
        <p className="text-stone-300">{siteConfig.bookingDescription}</p>

        {siteConfig.bookingEmail ? (
          <a
            href={`mailto:${siteConfig.bookingEmail}`}
            className="mt-6 inline-flex border border-stone-100 bg-stone-100 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-stone-100"
          >
            Email Booking
          </a>
        ) : (
          <p className="mt-6 text-sm text-stone-500">
            Booking email will be added later.
          </p>
        )}
      </div>

      {activeSocialLinks.length > 0 ? (
        <div className="mt-8 flex flex-wrap gap-3">
          {activeSocialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="border border-stone-200/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-300 transition hover:border-stone-100 hover:text-stone-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : (
        <p className="mt-8 text-sm text-stone-600">
          Social links will be added soon.
        </p>
      )}

      <Link
        href="/contact"
        className="mt-8 inline-flex border border-stone-100 bg-stone-100 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-stone-100"
      >
        Contact / Booking
      </Link>
    </SectionShell>
  );
}