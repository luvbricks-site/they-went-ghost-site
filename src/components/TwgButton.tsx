import Link from "next/link";
import type { ReactNode } from "react";

type TwgButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export default function TwgButton({
  href,
  children,
  variant = "ghost",
}: TwgButtonProps) {
  const base =
    "twg-glitch-hover inline-flex items-center justify-center border px-5 py-3 text-xs font-black uppercase tracking-[0.22em] transition";

  const styles =
    variant === "primary"
      ? "border-stone-100 bg-stone-100 text-black hover:bg-transparent hover:text-stone-100"
      : "border-stone-200/15 bg-black/20 text-stone-300 hover:border-stone-100 hover:text-stone-100";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}