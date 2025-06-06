'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const yogaStyles = [
  {
    title: 'Hatha Yoga',
    image: '/images/hatha.jpg',
    description:
      'Der Klassiker – und doch so viel mehr als das. Hatha Yoga ist für mich wie ein stiller Spaziergang durch deinen Körper. Wir bewegen uns achtsam, halten die Asanas länger, spüren nach – und finden zurück zu einer tiefen Verbindung zwischen Körper, Atem und Geist. Ideal für alle, die sich selbst bewusster begegnen wollen.',
    needs: 'Neugier, Offenheit und manchmal ein bisschen Geduld.',
    gains: 'Kraft, Klarheit und einen tiefen Atemzug Pause vom Alltag.',
  },
  {
    title: 'Vinyasa Yoga',
    image: '/images/vinyasa.jpg',
    description:
      'Hier fließt nicht nur der Atem, sondern der ganze Körper. In meinen Vinyasa-Stunden verbinden wir Bewegung und Atmung zu einem kreativen Flow – mal ruhig und sanft, mal fordernd und kraftvoll. Du lernst, auf den Rhythmus deines Atems zu hören und dich ganz in der Bewegung zu verlieren – und dabei mit jeder Stunde etwas mehr bei dir selbst anzukommen.',
    needs: 'Lust auf Bewegung und ein bisschen Experimentierfreude.',
    gains: 'Energie, Leichtigkeit und das Gefühl, ganz im Jetzt zu sein.',
  },
  {
    title: 'Ashtanga-inspirierte Praxis',
    image: '/images/ashtanga.jpg',
    description:
      'Für alle, die es gerne klar, kraftvoll und dynamisch mögen. Ich unterrichte keine strenge Serie – aber lasse mich gerne davon inspirieren: durch präzise Ausrichtung, bewusstes Atmen (Ujjayi!) und eine stabile Praxis, die dich körperlich und mental wachsen lässt. Dabei entsteht eine ganz eigene Disziplin – nicht aus Zwang, sondern aus Hingabe an den Moment.',
    needs: 'Motivation, Lust auf Entwicklung und ein bisschen Schweißbereitschaft.',
    gains: 'Innere Stärke, Disziplin – und das gute Gefühl, dir selbst treu zu bleiben.',
  },
  {
    title: 'Kinderyoga',
    image: '/images/kinderyoga.jpg',
    description:
      'Kleine Füße, große Fantasie. In meinen Kinderyogastunden wird gebrüllt wie ein Löwe, geschnurrt wie eine Katze und mutig balanciert wie ein Flamingo. Wir reisen durch Geschichten, tauchen ein in Fantasiewelten und entdecken gemeinsam mit viel Freude und Achtsamkeit, was der eigene Körper alles kann. Spielerisch und liebevoll – ganz ohne Leistungsdruck.',
    needs: 'Kinder zwischen 4 und 10 – oder einfach ein neugieriges Herz.',
    gains: 'Ein paar stille Minuten und viele leuchtende Augen.',
  },
  {
    title: 'Mein Stil: Freigeist-Yoga',
    image: '/images/freigeist.jpg',
    description:
      'Ich mixe, was gut tut. Denn Menschen sind verschieden – und das ist wunderbar. Ich kombiniere Elemente aus Hatha, Vinyasa, Ashtanga und mehr, je nachdem, was du gerade brauchst. Manchmal mit Musik, manchmal in Stille, mal dynamisch, mal sanft. Immer mit Intuition, Achtsamkeit und dem Blick auf das Wesentliche: dich.',
    needs: 'Nichts als dich selbst.',
    gains: 'Raum für deinen Weg zurück zu dir – ehrlich, kraftvoll und frei.',
  },
];

export default function YogaArtenPage() {
  return (
    <main className="bg-iris-golden text-iris-charcoal">
      {/* Hero-Sektion */}
      <section className="relative h-[60vh] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/yoga-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="relative z-10 flex items-center justify-center h-full bg-black/40">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl md:text-5xl font-bold text-center drop-shadow-lg"
          >
            Yoga-Arten, die dich zurück zu dir bringen
          </motion.h1>
        </div>
      </section>

      {/* Einzelne Abschnitte */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        {yogaStyles.map((style, idx) => (
          <div
            key={style.title}
            className={`flex flex-col md:flex-row items-center gap-10 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
          >
            <div className="md:w-1/2">
              <Image
                src={style.image}
                alt={style.title}
                width={600}
                height={400}
                className="rounded-xl shadow-md object-cover w-full"
              />
            </div>
            <motion.div
              className="md:w-1/2 space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-iris-forest">{style.title}</h2>
              <p>{style.description}</p>
              <p><strong>Du brauchst:</strong> {style.needs}</p>
              <p><strong>Du bekommst:</strong> {style.gains}</p>
            </motion.div>
          </div>
        ))}
      </section>

      {/* Call-to-Action */}
      <section className="bg-iris-terracotta text-white py-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Bereit, auf die Matte zu kommen?
          </h2>
          <p className="text-lg">
            Schau dir den Stundenplan an und finde die Stunde, die zu dir passt.
            Ob ruhig oder kraftvoll – du bist willkommen, genauso wie du bist.
          </p>
          <a
            href="/timetable"
            className="inline-block mt-4 px-6 py-3 rounded-full bg-white text-iris-terracotta font-semibold hover:bg-iris-clay transition-colors"
          >
            Zum Stundenplan
          </a>
        </motion.div>
      </section>
    </main>
  );
}