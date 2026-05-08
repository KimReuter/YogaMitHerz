'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = Array.from({ length: 20 }, (_, i) => `/gallery/galerie_placeholder${i + 1}.jpg`);
const AUTOPLAY_DELAY = 4000;
const SCROLL_DURATION = 700;

function smoothScrollTo(el: HTMLElement, targetLeft: number) {
  const startLeft = el.scrollLeft;
  const delta = targetLeft - startLeft;
  const startTime = performance.now();
  const easeInOut = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  const step = (now: number) => {
    const progress = Math.min((now - startTime) / SCROLL_DURATION, 1);
    el.scrollLeft = startLeft + delta * easeInOut(progress);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export default function GalleryCarousel() {
  const mobileRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeIndexRef = useRef(0);

  const updateMobileScroll = () => {
    if (!mobileRef.current) return;
    const { scrollLeft, clientWidth } = mobileRef.current;
    const index = Math.round(scrollLeft / clientWidth);
    setActiveIndex(index);
    activeIndexRef.current = index;
  };

  const updateDesktopScroll = () => {
    if (!desktopRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = desktopRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scrollDesktop = (direction: 'left' | 'right') => {
    if (!desktopRef.current) return;
    smoothScrollTo(desktopRef.current, desktopRef.current.scrollLeft + (direction === 'left' ? -316 : 316));
  };

  const scrollMobileTo = (index: number) => {
    if (!mobileRef.current) return;
    smoothScrollTo(mobileRef.current, index * mobileRef.current.clientWidth);
  };

  const autoAdvance = useCallback(() => {
    if (mobileRef.current && window.innerWidth < 1024) {
      const next = (activeIndexRef.current + 1) % images.length;
      scrollMobileTo(next);
    } else if (desktopRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = desktopRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 1) {
        smoothScrollTo(desktopRef.current, 0);
      } else {
        smoothScrollTo(desktopRef.current, scrollLeft + 316);
      }
    }
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(autoAdvance, AUTOPLAY_DELAY);
  }, [autoAdvance]);

  useEffect(() => {
    updateDesktopScroll();
    timerRef.current = setInterval(autoAdvance, AUTOPLAY_DELAY);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [autoAdvance]);

  const handleScrollDesktop = () => {
    updateDesktopScroll();
    resetTimer();
  };

  const handleScrollMobile = () => {
    updateMobileScroll();
    resetTimer();
  };

  const handleDesktopButton = (direction: 'left' | 'right') => {
    scrollDesktop(direction);
    resetTimer();
  };

  const handleDotClick = (index: number) => {
    scrollMobileTo(index);
    resetTimer();
  };

  return (
    <section className="py-20 bg-iris-golden overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-iris-terracotta px-6">
        Einblicke in meine Yogawelt
      </h2>

      {/* Mobile: Vollbreites Swipe-Karussell */}
      <div className="lg:hidden">
        <div
          ref={mobileRef}
          onScroll={handleScrollMobile}
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
                style={i === 16 ? { objectPosition: 'top' } : i === 0 ? { objectPosition: '50% 65%' } : i === 2 ? { objectPosition: '50% 65%' } : i === 4 ? { objectPosition: 'center' } : undefined}
              />
            </div>
          ))}
        </div>

        {/* Dot-Indikatoren */}
        <div className="flex justify-center gap-2 mt-5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              aria-label={`Bild ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-6 bg-iris-terracotta' : 'w-2 bg-iris-terracotta/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: Pfeil-Navigation + horizontales Scrollen */}
      <div className="hidden lg:flex items-center justify-center gap-4 max-w-6xl mx-auto px-6">
        <button
          onClick={() => handleDesktopButton('left')}
          className="flex-shrink-0 bg-iris-terracotta hover:bg-iris-terracotta/80 text-white p-2 rounded-full transition disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
          disabled={!canScrollLeft}
          aria-label="Zurück"
        >
          <ChevronLeft />
        </button>

        <div
          ref={desktopRef}
          onScroll={handleScrollDesktop}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ width: '932px' }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Yoga Bild ${i + 1}`}
              className="w-[300px] h-[200px] object-cover rounded-xl shadow-lg flex-shrink-0"
              style={i === 16 ? { objectPosition: 'top' } : i === 0 ? { objectPosition: '50% 65%' } : i === 2 ? { objectPosition: '50% 65%' } : i === 4 ? { objectPosition: 'center' } : undefined}
            />
          ))}
        </div>

        <button
          onClick={() => handleDesktopButton('right')}
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
