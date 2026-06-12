import PlatformIcon from "@/components/PlatformIcon";

type PlatformLinkProps = {
  href: string;
  label: string;
  displayLabel?: string;
  variant?: "outline" | "solid";
  iconOnly?: boolean;
  className?: string;
};

export default function PlatformLink({
  href,
  label,
  displayLabel,
  variant = "outline",
  iconOnly = false,
  className = "",
}: PlatformLinkProps) {
  const text = displayLabel ?? label;
  const isExternal = href.startsWith("http");

  const variantClasses =
    variant === "solid"
      ? "border-stone-100 bg-stone-100 text-black hover:bg-transparent hover:text-stone-100"
      : "border-stone-200/15 text-stone-300 hover:border-stone-100 hover:text-stone-100";

  const sizeClasses = iconOnly
    ? "h-11 w-11 p-0 text-lg"
    : "gap-2 px-4 py-2 text-xs";

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={text}
      title={text}
      className={`twg-glitch-hover twg-touch-target inline-flex items-center justify-center border text-center font-bold uppercase tracking-[0.2em] transition ${variantClasses} ${sizeClasses} ${className}`}
    >
      <PlatformIcon label={label} className={iconOnly ? "h-5 w-5" : "h-4 w-4"} />

      {iconOnly ? <span className="sr-only">{text}</span> : <span>{text}</span>}
    </a>
  );
}