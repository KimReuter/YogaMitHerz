'use client';

import TimelineSection from '@/components/TimelineSection';
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
        <main className="px-6 py-16 max-w-3xl mx-auto">
          <motion.h2
            className="text-2xl font-semibold mb-10 text-iris-terracotta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Mein Weg zum Yoga
          </motion.h2>

          <div className="space-y-6 text-[1.05rem] leading-[1.85]">

            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              Mein eigener Weg zum Yoga begann vor über zehn Jahren – durch eine liebe Freundin. Anfangs war ich eher skeptisch. Doch der Ashtanga-Stil, mit seinen fordernden und fließenden Abläufen, war in diesem Moment genau das Richtige für mich. Mein Geist war so beschäftigt, dass ich am Ende jeder Stunde plötzlich diese tiefe Entspannung spürte. Mit der Zeit fühlte ich mich wieder kraftvoller, beweglicher – und vor allem ausgeglichener.
            </motion.p>

            {/* Pull Quote */}
            <motion.blockquote
              className="border-l-4 border-iris-terracotta pl-6 my-2 italic text-xl text-iris-terracotta leading-relaxed"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Yoga wurde immer mehr zu einem wichtigen Teil meines Lebens.
            </motion.blockquote>

            {[
              { delay: 0, text: 'Als meine Kinder noch klein waren, entstand zuerst der Wunsch, mich zur Kinderyogalehrerin ausbilden zu lassen – eine Ausbildung, die ich 2017 begann. Die Menschen, die ich dort traf, meine Lehrerin und die Erfahrungen mit Yoga bestärkten mich schnell darin, Yoga nicht nur an kleine, sondern auch an große Menschen weiterzugeben.' },
              { delay: 0.1, text: 'So begann ich 2018 meine Hatha-Yogalehrer-Ausbildung bei Kerstin Nirmala Bucher in Zwickau, die ich etwa zweieinhalb Jahre später abschloss. Zunächst unterrichtete ich kleine Gruppen von Freundinnen bei mir zuhause, später zog mein Kurs ins Studio auf der Fortstraße um. Mit der Zeit kamen immer wieder neue Gesichter dazu – oft über Empfehlungen. Dafür bin ich unglaublich dankbar.' },
              { delay: 0.15, text: 'Parallel dazu entwickelte sich auch meine eigene Praxis weiter. Ich entdeckte das Fließende des Vinyasa Yoga und praktizierte diesen Stil über viele Jahre sehr intensiv.' },
              { delay: 0.2, text: 'Heute unterrichte ich vor allem intuitives Yoga – angepasst an den Moment, die Menschen im Raum und das Gefühl, das gerade da ist.' },
              { delay: 0.25, text: 'Mir ist wichtig, dass du dich in der Stunde wohlfühlst: dich forderst, ohne dich zu überfordern, den Moment genießen kannst und Freude erlebst. Am Ende darfst du entspannt, gestärkt und mit einem Gefühl von Frieden nach Hause gehen.' },
            ].map(({ delay, text }, idx) => (
              <motion.p key={idx} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay }}>
                {text}
              </motion.p>
            ))}

            {/* Abschlussblock */}
            <motion.div
              className="bg-iris-sand/50 rounded-2xl px-7 py-6 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p>Dein Yoga-Weg ist genau wie du – ganz individuell und einzigartig. Und gleichzeitig doch auch ähnlich.</p>
              <p>Individuell deshalb, weil jeder von uns seine eigenen Voraussetzungen, Vorlieben und Herausforderungen mitbringt. Und doch sind unsere Wege im Yoga auch verbunden – denn am Ende suchen wir alle auf unsere Weise Ruhe, Entspannung und ein Stück inneren Frieden.</p>
              <p>Dafür verbinde ich verschiedene Yogastile miteinander, biete Varianten der Asanas für unterschiedliche Bedürfnisse an und lade dich durch Worte und Inspiration dazu ein, Körper und Gedanken achtsam wahrzunehmen.</p>
            </motion.div>

          </div>
        </main>
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
            Meine Philosophie
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: 'Von Herz zu Herz',
                content: 'Meine Yogastunden entstehen aus dem Moment heraus. Ich unterrichte nicht nach starren Plänen, sondern spüre, was gerade gebraucht wird – im Raum, im Körper, im Herzen. Jeder Mensch bringt etwas Einzigartiges mit, und genau das darf in meinen Stunden seinen Platz finden.',
              },
              {
                title: 'Vielfalt statt Schubladen',
                content: 'Ich folge keinem bestimmten Stil dogmatisch. Stattdessen verbinde ich Elemente aus Hatha-, Vinyasa- und Ashtanga-Yoga – je nachdem, was sich im Moment stimmig anfühlt. Durch verschiedene Varianten der Asanas gehe ich auf unterschiedliche Schwierigkeitsgrade ein, um jeden genau dort abzuholen, wo er an diesem Tag gerade steht.',
              },
              {
                title: 'Asana erleben – ohne Druck',
                content: 'Yoga ist für mich kein klassisches Workout – auch wenn es manchmal durchaus warm und anstrengend werden kann. 😉 Es geht nicht um die perfekte Haltung, sondern um das Spüren, Atmen und Dasein im Jetzt. Meine Anleitungen laden dich ein, deinen Körper liebevoll zu erkunden – ohne Leistungsdruck, dafür mit viel Achtsamkeit.',
              },
              {
                title: 'Raum für Rückverbindung',
                content: 'Im Alltag verlieren wir oft den Kontakt zu uns selbst. Meine Stunden sind eine Einladung, wieder zurück in die eigene Mitte zu finden. Mit sanften Impulsen, bewussten Atemzügen und Momenten der Stille entsteht Raum für Rückverbindung – zu dir selbst und zum Frieden in dir.',
              },
            ].map(({ title, content }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <p><strong>{title}:</strong> {content}</p>
              </motion.div>
            ))}
          </div>
        </main>
      </section>

      <TimelineSection />
    </>
  );
}