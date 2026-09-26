"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* ── Logo ── */}
        <a href="#home" className="text-xl font-bold font-heading">
          DANELLE JARA<span className="text-primary">.</span>
        </a>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-foreground-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── CTA Button + Mobile Toggle ── */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full border border-primary bg-primary px-5 py-2 text-sm font-medium text-white hover:bg-primary-hover transition-colors"
          >
            Let&apos;s Work
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground-muted hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <ul className="flex flex-col items-center gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm text-foreground-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center rounded-full border border-primary bg-primary px-5 py-2 text-sm font-medium text-white hover:bg-primary-hover transition-colors"
              >
                Let&apos;s Work
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
