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
  title: "They Went Ghost",
  type: "ep",
  releaseDate: "January 20, 2026",
  coverImage: "/releases/twg-ep-cover-art.jpg",

  shortDescription:
    "The self-titled EP opens like the first issue of a wreckage-stained love story. Two people fall hard, the spark turns volatile, and what started as Smitten twists into Better Off. When the split hits, the man slips into the bottle, spiraling through Lush until he reaches the edge in A Breath Away From Drowning. The fall ends here, what crawls out of it is a story for next time....",

  tracks: [
    {
      number: "01",
      title:
        "Better Off (feat. Araceli Blount, The Badmouth, Eizlo & Sonny J. Maxon)",
    },
    {
      number: "02",
      title: "A Breath Away From Drowning (feat. The Badmouth & Eizlo)",
    },
    {
      number: "03",
      title: "Lush",
    },
    {
      number: "04",
      title: "Smitten (feat. Araceli Blount & The Badmouth)",
    },
  ],

  streamingLinks: [
    {
      label: "Spotify",
      href: "https://open.spotify.com/artist/7dKF39VNBeIYhdhV6HqFU3?si=D-2X0Mt8SCeMtxyf59O-iA",
    },
    {
      label: "Apple Music",
      href: "https://music.apple.com/us/artist/they-went-ghost/666238668",
    },
    {
      label: "YouTube Music",
      href: "https://music.youtube.com/channel/UCFN9FuTe90z2sltRNLodl0A",
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@theywentghost?si=epJoT16oA4jT5nS6",
    },
  ],

  // Add the digital download purchase URL later.
  purchaseLink: {
    label: "Buy Digital Download",
    href: "",
  },
};

export const releases: MusicRelease[] = [featuredRelease];