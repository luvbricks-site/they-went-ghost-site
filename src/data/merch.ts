export type MerchCategory = {
  slug: string;
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
};

export const merchCategories: MerchCategory[] = [
  {
    slug: "armor",
    title: "Armor",
    description: "Shirts, hoodies, hats, tanks, mugs, and more.",
    buttonLabel: "Enter Merch Store",
    href: "/merch",
  },
  {
    slug: "music",
    title: "Music",
    description: "Digital downloads and album-related products.",
    buttonLabel: "Music Downloads",
    href: "/music-downloads",
  },
];

export const merchStory =
  "Out past the lights, the city still watches. The armor becomes the uniform. Every shirt, every mark, every piece of gear carries the signal beyond the venue walls. Our heroes do not take the city alone — they move with everyone bold enough to wear the warning.";