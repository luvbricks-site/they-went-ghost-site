import {
  SiApplemusic,
  SiInstagram,
  SiSpotify,
  SiTiktok,
  SiYoutube,
  SiYoutubemusic,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";

type PlatformIconProps = {
  label: string;
  className?: string;
};

export default function PlatformIcon({
  label,
  className = "h-5 w-5",
}: PlatformIconProps) {
  const normalized = label.toLowerCase();

  if (normalized.includes("youtube music")) {
    return <SiYoutubemusic aria-hidden="true" className={className} />;
  }

  if (normalized.includes("youtube")) {
    return <SiYoutube aria-hidden="true" className={className} />;
  }

  if (normalized.includes("spotify")) {
    return <SiSpotify aria-hidden="true" className={className} />;
  }

  if (normalized.includes("apple")) {
    return <SiApplemusic aria-hidden="true" className={className} />;
  }

  if (normalized.includes("instagram")) {
    return <SiInstagram aria-hidden="true" className={className} />;
  }

  if (normalized.includes("tiktok")) {
    return <SiTiktok aria-hidden="true" className={className} />;
  }

  if (
    normalized.includes("email") ||
    normalized.includes("booking") ||
    normalized.includes("contact")
  ) {
    return <MdEmail aria-hidden="true" className={className} />;
  }

  return <FiExternalLink aria-hidden="true" className={className} />;
}