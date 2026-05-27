import AssetFrame from "@/components/AssetFrame";
import ComicCaption from "@/components/ComicCaption";
import ComicPanel from "@/components/ComicPanel";
import SubPageLayout from "@/components/SubPageLayout";
import { activeMerchProducts, merchCategories } from "@/data/merch";

function formatCents(cents: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
}

export default function MerchPage() {
  return (
    <SubPageLayout
      eyebrow="Merch"
      title="Apparel & Music"
      description="Official They Went Ghost merch. Apparel and digital music products will be available here."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {merchCategories.map((category, index) => (
          <ComicPanel
            key={category.slug}
            className="min-h-56 p-6"
            cut={index % 2 === 0 ? "right" : "left"}
          >
            <ComicCaption>Category</ComicCaption>

            <h2 className="font-display mt-6 text-4xl uppercase tracking-tighter text-stone-100">
              {category.title}
            </h2>

            <p className="mt-4 text-stone-400">{category.description}</p>
          </ComicPanel>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="twg-ink-line font-display text-5xl uppercase tracking-tighter">
          Products
        </h2>

        {activeMerchProducts.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {activeMerchProducts.map((product) => (
              <ComicPanel key={product.slug} className="p-5">
                <AssetFrame
                  src={product.image}
                  alt={product.title}
                  label="Product Image"
                />

                <h3 className="font-display mt-5 text-3xl uppercase tracking-tighter">
                  {product.title}
                </h3>

                <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-[#8a6f4d]">
                  {formatCents(product.priceCents)}
                </p>

                <p className="mt-3 text-sm text-stone-400">
                  {product.description}
                </p>
              </ComicPanel>
            ))}
          </div>
        ) : (
          <ComicPanel className="mt-8 p-6" cut="left">
            <ComicCaption>Coming Soon</ComicCaption>

            <p className="mt-6 text-stone-300">
              Merch products are being prepared. Apparel, music downloads, and
              print-on-demand checkout will be added later.
            </p>
          </ComicPanel>
        )}
      </div>
    </SubPageLayout>
  );
}