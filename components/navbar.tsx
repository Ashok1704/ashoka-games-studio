"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b16]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-wide text-indigo-200">
          Ashoka <span className="text-indigo-400">Games</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition ${
                  active ? "text-indigo-300" : "text-muted hover:text-indigo-200"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md border border-indigo-400/40 p-2 text-indigo-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          <span className="relative h-5 w-5">
            <motion.span
              className="absolute left-0 top-1 h-0.5 w-5 bg-current"
              animate={open ? { rotate: 45, top: 10 } : { rotate: 0, top: 4 }}
            />
            <motion.span
              className="absolute left-0 top-2.5 h-0.5 w-5 bg-current"
              animate={open ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="absolute left-0 top-4 h-0.5 w-5 bg-current"
              animate={open ? { rotate: -45, top: 10 } : { rotate: 0, top: 16 }}
            />
          </span>
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-white/10 px-4 pb-4 md:hidden"
        >
          <div className="flex flex-col gap-3 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm ${
                  pathname === link.href
                    ? "text-indigo-300"
                    : "text-muted hover:text-indigo-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  );
}
