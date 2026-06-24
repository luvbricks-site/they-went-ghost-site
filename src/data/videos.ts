export type MusicVideo = {
  slug: string;
  title: string;
  youtubeId: string;
  youtubeUrl: string;
  description: string;
  isFeatured?: boolean;
};

export const videos: MusicVideo[] = [
  {
    slug: "smitten",
    title: "Smitten",
    youtubeId: "fe4vdc6eesY",
    youtubeUrl: "https://youtu.be/fe4vdc6eesY?si=FIb-mSUHp3txjy9J",
    description:
      "Every signal leaves a trace. These videos catch our Heroes in motion. Four figures moving through the static, dragging their sound out of the dark and into frame. What starts as a transmission becomes proof: our heroes are out there, and the noise is getting closer.",
    isFeatured: true,
  },
  {
    slug: "better-off",
    title: "Better Off",
    youtubeId: "dYIayeTyWMQ",
    youtubeUrl: "https://www.youtube.com/watch?v=dYIayeTyWMQ",
    description:
      "The spark turns volatile, the frame cracks, and the story takes its first hard turn. Better Off catches our heroes in the fallout, where love stops looking like salvation and starts looking like a warning sign.",
  },
  {
    slug: "lush",
    title: "Lush",
    youtubeId: "7CzGLyM4FaI",
    youtubeUrl: "https://www.youtube.com/watch?v=7CzGLyM4FaI",
    description:
      "Past the wreckage, the night gets louder. Lush follows the spiral down through neon, noise, and bad decisions, where every drink feels like a door and every door opens deeper into the dark.",
  },
];

export const activeVideos = videos.filter((video) =>
  Boolean(video.youtubeId.trim())
);

export const featuredVideo =
  videos.find((video) => video.isFeatured) ?? activeVideos[0] ?? videos[0] ?? null;

export const supportingVideos = videos.filter(
  (video) => video.slug !== featuredVideo?.slug
);