import type { Metadata } from "next";
import VisualTexture from "@/components/VisualTexture";
import "./globals.css";

export const metadata: Metadata = {
  title: "They Went Ghost",
  description:
    "Official website for They Went Ghost — original music, videos, shows, and merch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <VisualTexture />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}