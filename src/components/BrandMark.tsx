import Image from "next/image";
import { siteConfig } from "@/data/site";

type BrandMarkProps = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
};

export default function BrandMark({
  size = "md",
  showText = true,
}: BrandMarkProps) {
  const logoSize = {
    sm: "h-9 w-9",
    md: "h-10 w-10",
    lg: "h-14 w-14",
  }[size];

  const textSize = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-2xl",
  }[size];

  return (
    <div className="flex items-center gap-3">
      {siteConfig.logo ? (
        <div
          className={`${logoSize} relative overflow-hidden border border-stone-300/30 bg-black`}
        >
          <Image
            src={siteConfig.logo}
            alt={`${siteConfig.bandName} logo`}
            fill
            sizes="56px"
            className="object-contain p-1"
            priority
          />
        </div>
      ) : (
        <div
          className={`${logoSize} grid place-items-center border border-stone-300/30 bg-stone-100 text-sm font-black text-black`}
        >
          TWG
        </div>
      )}

      {showText && (
        <div>
          <div
            className={`twg-glitch-hover font-display uppercase tracking-[0.18em] text-stone-100 ${textSize}`}
          >
            {siteConfig.bandName}
          </div>

          <div className="text-[10px] uppercase tracking-[0.28em] text-stone-500">
            Official Site
          </div>
        </div>
      )}
    </div>
  );
}