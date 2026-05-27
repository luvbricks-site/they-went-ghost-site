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
    sm: "h-8 w-8",
    md: "h-9 w-9 sm:h-10 sm:w-10",
    lg: "h-12 w-12 sm:h-14 sm:w-14",
  }[size];

  const textSize = {
    sm: "text-sm sm:text-base",
    md: "text-base sm:text-lg",
    lg: "text-xl sm:text-2xl",
  }[size];

  return (
    <div className="flex min-w-0 items-center gap-3">
      {siteConfig.logo ? (
        <div
          className={`${logoSize} relative shrink-0 overflow-hidden border border-stone-300/30 bg-black`}
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
          className={`${logoSize} grid shrink-0 place-items-center border border-stone-300/30 bg-stone-100 text-xs font-black text-black sm:text-sm`}
        >
          TWG
        </div>
      )}

      {showText && (
        <div className="min-w-0">
          <div
            className={`twg-glitch-hover twg-safe-text font-display uppercase leading-none tracking-[0.12em] text-stone-100 sm:tracking-[0.18em] ${textSize}`}
          >
            {siteConfig.bandName}
          </div>

          <div className="mt-1 hidden text-[10px] uppercase tracking-[0.28em] text-stone-500 sm:block">
            Official Site
          </div>
        </div>
      )}
    </div>
  );
}