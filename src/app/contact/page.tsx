import ComicCaption from "@/components/ComicCaption";
import ComicPanel from "@/components/ComicPanel";
import SubPageLayout from "@/components/SubPageLayout";
import { activeSocialLinks, siteConfig } from "@/data/site";

export default function ContactPage() {
  return (
    <SubPageLayout
      eyebrow="Contact"
      title="Booking & Links"
      description={siteConfig.bookingDescription}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
        <ComicPanel className="p-6 sm:p-8" cut="right">
          <ComicCaption>Booking</ComicCaption>

          <h2 className="font-display mt-6 text-4xl uppercase tracking-tighter text-stone-100">
            Contact the Band
          </h2>

          <p className="mt-4 text-stone-300">{siteConfig.coverGigNote}</p>

          {siteConfig.bookingEmail ? (
            <a
              href={`mailto:${siteConfig.bookingEmail}`}
              className="twg-glitch-hover twg-touch-target mt-8 inline-flex items-center justify-center border border-stone-100 bg-stone-100 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-stone-100"
            >
              {siteConfig.bookingEmail}
            </a>
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
                <a
                  key={link.label}
                  href={link.href}
                  className="twg-glitch-hover twg-touch-target inline-flex items-center justify-center border border-stone-200/15 px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-stone-300 transition hover:border-stone-100 hover:text-stone-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : (
            <p className="mt-6 text-sm text-stone-500">
              Social links will be added soon.
            </p>
          )}
        </ComicPanel>
      </div>
    </SubPageLayout>
  );
}