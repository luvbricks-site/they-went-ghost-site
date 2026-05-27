import AssetFrame from "@/components/AssetFrame";
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
      <div className="grid gap-4 md:grid-cols-2">
        {merchCategories.map((category) => (
          <div
            key={category.slug}
            className="twg-panel twg-panel-cut min-h-56 p-6"
          >
            <h2 className="font-display text-4xl uppercase tracking-tighter">
              {category.title}
            </h2>

            <p className="mt-4 text-stone-400">{category.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="font-display text-5xl uppercase tracking-tighter">
          Products
        </h2>

        {activeMerchProducts.length > 0 ? (
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {activeMerchProducts.map((product) => (
              <article
                key={product.slug}
                className="border border-stone-200/15 bg-stone-950/70 p-5"
              >
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
              </article>
            ))}
          </div>
        ) : (
          <div className="twg-panel twg-panel-cut mt-6 p-6">
            <p className="text-stone-300">
              Merch products are being prepared. Apparel, music downloads, and
              print-on-demand checkout will be added later.
            </p>
          </div>
        )}
      </div>
    </SubPageLayout>
  );
}