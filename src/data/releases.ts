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
  coverImage: "",
  shortDescription:
    "The newest They Went Ghost EP is self-titled. This release section will connect fans to streaming platforms, track details, and a purchasable digital download.",
  tracks: [
    { number: "01", title: "Track One" },
    { number: "02", title: "Track Two" },
    { number: "03", title: "Track Three" },
    { number: "04", title: "Track Four" },
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