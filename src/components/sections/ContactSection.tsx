import SectionShell from "@/components/sections/SectionShell";
import { socialLinks } from "@/data/site";

export default function ContactSection() {
  return (
    <SectionShell id="contact" eyebrow="Contact" title="Booking & Links">
      <div className="flex flex-wrap gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="border border-stone-200/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-300 transition hover:border-stone-100 hover:text-stone-100"
          >
            {link.label}
          </a>
        ))}
      </div>
    </SectionShell>
  );
}