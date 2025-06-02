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
        <div className="relative z-10 flex items-center justify-center h-full bg-black/30">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-4xl md:text-5xl font-bold text-center drop-shadow-lg"
          >
            Wer ich bin – und wie Yoga mich gefunden hat
          </motion.h1>
        </div>
      </section>

      {/* Abschnitt mit rosa Hintergrund */}
      <section className="bg-pink-50 dark:bg-gray-900">
        <main className="px-6 py-16 max-w-4xl mx-auto text-gray-800 dark:text-gray-100">
          <section className="space-y-16">
            {/* Mein Weg zum Yoga */}
            <div>
              <motion.h2
                className="text-2xl font-semibold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                🧘‍♀️ Mein Weg zum Yoga – eine kleine Reise
              </motion.h2>

              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <strong>✨ Der erste Kontakt:</strong> Begonnen habe ich mit dem Ashtanga-Stil – kraftvoll, dynamisch, fordernd. Ich war sofort fasziniert von der Verbindung aus Atem und Bewegung.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <strong>🌀 Vom Praktizieren zum Weitergeben:</strong> Mit der Zeit fand ich meinen Weg in den Vinyasa-Stil, wo ich viele Jahre lang selbst praktiziert habe – bis sich irgendwann die Frage stellte: Wie kann ich das, was mich so tief berührt, mit anderen teilen?
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <strong>🌸 Die Ausbildung:</strong> Ich ließ mich zur Yoga- und Kinderyogalehrerin im Hatha-Stil ausbilden. Doch was ich lehre, ist nicht ein fester Stil – sondern eine Einladung, deinen ganz eigenen Zugang zu Yoga zu finden.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <strong>💗 Heute:</strong> Heute leite ich meine Kurse aus dem Herzen heraus. Jeder Mensch bringt andere Erfahrungen mit – deshalb arbeite ich mit Variationen, unterschiedlichen Schwierigkeitsstufen und ganz viel Achtsamkeit. Was zählt, bist du – mit deinem Atem, deinem Körper, deinem Tempo.
                </motion.p>
              </div>
            </div>
          </section>
        </main>
      </section>

      {/* FunFactGenerator – Vollbreit mit Hintergrund */}
      <section className="w-full bg-purple-100 dark:bg-purple-900 text-gray-800 dark:text-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <FunFactGenerator />
        </div>
      </section>

      {/* Weiter im rosa Abschnitt: Philosophie */}
      <section className="bg-pink-50 dark:bg-gray-900">
        <main className="px-6 py-16 max-w-4xl mx-auto text-gray-800 dark:text-gray-100">
          <section className="space-y-16">
            {/* Meine Philosophie */}
            <div>
              <motion.h2
                className="text-2xl font-semibold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                💬 Meine Philosophie
              </motion.h2>

              <div className="grid gap-8 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <p><strong>Von Herz zu Herz:</strong> Meine Yogastunden sind keine Einbahnstraße …</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <p><strong>Vielfalt statt Schubladen:</strong> Ich ordne meine Kurse keinem festen Stil zu …</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p><strong>Asana erleben – ohne Druck:</strong> "Asana" – die angenehme, ruhige Körperstellung …</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <p><strong>Raum für Rückverbindung:</strong> Wir vergessen im Alltag oft, auf unsere eigene Stimme zu hören …</p>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
      </section>

      {/* YogaPoetry */}
      <YogaPoetry />

      {/* Timeline */}
      <TimelineSection />
    </>
  );
}