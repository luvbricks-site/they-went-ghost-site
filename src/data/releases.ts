export type ReleaseLink = {
  label: string;
  href: string;
};

export type Track = {
  number: string;
  title: string;
  duration?: string;
};

export type MusicRelease = {
  slug: string;
  title: string;
  type: "single" | "ep" | "album";
  releaseDate: string;
  coverImage?: string;
  shortDescription: string;
  tracks: Track[];
  streamingLinks: ReleaseLink[];
  purchaseLink?: ReleaseLink;
};

export const featuredRelease: MusicRelease = {
  slug: "they-went-ghost-self-titled-ep",
  title: "Self-Titled EP",
  type: "ep",
  releaseDate: "Release date coming soon",

  // Add the real cover after placing it in public/releases.
  // Example: "/releases/self-titled-ep-cover.jpg"
  coverImage: "",

  shortDescription:
    "The newest They Went Ghost EP is self-titled. This release section will connect fans to streaming platforms, track details, and a purchasable digital download.",
  tracks: [
    { number: "01", title: "Better Off (feat. Araceli Blount, The Badmouth, Eizlo & Sonny J. Maxon)" },
    { number: "02", title: "A Breathe Away From Drowning (feat. The Badmouth & Eizlo)" },
    { number: "03", title: "Lush" },
    { number: "04", title: "Smitten (feat. Araceli Blount & The Badmouth)" },
  ],
  streamingLinks: [
    { label: "Spotify", href: "#" },
    { label: "Apple Music", href: "#" },
    { label: "YouTube Music", href: "#" },
    { label: "YouTube", href: "#" },
  ],
  purchaseLink: {
    label: "Buy Digital Download",
    href: "#",
  },
};

export const releases: MusicRelease[] = [featuredRelease];