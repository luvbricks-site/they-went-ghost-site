type ComicCaptionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ComicCaption({
  children,
  className = "",
}: ComicCaptionProps) {
  return <span className={`twg-comic-caption ${className}`}>{children}</span>;
}