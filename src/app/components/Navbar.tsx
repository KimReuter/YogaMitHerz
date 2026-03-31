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

  // Menü schließen bei Routenwechsel (Link-Klick)
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
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Desktop: Links links */}
          <ul className={clsx(
            'hidden md:flex gap-6 transition-colors duration-300',
            scrolled ? 'text-iris-charcoal' : 'text-white drop-shadow'
          )}>
            <li><Link href="/">Start</Link></li>
            <li><Link href="/about">Über mich</Link></li>
          </ul>

          {/* Zentrierter Titel */}
          <div className={clsx(
            'absolute left-1/2 -translate-x-1/2 text-xl font-bold transition-colors duration-300',
            scrolled || open ? 'text-iris-terracotta' : 'text-white drop-shadow'
          )}>
            <Link href="/" onClick={close}>Yoga mit Herz</Link>
          </div>

          {/* Desktop: Links rechts */}
          <ul className={clsx(
            'hidden md:flex items-center gap-6 transition-colors duration-300',
            scrolled ? 'text-iris-charcoal' : 'text-white drop-shadow'
          )}>
            <li><Link href="/yoga">Meine Kurse</Link></li>
            <li><Link href="/contact">Kontakt</Link></li>
            <li>
              <Link
                href="/yoga"
                className={clsx(
                  'inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-medium border-2 transition-all duration-300',
                  scrolled || open
                    ? 'border-iris-terracotta text-iris-terracotta hover:bg-iris-terracotta hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-iris-terracotta'
                )}
              >
                Kurs buchen
              </Link>
            </li>
          </ul>

          {/* Mobile: Hamburger-Button */}
          <button
            className={clsx(
              'md:hidden ml-auto p-2 rounded-md transition-colors',
              scrolled || open ? 'text-iris-charcoal' : 'text-white drop-shadow'
            )}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          >
            {open ? (
              // X-Icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              // Hamburger-Icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6"  x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
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
