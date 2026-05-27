export type SiteLink = {
  label: string;
  href: string;
};

export const siteConfig = {
  bandName: "They Went Ghost",
  tagline: "Original music from the darker edge of modern rock.",

  // Add the real logo path after placing the file in public/brand.
  // Example: "/brand/they-went-ghost-logo.png"
  logo: "",

  // Add final intro files after placing them in public/media.
  // Example: "/media/intro.mp4"
  introVideo: "",

  // Example: "/media/intro-poster.jpg"
  introPoster: "",

  // Add later when ready.
  // Example: "booking@theywentghost.com"
  bookingEmail: "",

  bookingDescription:
    "For original music opportunities, booking, media, and select cover-gig inquiries, contact They Went Ghost directly.",

  coverGigNote:
    "They Went Ghost is original-music-first. Cover gigs are available as a secondary booking option for the right event.",
};

export const navItems: SiteLink[] = [
  { label: "Music", href: "/music" },
  { label: "Listen", href: "/listen" },
  { label: "Videos", href: "/videos" },
  { label: "Shows", href: "/shows" },
  { label: "Merch", href: "/merch" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SiteLink[] = [
  // Replace the empty href values with real URLs when ready.
  // Example: { label: "Instagram", href: "https://instagram.com/theywentghost" }
  { label: "Instagram", href: "" },
  { label: "TikTok", href: "" },
  { label: "YouTube", href: "" },
  { label: "Spotify", href: "" },
  { label: "Apple Music", href: "" },
  { label: "YouTube Music", href: "" },
];

export const activeSocialLinks = socialLinks.filter((link) => {
  const href = link.href.trim();

  return href.length > 0 && href !== "#";
});