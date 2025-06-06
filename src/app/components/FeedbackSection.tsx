'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const feedbacks = [
  {
    name: 'Anna',
    text: 'Iris schafft es, einen Raum zu öffnen, in dem man einfach sein darf. Yoga bei ihr ist wie nach Hause kommen.',
  },
  {
    name: 'Lisa',
    text: 'Ich liebe die Mischung aus Tiefe, Leichtigkeit und echter Verbindung. Danke für diese besondere Zeit auf der Matte.',
  },
  {
    name: 'Miriam',
    text: 'Durch die Sessions mit Iris konnte ich mich wieder mehr spüren und annehmen. Ihre Stimme ist pure Magie.',
  },
  {
    name: 'Sandra',
    text: 'So liebevoll, achtsam und stärkend. Ich habe mich noch nie so gesehen gefühlt in einem Yogaunterricht.',
  },
];

export default function FeedbackSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % feedbacks.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentFeedback = feedbacks[index];

  return (
    <div className="flex flex-col justify-start h-full space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-iris-forest">
        Feedback von Teilnehmerinnen
      </h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="bg-iris-sand p-6 rounded-xl shadow-lg max-w-xl"
        >
          <p className="text-lg italic mb-4 text-iris-charcoal">
            „{currentFeedback.text}“
          </p>
          <p className="text-iris-terracotta font-semibold">– {currentFeedback.name}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}