'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        'sticky top-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Linke Seite */}
        <ul className="flex gap-6 text-iris-charcoal">
          <li><Link href="/about">Über mich</Link></li>
          <li><Link href="/yoga">Yoga-Arten</Link></li>
          <li><Link href="/energy">Energiearbeit</Link></li>
        </ul>

        {/* Zentrierter Titel */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold text-iris-forest">
          <Link href="/">Yoga mit Herz</Link>
        </div>

        {/* Rechte Seite */}
        <ul className="flex gap-6 text-iris-charcoal !text-iris-charcoal">
          <li><Link href="/timetable">Stundenplan</Link></li>
          <li><Link href="/contact">Kontakt</Link></li>
        </ul>
      </div>
    </nav>
  );
}