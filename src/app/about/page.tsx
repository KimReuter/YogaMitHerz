'use client';

import YogaPoetry from '@/components/YogaPoetry';
import TimelineSection from '@/components/TimelineSection';
import FunFactGenerator from '@/components/FunFactGenerator';
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <>
      {/* Hero mit Parallax */}
      <section className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: "url('/Iris_Hero.jpg')",
            backgroundPosition: "center 35%",
            transform: "translateZ(0)",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-iris-golden text-4xl md:text-5xl font-bold text-center drop-shadow-lg"
          >
            Mein Weg zum Yoga
          </motion.h1>
        </div>
      </section>

      {/* Abschnitt: Mein Weg zum Yoga */}
      <section className="bg-iris-golden text-iris-charcoal">
        <main className="px-6 py-16 max-w-4xl mx-auto space-y-16">
          <motion.h2
            className="text-2xl font-semibold mb-6 text-iris-terracotta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            🧘‍♀️ Mein Weg zum Yoga – eine kleine Reise
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                delay: 0,
                text: (
                  <>
                    <strong>✨ Der erste Kontakt:</strong> Begonnen habe ich mit dem Ashtanga-Stil – kraftvoll, dynamisch, fordernd. Ich war sofort fasziniert von der Verbindung aus Atem und Bewegung.
                  </>
                ),
              },
              {
                delay: 0.1,
                text: (
                  <>
                    <strong>🌀 Vom Praktizieren zum Weitergeben:</strong> Mit der Zeit fand ich meinen Weg in den Vinyasa-Stil, wo ich viele Jahre lang selbst praktiziert habe – bis sich irgendwann die Frage stellte: Wie kann ich das, was mich so tief berührt, mit anderen teilen?
                  </>
                ),
              },
              {
                delay: 0.2,
                text: (
                  <>
                    <strong>🌸 Die Ausbildung:</strong> Ich ließ mich zur Yoga- und Kinderyogalehrerin im Hatha-Stil ausbilden. Doch was ich lehre, ist nicht ein fester Stil – sondern eine Einladung, deinen ganz eigenen Zugang zu Yoga zu finden.
                  </>
                ),
              },
              {
                delay: 0.3,
                text: (
                  <>
                    <strong>💗 Heute:</strong> Heute leite ich meine Kurse aus dem Herzen heraus. Jeder Mensch bringt andere Erfahrungen mit – deshalb arbeite ich mit Variationen, unterschiedlichen Schwierigkeitsstufen und ganz viel Achtsamkeit. Was zählt, bist du – mit deinem Atem, deinem Körper, deinem Tempo.
                  </>
                ),
              },
            ].map(({ delay, text }, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </main>
      </section>

      {/* Fun Fact Generator */}
      <section className="w-full bg-iris-sand text-iris-charcoal py-12">
        <div className="max-w-4xl mx-auto px-6">
          <FunFactGenerator />
        </div>
      </section>

      {/* Philosophie */}
      <section className="bg-iris-golden text-iris-charcoal">
        <main className="px-6 py-16 max-w-4xl mx-auto space-y-16">
          <motion.h2
            className="text-2xl font-semibold mb-6 text-iris-terracotta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            💬 Meine Philosophie
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: 'Von Herz zu Herz',
                content:
                  'Meine Yogastunden entstehen aus dem Moment heraus. Ich unterrichte nicht nach starren Plänen, sondern spüre, was gerade gebraucht wird – im Raum, im Körper, im Herzen. Jeder Mensch bringt etwas Einzigartiges mit, und genau das darf in meinen Stunden seinen Platz finden.',
              },
              {
                title: 'Vielfalt statt Schubladen',
                content:
                  'Ich folge keinem bestimmten Stil dogmatisch. Stattdessen kombiniere ich Elemente aus Hatha, Vinyasa und Ashtanga – je nachdem, was sich stimmig anfühlt. So können wir gemeinsam einen Zugang zu Yoga finden, der wirklich zu dir passt.',
              },
              {
                title: 'Asana erleben – ohne Druck',
                content:
                  'Yoga ist für mich keine akrobatische Show. Es geht nicht um die perfekte Haltung, sondern um das Spüren, Atmen und Dasein im Jetzt. Meine Anleitungen laden dich ein, deinen Körper liebevoll zu erkunden – ohne Leistungsdruck, dafür mit viel Achtsamkeit.',
              },
              {
                title: 'Raum für Rückverbindung',
                content:
                  'Im Alltag verlieren wir oft den Kontakt zu uns selbst. Meine Stunden sind eine Einladung, wieder zurück in die eigene Mitte zu finden. Mit sanften Impulsen, bewussten Atemzügen und Momenten der Stille schaffen wir Raum für Rückverbindung – zu dir selbst und zur Welt um dich herum.',
              },
            ].map(({ title, content }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <p>
                  <strong>{title}:</strong> {content}
                </p>
              </motion.div>
            ))}
          </div>
        </main>
      </section>

      {/* Zusätzliche Abschnitte */}
      <YogaPoetry />
      <TimelineSection />
    </>
  );
}