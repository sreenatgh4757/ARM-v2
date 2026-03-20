const footerLinks = [
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xs text-text-dim">
          &copy; 2026 A.R.M Technologies Limited &middot; Bournemouth, UK
        </span>

        <div className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-text-dim hover:text-cyan-accent transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
