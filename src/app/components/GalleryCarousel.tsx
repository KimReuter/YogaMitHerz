'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/gallery/galerie_placeholder1.jpg',
  '/gallery/galerie_placeholder2.jpg',
  '/gallery/galerie_placeholder3.jpg',
  '/gallery/galerie_placeholder4.jpg',
  '/gallery/galerie_placeholder5.jpg',
  '/gallery/galerie_placeholder6.jpg',
  '/gallery/galerie_placeholder7.jpg',
];

export default function GalleryCarousel() {
  const mobileRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateMobileScroll = () => {
    if (!mobileRef.current) return;
    const { scrollLeft, clientWidth } = mobileRef.current;
    setActiveIndex(Math.round(scrollLeft / clientWidth));
  };

  const updateDesktopScroll = () => {
    if (!desktopRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = desktopRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scrollDesktop = (direction: 'left' | 'right') => {
    desktopRef.current?.scrollBy({ left: direction === 'left' ? -316 : 316, behavior: 'smooth' });
  };

  const scrollMobileTo = (index: number) => {
    if (!mobileRef.current) return;
    mobileRef.current.scrollTo({ left: index * mobileRef.current.clientWidth, behavior: 'smooth' });
  };

  useEffect(() => {
    updateDesktopScroll();
  }, []);

  return (
    <section className="py-20 bg-iris-golden overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-iris-terracotta px-6">
        Einblicke in meine Yogawelt
      </h2>

      {/* Mobile: Vollbreites Swipe-Karussell */}
      <div className="md:hidden">
        <div
          ref={mobileRef}
          onScroll={updateMobileScroll}
          className="flex overflow-x-auto scrollbar-hide"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full px-5"
              style={{ scrollSnapAlign: 'center' }}
            >
              <img
                src={src}
                alt={`Yoga Bild ${i + 1}`}
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          ))}
        </div>

        {/* Dot-Indikatoren */}
        <div className="flex justify-center gap-2 mt-5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollMobileTo(i)}
              aria-label={`Bild ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-6 bg-iris-terracotta' : 'w-2 bg-iris-terracotta/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: Pfeil-Navigation + horizontales Scrollen */}
      <div className="hidden md:flex items-center justify-center gap-4 max-w-6xl mx-auto px-6">
        <button
          onClick={() => scrollDesktop('left')}
          className="flex-shrink-0 bg-iris-terracotta hover:bg-iris-terracotta/80 text-white p-2 rounded-full transition disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
          disabled={!canScrollLeft}
          aria-label="Zurück"
        >
          <ChevronLeft />
        </button>

        <div
          ref={desktopRef}
          onScroll={updateDesktopScroll}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ width: '932px' }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Yoga Bild ${i + 1}`}
              className="w-[300px] h-[200px] object-cover rounded-xl shadow-lg flex-shrink-0"
            />
          ))}
        </div>

        <button
          onClick={() => scrollDesktop('right')}
          className="flex-shrink-0 bg-iris-terracotta hover:bg-iris-terracotta/80 text-white p-2 rounded-full transition disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
          disabled={!canScrollRight}
          aria-label="Weiter"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
