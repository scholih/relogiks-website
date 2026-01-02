import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  services: [
    { href: "/services#rag", label: "RAG & Knowledge Systems" },
    { href: "/services#automation", label: "AI Automation" },
    { href: "/services#strategy", label: "AI Strategy" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.svg" alt="Relogiks" width={32} height={32} />
              <span className="font-semibold text-[var(--text-primary)]">Relogiks</span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mb-4">
              AI consultancy for European enterprise. Your data never leaves Europe.
            </p>
            {/* EU Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-primary)] rounded-full border border-[var(--border)]">
              <span className="text-lg">🇪🇺</span>
              <span className="text-xs text-[var(--text-secondary)]">100% EU hosted</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--text-secondary)]">
            © {new Date().getFullYear()} Backoffice Scholing BV h.o.d.n. Relogiks. All rights reserved.
          </p>
          <p className="text-sm text-[var(--text-secondary)]">
            KvK: [nummer] • BTW: [nummer]
          </p>
        </div>
      </div>
    </footer>
  );
}
