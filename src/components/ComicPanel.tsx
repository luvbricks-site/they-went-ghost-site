import type { ReactNode } from "react";

type ComicPanelProps = {
  children: ReactNode;
  className?: string;
  cut?: "left" | "right" | "none";
};

export default function ComicPanel({
  children,
  className = "",
  cut = "right",
}: ComicPanelProps) {
  const cutClass =
    cut === "left"
      ? "twg-comic-cut-left"
      : cut === "right"
        ? "twg-comic-cut-right"
        : "";

  return (
    <div className={`twg-comic-panel ${cutClass} ${className}`}>
      <div className="relative z-10">{children}</div>
    </div>
  );
}