import Image from "next/image";

type AssetFrameProps = {
  src?: string;
  alt: string;
  label: string;
  sublabel?: string;
  aspect?: "square" | "video" | "poster" | "wide";
  className?: string;
  imageClassName?: string;
};

export default function AssetFrame({
  src,
  alt,
  label,
  sublabel = "Placeholder",
  aspect = "square",
  className = "",
  imageClassName = "object-cover",
}: AssetFrameProps) {
  const aspectClass = {
    square: "aspect-square",
    video: "aspect-video",
    poster: "aspect-[4/5]",
    wide: "aspect-[16/9]",
  }[aspect];

  return (
    <div
      className={`twg-panel twg-panel-cut ${aspectClass} overflow-hidden p-5 ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden border border-stone-200/10 bg-black">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 520px, 100vw"
            className={imageClassName}
          />
        ) : (
          <div className="grid h-full place-items-center text-center">
            <div className="px-6">
              <p className="font-display text-4xl uppercase leading-none tracking-tighter text-stone-100">
                {label}
              </p>

              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-stone-500">
                {sublabel}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}