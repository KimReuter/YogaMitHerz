import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
  'Einlassen.',
  'Loslassen.',
  'Ankommen.',
  'Kraft spüren.',
  'Den Atem fühlen.',
  'Sich selbst begegnen.',
];

export default function YogaPoetry() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full relative min-h-[40vh] flex items-center justify-center overflow-hidden">
      {/* Hintergrundbild */}
      <div className="absolute inset-0">
        <img
          src="/leaf.jpg"
          alt="Hintergrund mit Blättern"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Textanimation */}
      <div className="relative z-10 text-center px-6 w-full">
        <p className="text-lg md:text-xl text-white opacity-80 mb-12">
          Yoga ist für mich …
        </p>

        <AnimatePresence mode="wait">
          <motion.h2
            key={phrases[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-semibold text-white drop-shadow-md"
          >
            {phrases[index]}
          </motion.h2>
        </AnimatePresence>
      </div>
    </section>
  );
}