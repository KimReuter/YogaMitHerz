'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const funFacts = [
  'Espresso – süß und stark. Tee am Abend. Kakao für die Seele. 😌',
  'Erster Move am Morgen? Heißes Wasser mit Salz und ein schönes Buch.📖',
  '„I’m so excited!“ – Und schon tanzt alles in mir. 💃',
  'Soulfood? Ganz klar: Schokolade. Und zwar mit vollem Einsatz. 🍫',
  'Ein guter Witz bringt mich immer zum Lachen – auch beim herabschauenden Hund. 😄',
  'Wenn ich ein Tier wäre? Ganz klar: Mieze. 🐱',
  'Mein schönstes Kindheitsabenteuer: barfuß Bäume erklimmen und ins frische Gras hüpfen. 🌳',
  'Ich kann richtig gut vorlesen, zuhören und meine Liebsten verwöhnen. 💗',
  'Zuhause heißt: Wohlfühlen, sein dürfen, wie ich bin. 🏡',
  'Mein Lebensmotto? Miteinander. Füreinander. 💫',
  'Ein Buch, das mich tief berührt hat: „Anouk – Dein nächstes Abenteuer wartet“. 📚',
  'Was mich im Alltag glücklich macht? Sonne, Marienkäfer, Katzen und Zeit zum Genießen. ☀️🐞🐈',
  'Lieblings-Erinnerung: Zwei Wochen mit Familie & Dachzelt durch die Alpen – und am Gardasee ankommen. 🏕️🚐',
];

export default function FunFactGenerator() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  const generateFact = () => {
    const nextIndex = Math.floor(Math.random() * funFacts.length);
    setIndex(nextIndex);
    setShow(false);
    setTimeout(() => setShow(true), 100);
  };

  return (
    <section className="pt-6 pb-0 text-center text-iris-charcoal">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-iris-terracotta">
          🌀 Wusstest du schon?
        </h2>

        <button
          onClick={generateFact}
          className="
            bg-iris-forest 
            hover:bg-iris-moss 
            text-white 
            font-semibold 
            py-3 px-6 
            rounded-full 
            shadow-md 
            hover:shadow-lg 
            transition-all 
            duration-300
          "
        >
          Zeig mir einen Fun Fact über Iris
        </button>

        <div className="min-h-[100px] mt-8">
          <AnimatePresence mode="wait">
            {show && (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-lg md:text-xl text-iris-terracotta"
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