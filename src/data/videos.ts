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
    // Add only the YouTube ID here, not the full URL.
    // Example:
    // youtubeId: "abc123XYZ",
    youtubeId: "",
    youtubeUrl: "",
    description:
      "Every signal leaves a trace. These videos catch our Heroes in motion — four figures moving through the static, dragging their sound out of the dark and into frame. What starts as a transmission becomes proof: our heroes are still out there, and the noise is getting closer.",
    isFeatured: true,
  },
];

export const activeVideos = videos.filter((video) =>
  Boolean(video.youtubeId?.trim())
);

export const featuredVideo =
  videos.find((video) => video.isFeatured) ?? videos[0] ?? null;