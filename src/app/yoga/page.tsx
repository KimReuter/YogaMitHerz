'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const influences = [
  {
    title: 'Hatha – Achtsam & geerdet',
    image: '/images/hatha.jpg',
    blurb:
      'Ruhige, klare Ausrichtung, bewusste Haltungen, Zeit zum Nachspüren. Hatha bringt Fokus und Erdung in die Praxis.',
  },
  {
    title: 'Vinyasa – Im Fluss',
    image: '/images/vinyasa.jpg',
    blurb:
      'Atem & Bewegung verschmelzen. Mal sanft, mal kraftvoll – immer im Rhythmus deines Atems.',
  },
  {
    title: 'Ashtanga – Klar & kraftvoll',
    image: '/images/ashtanga.jpg',
    blurb:
      'Präzision, Stabilität, Präsenz. Kein Dogma, sondern Inspiration für Struktur und innere Stärke.',
  }
];

export default function YogaArtenPage() {
  return (
    <main className="bg-iris-golden text-iris-charcoal">
      {/* Hero */}
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
            Ein Kurs – inspiriert von vielen Yoga‑Arten
          </motion.h1>
        </div>
      </section>

      {/* Einleitung: Wie Iris unterrichtet */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="md:flex md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:flex-1 space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-iris-terracotta">
              Wie ich unterrichte
            </h2>
            <p>
              Mein Unterricht ist kein fester Stil – er entsteht im Moment. Ich kombiniere Elemente aus Hatha,
              Vinyasa und Ashtanga, mal ruhig, mal dynamisch, immer achtsam. <br />
              So bekommst du genau das, was du heute brauchst.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="flex items-center justify-center rounded-xl bg-white/60 px-4 py-3 text-sm shadow transition-transform duration-300 hover:scale-105">achtsam & vielfältig</div>
              <div className="flex items-center justify-center rounded-xl bg-white/60 px-4 py-3 text-sm shadow transition-transform duration-300 hover:scale-105">atemgeführt & klar</div>
              <div className="flex items-center justify-center rounded-xl bg-white/60 px-4 py-3 text-sm shadow transition-transform duration-300 hover:scale-105">sanft bis kraftvoll</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 md:mt-0 md:ml-10 md:max-w-sm md:shrink-0 md:self-start rounded-2xl bg-white/70 p-5 shadow"
          >
            <h3 className="font-semibold mb-2">Für wen ist mein Kurs geeignet?</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Einsteiger:innen & Wiedereinsteiger:innen</li>
              <li>Menschen, die achtsam üben wollen</li>
              <li>Alle, die Balance zwischen Ruhe & Kraft suchen</li>
            </ul>
            <p className="text-sm mt-3 opacity-80">
              Du brauchst nichts außer dich selbst – <br />
              und bequeme Kleidung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ein Kurs – viele Einflüsse */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-iris-terracotta mb-8">
          Ein Kurs – viele Einflüsse
        </h2>

        {/* Hinweis nur einmal */}
        <p className="text-sm opacity-80 mb-10">
           Hinweis: Dies sind <strong>Einflüsse</strong> meiner Praxis – keine getrennten Kursangebote.
        </p>

        <div className="space-y-16">
          {influences.map((item, idx) => (
            <div
              key={item.title}
              className={`flex flex-col md:flex-row items-center gap-10 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/2">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-md object-cover w-full"
                />
              </div>
              <motion.div
                className="md:w-1/2 space-y-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-xl md:text-2xl font-semibold">{item.title}</h3>
                <p>{item.blurb}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Was dich erwartet */}
      <section className="bg-iris-sand">
  <div className="max-w-6xl mx-auto px-6 py-16">
    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
      {[
        {
          title: 'Atem & Ankommen',
          text: 'Wir starten ruhig, verbinden Atem & Körper – du kommst bei dir an.',
        },
        {
          title: 'Fluss & Fokus',
          text: 'Bewegte Sequenzen oder gehaltene Asanas – je nach Bedürfnis der Gruppe.',
        },
        {
          title: 'Integration & Ruhe',
          text: 'Nachspüren, Stille & Savasana –\n damit die Praxis wirken kann.',
        },
      ].map((b, i, arr) => (
        <React.Fragment key={b.title}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-2xl bg-white/80 p-6 shadow w-full md:w-1/3 text-center"
          >
            <h4 className="font-semibold mb-2">{b.title}</h4>
            <p className="text-sm whitespace-pre-line">{b.text}</p>
          </motion.div>

          {/* Pfeil nur zwischen den Boxen */}
          {i < arr.length - 1 && (
            <div className="hidden md:block text-iris-terracotta">
              ➝
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="bg-iris-terracotta text-white py-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Lust, es auszuprobieren?</h2>
          <p className="text-lg">
            Schau in den Stundenplan – such dir einen Termin aus und komm auf die Matte. <br />
            Genau so, wie du heute bist.
          </p>
          <a
            href="/timetable"
            className="inline-block mt-4 px-6 py-3 rounded-full bg-white text-iris-terracotta font-semibold hover:bg-iris-terracotta hover:text-white transition-colors"
          >
            Zum Stundenplan
          </a>
        </motion.div>
      </section>
    </main>
  );
}