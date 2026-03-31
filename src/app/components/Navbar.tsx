'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

const links = [
  { href: '/',        label: 'Start' },
  { href: '/about',   label: 'Über mich' },
  { href: '/yoga',    label: 'Meine Kurse' },
  { href: '/contact', label: 'Kontakt' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled || open
            ? 'bg-iris-golden/95 backdrop-blur-sm shadow-md'
            : 'bg-transparent'
        )}
      >
        {/* Wellenförmige Unterkante beim Scrollen */}
        <div
          aria-hidden
          className="absolute left-0 right-0 pointer-events-none transition-opacity duration-300"
          style={{ top: '100%', height: '28px', opacity: scrolled || open ? 1 : 0 }}
        >
          <svg
            viewBox="0 0 1440 28"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ display: 'block', width: '100%', height: '100%' }}
          >
            <path d="M0,0 C480,28 960,0 1440,20 L1440,0 Z" fill="rgba(214,154,59,0.95)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Links: Brand */}
          <div className={clsx(
            'text-xl font-bold transition-colors duration-300 z-10',
            scrolled || open ? 'text-iris-terracotta' : 'text-white drop-shadow'
          )}>
            <Link href="/" onClick={close}>Yoga mit Herz</Link>
          </div>

          {/* Mitte: Nav-Links (absolut zentriert) */}
          <ul className={clsx(
            'hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6 transition-colors duration-300',
            scrolled ? 'text-iris-charcoal' : 'text-white drop-shadow'
          )}>
            {links.map(({ href, label }) => (
              <li key={href}><Link href={href} onClick={close}>{label}</Link></li>
            ))}
          </ul>

          {/* Rechts: CTA + Mobile Hamburger */}
          <div className="flex items-center gap-3 z-10">
            {/* CTA Button – immer in Terracotta, unabhängig vom Scroll-Status */}
            <Link
              href="/contact"
              onClick={close}
              className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-medium border-2 border-iris-terracotta text-iris-terracotta hover:bg-iris-terracotta hover:text-white transition-all duration-300"
            >
              Kurs buchen
            </Link>

            {/* Mobile: Hamburger-Button */}
            <button
              className={clsx(
                'md:hidden p-2 rounded-md transition-colors',
                scrolled || open ? 'text-iris-charcoal' : 'text-white drop-shadow'
              )}
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
            >
              {open ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6"  x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown-Menü */}
        {open && (
          <div className="md:hidden bg-iris-golden/98 backdrop-blur-sm border-t border-iris-terracotta/20">
            <ul className="flex flex-col py-4 px-6 gap-1">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={close}
                    className="block py-3 text-iris-charcoal text-lg font-medium border-b border-iris-terracotta/10 last:border-0 hover:text-iris-terracotta transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <Link
                  href="/contact"
                  onClick={close}
                  className="inline-flex items-center justify-center w-full py-3 rounded-full text-sm font-medium border-2 border-iris-terracotta text-iris-terracotta hover:bg-iris-terracotta hover:text-white transition-all"
                >
                  Kurs buchen
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Overlay zum Schließen beim Klick daneben */}
      {open && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={close}
          aria-hidden
        />
      )}
    </>
  );
}
