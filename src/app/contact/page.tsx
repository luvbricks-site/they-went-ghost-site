import ComicCaption from "@/components/ComicCaption";
import ComicPanel from "@/components/ComicPanel";
import SubPageLayout from "@/components/SubPageLayout";
import { activeSocialLinks, siteConfig } from "@/data/site";
import PlatformLink from "@/components/PlatformLink";

export default function ContactPage() {
  return (
    <SubPageLayout
      eyebrow="Contact"
      title={siteConfig.contactTitle}
      description={siteConfig.contactStory}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
        <ComicPanel className="p-6 sm:p-8" cut="right">
          <ComicCaption>Booking</ComicCaption>

          <h2 className="font-display mt-6 text-4xl uppercase tracking-tighter text-stone-100">
            Contact the Band
          </h2>

          <p className="mt-4 text-stone-300">{siteConfig.coverGigNote}</p>

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
        </ComicPanel>
      </div>
    </SubPageLayout>
  );
}