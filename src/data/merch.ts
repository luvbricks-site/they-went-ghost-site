export type MerchCategory = {
  slug: string;
  title: string;
  description: string;
};

export type MerchProduct = {
  slug: string;
  title: string;
  category: "apparel" | "music";
  priceCents: number;
  image?: string;
  description: string;
  sizes?: string[];
  isActive: boolean;
};

export const merchCategories: MerchCategory[] = [
  {
    slug: "apparel",
    title: "Apparel",
    description: "Shirts, hoodies, hats, tanks, mugs, and more.",
  },
  {
    slug: "music",
    title: "Music",
    description: "Digital downloads and album-related products.",
  },
];

export const merchProducts: MerchProduct[] = [
  {
    slug: "shirt-placeholder",
    title: "They Went Ghost Shirt",
    category: "apparel",
    priceCents: 0,
    image: "",
    description:
      "Placeholder apparel product. Final print-on-demand provider, images, pricing, colors, and variants will be added later.",
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    isActive: false,
  },
  {
    slug: "self-titled-ep-download",
    title: "Self-Titled EP Digital Download",
    category: "music",
    priceCents: 0,
    image: "",
    description:
      "Placeholder digital download product for the self-titled They Went Ghost EP.",
    isActive: false,
  },
];

export const activeMerchProducts = merchProducts.filter(
  (product) => product.isActive
);