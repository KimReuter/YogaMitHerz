'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const funFacts = [
  'Ich kann im Kopfstand schlafen – theoretisch.',
  'Meine Playlist reicht von Mantra bis 90s Trashpop.',
  'Ich liebe scharfe Soße mehr als Sonnengrüße.',
  'Meine Yogamatte ist älter als mein Auto.',
  'Ich habe mal versucht, Shavasana mit einem Espresso zu machen. War keine gute Idee.',
  'Lieblingsasana? Shavasana. Immer.',
  'Ich gebe meine besten Yoga-Impulse beim Spazierengehen – oder Zähneputzen.',
  'Ich glaube fest an die heilende Kraft von Lachen im herabschauenden Hund.',
];

export default function FunFactGenerator() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  const generateFact = () => {
    const nextIndex = Math.floor(Math.random() * funFacts.length);
    setIndex(nextIndex);
    setShow(false);
    setTimeout(() => setShow(true), 100); // für sauberen Re-Enter Effekt
  };

  return (
    <section className="pt-6 pb-0  text-center text-gray-800 dark:text-gray-100">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">🌀 Wusstest du schon?</h2>

        <button
          onClick={generateFact}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded mb-8 transition-all"
        >
          Zeig mir einen Fun Fact über Iris
        </button>

        <div className="min-h-[100px]">
          <AnimatePresence mode="wait">
            {show && (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-lg md:text-xl text-pink-700 dark:text-pink-300"
              >
                {funFacts[index]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}