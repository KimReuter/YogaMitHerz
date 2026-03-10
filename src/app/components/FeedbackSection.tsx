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
    text: 'Ich habe mich in Iris’ Yogaunterricht sehr wohl und gut aufgehoben gefühlt. Die einfühlsame Klangunterstützung hat mich zusätzlich auf einer tieferen Ebene berührt und das Erlebnis noch besonderer gemacht. Ihre Yoga Stunde habe ich mit einem wunderbaren leichten Gefühl verlassen. ❤️',
  },
  {
    name: 'Christine',
    text: 'Iris Yoga ist für mich "Oldie "immer eine Herausforderung, da ich ja nicht mehr so beweglich bin. Du nimmst darauf Rücksicht und gibst mir das Gefühl, viele Asanas gut zu können, mein Körper fühlt sich danach immer mobiler und beweglicher an. Dafür danke ich dir.',
  },
  {
    name: 'Hannes',
    text: 'Iris geht auf die Yogi ein, gefühlt findet immer das für mich gerade passende Yoga statt. Genau das Richtige am Ende einer stressigen Woche. 🪷🧘‍♂️',
  },
  {
    name: 'Heike',
    text: 'Das erste Mal zum Yoga war ich bei meiner Reha. Da habe ich es kennen und lieben gelernt. Als Claudia mich dann bei dir mit untergebracht hat,  war ich sehr froh. Mittlerweile habe ich auch andere Yogalehrer kennengelernt. Bei dir fühle ich mich aber am ALLERBESTEN aufgehoben. Ich bin beweglicher und entspannter geworden und fühle mich danach immer wohl. Anfangs war ich immer noch etwas aufgewühlt und konnte schlecht einschlafen. Jetzt hat sich mein Körper und meine Seele daran gewöhnt. Ich finde deine Stunden mit Allem einfach toll. Das sag ich auch jeden der mich danach fragt. Mach bitte weiter so. 😘🧘‍♀️👏 Namaste'
  },
  {
    name: 'Bettina',
    text: 'Tausend Dinge, die uns die Woche über begegnen und belasten, von denen man sich nur durch körperliche Aktivität, in die Stille gehen, Atem- und Meditationstechniken befreien kann. Du hast die seltene Gabe uns gedanklich abzuholen, Körper und Geist in die Entspannung zu führen. Auf Deine Geschichte zu Beginn der Stunde, freue ich mich immer ganz besonders. Aus diesen Gründen komme ich in Deine Yogastunde!'
  },
  {
    name: 'Katrin',
    text: 'Bis vor ein paar Jahren habe ich Yoga belächelt. Ich bin jemand, der "richtigen Sport" schätzt. Inzwischen kann ich mir ein Leben ohne Yoga bei Iris nicht mehr vorstellen. Das Klischee von "verknoteten" Menschen in weißen Gewändern muss man nicht erfüllen. Aber alltagstauglich dem Körper etwas Gutes tun und daraus Kraft und Lebensfreude für die nächsten Tage gewinnen - das lernte ich bei Iris. Danke.'
  }
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
      <h2 className="text-3xl md:text-4xl font-bold text-iris-terracotta">
        Ein paar Worte von Menschen, die bereits mit mir auf der Matte waren
      </h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1.2 }}
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