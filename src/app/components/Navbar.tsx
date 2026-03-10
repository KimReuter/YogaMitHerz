'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-iris-golden/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Linke Seite */}
        <ul className={clsx('flex gap-6 transition-colors duration-300', scrolled ? 'text-iris-charcoal' : 'text-white drop-shadow')}>
          <li><Link href="/">Start</Link></li>
          <li><Link href="/about">Über mich</Link></li>
        </ul>

        {/* Zentrierter Titel */}
        <div className={clsx(
          'absolute left-1/2 transform -translate-x-1/2 text-xl font-bold transition-colors duration-300',
          scrolled ? 'text-iris-terracotta' : 'text-white drop-shadow'
        )}>
          <Link href="/">Yoga mit Herz</Link>
        </div>

        {/* Rechte Seite */}
        <ul className={clsx('flex gap-6 transition-colors duration-300', scrolled ? 'text-iris-charcoal' : 'text-white drop-shadow')}>
          <li><Link href="/yoga">Meine Kurse</Link></li>
          <li><Link href="/contact">Kontakt</Link></li>
        </ul>
      </div>
    </nav>
  );
}