import SubPageLayout from "@/components/SubPageLayout";
import { activeSocialLinks, siteConfig } from "@/data/site";

export default function ContactPage() {
  return (
    <SubPageLayout
      eyebrow="Contact"
      title="Booking & Links"
      description={siteConfig.bookingDescription}
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
        <div className="twg-panel twg-panel-cut p-6">
          <h2 className="font-display text-4xl uppercase tracking-tighter">
            Booking
          </h2>

          <p className="mt-4 text-stone-300">{siteConfig.coverGigNote}</p>

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

        <div className="twg-panel twg-panel-cut p-6">
          <h2 className="font-display text-4xl uppercase tracking-tighter">
            Socials
          </h2>

          {activeSocialLinks.length > 0 ? (
            <div className="mt-6 grid gap-3">
              {activeSocialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="border border-stone-200/15 px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] text-stone-300 transition hover:border-stone-100 hover:text-stone-100"
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
        </div>
      </div>
    </SubPageLayout>
  );
}