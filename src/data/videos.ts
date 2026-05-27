export type MusicVideo = {
  slug: string;
  title: string;
  youtubeId?: string;
  youtubeUrl: string;
  description: string;
  isFeatured?: boolean;
};

export const videos: MusicVideo[] = [
  {
    slug: "featured-video-placeholder",
    title: "Featured Video",
    youtubeId: "",
    youtubeUrl: "#",
    description:
      "Official They Went Ghost music videos will be embedded here from YouTube so views stay connected to the official channel.",
    isFeatured: true,
  },
];

export const featuredVideo =
  videos.find((video) => video.isFeatured) ?? videos[0] ?? null;