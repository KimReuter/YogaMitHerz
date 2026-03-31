'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const feedbacks = [
  {
    name: 'Janine',
    text: 'Ich wollte dir einfach mal Danke sagen! 🙏 Nach meinem stressigen Arbeitsalltag – kaum Bewegung und immer den Kopf voller Gedanken – sind deine Yogastunden für mich ein echter Ruhepol und ein echter Ausgleich. 🍀 Durch deine einfühlsame Art kann ich abschalten, Kraft tanken und mit mehr Gelassenheit weitermachen. Das tut einfach richtig gut! ✨',
  },
  {
    name: 'Ricarda',
    text: 'Ich habe mich in Iris\u2019 Yogaunterricht sehr wohl und gut aufgehoben gefühlt. Die einfühlsame Klangunterstützung hat mich zusätzlich auf einer tieferen Ebene berührt und das Erlebnis noch besonderer gemacht. Ihre Yoga Stunde habe ich mit einem wunderbaren leichten Gefühl verlassen. ❤️',
  },
  {
    name: 'Christine',
    text: 'Iris Yoga ist für mich "Oldie" immer eine Herausforderung, da ich ja nicht mehr so beweglich bin. Du nimmst darauf Rücksicht und gibst mir das Gefühl, viele Asanas gut zu können, mein Körper fühlt sich danach immer mobiler und beweglicher an. Dafür danke ich dir.',
  },
  {
    name: 'Hannes',
    text: 'Iris geht auf die Yogi ein, gefühlt findet immer das für mich gerade passende Yoga statt. Genau das Richtige am Ende einer stressigen Woche. 🪷🧘‍♂️',
  },
  {
    name: 'Heike',
    text: 'Bei dir fühle ich mich am ALLERBESTEN aufgehoben. Ich bin beweglicher und entspannter geworden und fühle mich danach immer wohl. Ich finde deine Stunden mit Allem einfach toll. Das sag ich auch jedem, der mich danach fragt. Mach bitte weiter so. 😘🧘‍♀️',
  },
  {
    name: 'Bettina',
    text: 'Du hast die seltene Gabe, uns gedanklich abzuholen, Körper und Geist in die Entspannung zu führen. Auf deine Geschichte zu Beginn der Stunde freue ich mich immer ganz besonders. Aus diesen Gründen komme ich in deine Yogastunde!',
  },
  {
    name: 'Katrin',
    text: 'Bis vor ein paar Jahren habe ich Yoga belächelt. Inzwischen kann ich mir ein Leben ohne Yoga bei Iris nicht mehr vorstellen. Alltagstauglich dem Körper etwas Gutes tun und daraus Kraft und Lebensfreude für die nächsten Tage gewinnen – das lernte ich bei Iris. Danke.',
  },
];

export default function FeedbackSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % feedbacks.length);
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  const current = feedbacks[index];

  return (
    <div className="max-w-2xl mx-auto text-center space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-iris-terracotta">
        Ein paar Worte von Menschen,<br className="hidden md:block" /> die bereits mit mir auf der Matte waren
      </h2>

      <div className="relative px-4">
        {/* Dekorative Zitatmarke */}
        <span
          aria-hidden
          className="absolute -top-8 -left-16 text-[7rem] leading-none text-iris-terracotta/15 font-serif select-none pointer-events-none"
        >
          „
        </span>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.9 }}
            className="relative z-10 space-y-5 pt-4"
          >
            <p className="text-lg md:text-xl italic text-iris-charcoal leading-relaxed">
              {current.text}
            </p>
            <p className="text-iris-terracotta font-semibold tracking-widest uppercase text-sm">
              — {current.name}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot-Navigation */}
      <div className="flex justify-center items-center gap-2 pt-2">
        {feedbacks.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Zeugnis ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === index
                ? 'bg-iris-terracotta w-6 h-2'
                : 'bg-iris-terracotta/30 w-2 h-2 hover:bg-iris-terracotta/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
