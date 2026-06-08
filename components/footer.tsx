import Link from "next/link";

const socialLinks = [
  { label: "Gmail", href: "mailto:ashokgadhavi1704@gmail.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070b16]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-xl font-bold text-indigo-200">Ashoka Games</p>
          <p className="mt-3 max-w-sm text-sm text-muted">
            Modern HTML5 and mobile game development studio focused on fun,
            retention, and monetization.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-300">
            Quick Links
          </p>
          <div className="grid gap-2 text-sm text-muted">
            <Link href="/games">Games</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-300">
            Social
          </p>
          <div className="grid gap-2 text-sm text-muted">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} Ashoka Games. All rights reserved.
      </div>
    </footer>
  );
}
