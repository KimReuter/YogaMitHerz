'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    '/gallery/galerie_placeholder1.jpg',
    '/gallery/galerie_placeholder2.jpg',
    '/gallery/galerie_placeholder3.jpg',
    '/gallery/galerie_placeholder4.jpg',
    '/gallery/galerie_placeholder5.jpg',
];

export default function GalleryCarousel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const scrollAmount = 316;

    const updateScrollState = () => {
        if (!containerRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    };

    const scroll = (direction: 'left' | 'right') => {
        if (!containerRef.current) return;
        const amount = direction === 'left' ? -scrollAmount : scrollAmount;
        containerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    };

    useEffect(() => {
        updateScrollState();
    }, []);

    return (
        <section className="py-16 px-6 bg-white dark:bg-gray-900">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-100">
                Einblicke in meine Yogawelt
            </h2>

            <div className="flex items-center justify-center gap-4 max-w-6xl mx-auto">
                {/* Pfeil links */}
                <button
                    onClick={() => scroll('left')}
                    className={`bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-full transition disabled:opacity-30 disabled:cursor-not-allowed`}
                    disabled={!canScrollLeft}
                    aria-label="Zurück"
                >
                    <ChevronLeft />
                </button>

                {/* Bildreihe */}
                <div
                    ref={containerRef}
                    onScroll={updateScrollState}
                    className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
                    style={{ width: '932px' }} // 3x 300px + 2x 16px
                >
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Yoga Bild ${index + 1}`}
                            className="w-[300px] h-[200px] object-cover rounded-lg shadow-md flex-shrink-0"
                        />
                    ))}
                </div>

                {/* Pfeil rechts */}
                <button
                    onClick={() => scroll('right')}
                    className={`bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-full transition disabled:opacity-30 disabled:cursor-not-allowed`}
                    disabled={!canScrollRight}
                    aria-label="Weiter"
                >
                    <ChevronRight />
                </button>
            </div>
        </section>
    );
}