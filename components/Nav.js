'use client';

import { useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#visit', label: 'Visit' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur border-b border-line">
      <div className="max-w-content mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-display italic text-xl text-coffee">
          Southern Brew
        </a>

        <nav className="hidden sm:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-cocoa hover:text-rust transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#visit"
            className="bg-rust text-cream text-sm font-medium rounded-full px-5 py-2 hover:opacity-90 transition-opacity"
          >
            Visit us
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-coffee border border-line rounded px-3 py-1.5 text-sm"
          aria-label="Toggle menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav className="sm:hidden border-t border-line bg-cream px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-cocoa"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
