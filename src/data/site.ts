export type SiteLink = {
  label: string;
  href: string;
};

export const siteConfig = {
  bandName: "They Went Ghost",
  tagline: "Original music from the darker edge of modern rock.",

  logo: "/brand/they-went-ghost-logo.png",

  // Intro video is still in production.
  introVideo: "",

  introPoster: "/media/twg-logo-black-back.jpeg",

  bookingEmail: "theywentghost@gmail.com",

  contactTitle: "When the Signal Calls",

  contactStory:
    "The city is ours — for now. But the dark always finds another alley, another room, another night to crawl back through. If you need us again, you know where to look. Send the signal, open the channel, and our heroes will answer.",

  bookingDescription:
    "For music opportunities, booking, media, and cover-gig inquiries, contact They Went Ghost directly.",

  coverGigNote:
    "For music opportunities, booking, media, and cover-gig inquiries, contact They Went Ghost directly.",
};

export const navItems: SiteLink[] = [
  { label: "Music", href: "/music" },
  { label: "Videos", href: "/videos" },
  { label: "Shows", href: "/shows" },
  { label: "Merch", href: "/merch" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SiteLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/they_went_ghost/",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@theywentghost?is_from_webapp=1&sender_device=pc",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@theywentghost?si=epJoT16oA4jT5nS6",
  },
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
];

export const activeSocialLinks = socialLinks.filter((link) => {
  const href = link.href.trim();

  return href.length > 0 && href !== "#";
});