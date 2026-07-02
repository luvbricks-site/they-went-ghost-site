import ComicCaption from "@/components/ComicCaption";
import ComicPanel from "@/components/ComicPanel";
import SubPageLayout from "@/components/SubPageLayout";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

function formatPrice(cents: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(cents / 100);
}

export default async function MusicDownloadsPage() {
  const products = await prisma.digitalProduct.findMany({
    where: {
      isActive: true,
    },
    orderBy: [
      {
        productType: "asc",
      },
      {
        title: "asc",
      },
    ],
    select: {
      id: true,
      productType: true,
      title: true,
      slug: true,
      description: true,
      priceCents: true,
      currency: true,
      allowMp3: true,
      allowFlac: true,
      release: {
        select: {
          title: true,
          releaseType: true,
          releaseDate: true,
          coverImagePath: true,
        },
      },
      track: {
        select: {
          title: true,
          trackNumber: true,
          durationSeconds: true,
        },
      },
    },
  });

  const fullReleases = products.filter(
    (product) => product.productType === "FULL_RELEASE",
  );

  const singles = products.filter(
    (product) => product.productType === "SINGLE_TRACK",
  );

  return (
    <SubPageLayout
      eyebrow="Digital Downloads"
      title="Music Downloads"
      description="Buy MP3 or FLAC downloads directly from They Went Ghost. No accounts, no saved customer profiles — just guest checkout and direct support for the band."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="grid gap-6">
          <ComicPanel className="p-6 sm:p-8" cut="right">
            <ComicCaption>Direct Support</ComicCaption>

            <h2 className="twg-ink-line font-display mt-6 text-4xl uppercase leading-none tracking-tighter text-stone-100 sm:text-5xl">
              Download the Signal
            </h2>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-stone-300 sm:text-base">
              These purchases will go straight through our own checkout system
              once Stripe and PayPal are connected. For now, this page is
              reading the live product list from the backend database.
            </p>

            <div className="mt-8 grid gap-3 text-sm text-stone-400">
              <div className="border-l-2 border-[#8a6f4d] pl-4">
                Guest checkout only. No accounts or saved customer profiles.
              </div>
              <div className="border-l-2 border-[#8a6f4d] pl-4">
                Customers will choose MP3 or FLAC before purchase.
              </div>
              <div className="border-l-2 border-[#8a6f4d] pl-4">
                Stripe and PayPal payment buttons will be wired into this page
                next.
              </div>
            </div>
          </ComicPanel>

          <section className="grid gap-5">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#8a6f4d]">
                Full Releases
              </p>
              <h3 className="mt-2 font-display text-3xl uppercase tracking-tight text-stone-100">
                Albums and EPs
              </h3>
            </div>

            {fullReleases.length === 0 ? (
              <p className="text-sm text-stone-500">
                No full-release downloads are active yet.
              </p>
            ) : (
              <div className="grid gap-4">
                {fullReleases.map((product) => (
                  <DownloadProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </section>

          <section className="grid gap-5">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#8a6f4d]">
                Singles
              </p>
              <h3 className="mt-2 font-display text-3xl uppercase tracking-tight text-stone-100">
                Individual Tracks
              </h3>
            </div>

            {singles.length === 0 ? (
              <p className="text-sm text-stone-500">
                No single-track downloads are active yet.
              </p>
            ) : (
              <div className="grid gap-4">
                {singles.map((product) => (
                  <DownloadProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </section>
        </div>

        <aside className="lg:sticky lg:top-8 lg:self-start">
          <ComicPanel className="p-6" cut="left">
            <ComicCaption>Backend Status</ComicCaption>

            <h2 className="font-display mt-6 text-3xl uppercase tracking-tight text-stone-100">
              Database Connected
            </h2>

            <dl className="mt-6 grid gap-4 text-sm">
              <div className="flex items-center justify-between border-b border-stone-200/10 pb-3">
                <dt className="text-stone-500">Active products</dt>
                <dd className="font-black text-stone-100">{products.length}</dd>
              </div>

              <div className="flex items-center justify-between border-b border-stone-200/10 pb-3">
                <dt className="text-stone-500">Full releases</dt>
                <dd className="font-black text-stone-100">
                  {fullReleases.length}
                </dd>
              </div>

              <div className="flex items-center justify-between border-b border-stone-200/10 pb-3">
                <dt className="text-stone-500">Singles</dt>
                <dd className="font-black text-stone-100">{singles.length}</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-stone-500">Checkout</dt>
                <dd className="font-black uppercase tracking-[0.18em] text-[#8a6f4d]">
                  Next
                </dd>
              </div>
            </dl>
          </ComicPanel>
        </aside>
      </div>
    </SubPageLayout>
  );
}

type DownloadProduct = {
  id: string;
  productType: string;
  title: string;
  slug: string;
  description: string | null;
  priceCents: number;
  currency: string;
  allowMp3: boolean;
  allowFlac: boolean;
  release: {
    title: string;
    releaseType: string;
    releaseDate: Date | null;
    coverImagePath: string | null;
  } | null;
  track: {
    title: string;
    trackNumber: number | null;
    durationSeconds: number | null;
  } | null;
};

function DownloadProductCard({ product }: { product: DownloadProduct }) {
  const formats = [
    product.allowMp3 ? "MP3" : null,
    product.allowFlac ? "FLAC" : null,
  ].filter(Boolean);

  return (
    <article className="border border-stone-200/10 bg-black/50 p-5 shadow-2xl shadow-black/30">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#8a6f4d]">
            {product.productType === "FULL_RELEASE"
              ? product.release?.releaseType ?? "Release"
              : `Track ${product.track?.trackNumber ?? ""}`}
          </p>

          <h4 className="mt-2 font-display text-3xl uppercase leading-none tracking-tight text-stone-100">
            {product.title}
          </h4>

          {product.description && (
            <p className="mt-4 max-w-2xl text-sm leading-6 text-stone-400">
              {product.description}
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {formats.map((format) => (
              <span
                key={format}
                className="border border-stone-200/15 px-2 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-stone-300"
              >
                {format}
              </span>
            ))}
          </div>
        </div>

        <div className="shrink-0 text-left sm:text-right">
          <p className="font-display text-4xl uppercase text-stone-100">
            {formatPrice(product.priceCents, product.currency)}
          </p>
          <p className="mt-1 text-[10px] font-black uppercase tracking-[0.22em] text-stone-600">
            USD
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
        {product.allowMp3 && (
          <button
            type="button"
            disabled
            className="twg-touch-target inline-flex cursor-not-allowed items-center justify-center border border-stone-100/30 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-stone-500 opacity-70"
          >
            Buy MP3 Soon
          </button>
        )}

        {product.allowFlac && (
          <button
            type="button"
            disabled
            className="twg-touch-target inline-flex cursor-not-allowed items-center justify-center border border-stone-100/30 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-stone-500 opacity-70"
          >
            Buy FLAC Soon
          </button>
        )}
      </div>
    </article>
  );
}