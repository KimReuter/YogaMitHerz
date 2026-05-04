'use client';

import React from 'react';
import { motion } from 'framer-motion';
import WaveDivider from '@/components/WaveDivider';


export default function AboutPage() {
  return (
    <>
      {/* Hero mit Parallax */}
      <section className="relative h-[60vh] overflow-hidden mb-[-4px]">
        <div
          className="absolute inset-0 bg-center bg-cover"
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
            className="text-iris-golden text-5xl md:text-6xl font-bold text-center drop-shadow-lg"
          >
            Mein Weg zum Yoga
          </motion.h1>
        </div>
        {/* Wave: Hero → Golden */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <WaveDivider fill="#C4A675" />
        </div>
      </section>

      {/* Abschnitt: Mein Weg zum Yoga */}
      <section className="bg-iris-golden text-iris-charcoal mb-[-2px]">
        <div className="px-6 py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>
            <motion.h2
              className="text-3xl font-semibold mb-8 text-iris-terracotta"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Mein Weg zum Yoga
            </motion.h2>

            <div className="space-y-5 text-[1.05rem] leading-[1.85] text-justify">
              {[
                { delay: 0, text: 'Mein Weg zum Yoga begann vor über zehn Jahren – anfangs war ich eher skeptisch. Über eine liebe Freundin lernte ich den Ashtanga-Stil kennen, der mit seinen fließenden und fordernden Abläufen damals genau das Richtige für mich war. Mein Geist kam zur Ruhe, und am Ende jeder Stunde spürte ich eine tiefe Entspannung.' },
                { delay: 0.08, text: 'Mit der Zeit fühlte ich mich kraftvoller, beweglicher und vor allem ausgeglichener. Yoga wurde immer mehr zu einem festen Bestandteil meines Lebens, und ich entdeckte weitere Stile wie Hatha-, Vinyasa- und Yin-Yoga.' },
                { delay: 0.16, text: '2017 begann ich, inspiriert durch eine Freundin, meine Ausbildung zur Kinderyogalehrerin. Sie erfüllte mich mit viel Freude und dem Gefühl, genau das Richtige zu tun – und weckte in mir den Wunsch, Yoga auch an Erwachsene weiterzugeben. So folgte 2018 meine Hatha-Yogalehrer-Ausbildung, die ich zweieinhalb Jahre später abschloss.' },
                { delay: 0.24, text: 'Was mit einer kleinen Gruppe im Freundeskreis begann, wuchs mit der Zeit weiter – vor allem durch Empfehlungen, wofür ich sehr dankbar bin.' },
                { delay: 0.32, text: 'Heute freue ich mich jedes Mal auf meine Stunden und die Menschen, die ich auf der Matte begleiten darf.' },
              ].map(({ delay, text }, idx) => (
                <motion.p key={idx} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay }}>
                  {text}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Bild */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="overflow-hidden rounded-3xl shadow-xl aspect-[3/4] w-full"
          >
            <img
              src="/uebermich_meinweg.jpg"
              alt="Iris auf ihrem Yoga-Weg"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </section>

      {/* Wellen-Übergang golden → sand */}
      <div className="bg-iris-golden mb-[-2px]">
        <WaveDivider fill="#FFBD59" />
      </div>

      {/* Abschlussblock */}
      <section className="bg-iris-sand text-iris-charcoal mb-[-2px]">
        <div className="max-w-3xl mx-auto px-6 py-16 space-y-6 text-[1.05rem] leading-[1.85] text-justify">
          {[
            'Dein Yoga-Weg ist genau wie du – ganz individuell und einzigartig. Und gleichzeitig doch auch ähnlich.',
            'Individuell deshalb, weil jeder von uns seine eigenen Voraussetzungen, Vorlieben und Herausforderungen mitbringt. Und doch sind unsere Wege im Yoga auch verbunden – denn am Ende suchen wir alle auf unsere Weise Ruhe, Entspannung und ein Stück inneren Frieden.',
            'Dafür verbinde ich verschiedene Yogastile miteinander, biete Varianten der Asanas für unterschiedliche Bedürfnisse an und lade dich durch Worte und Inspiration dazu ein, Körper und Gedanken achtsam wahrzunehmen.',
          ].map((text, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Philosophie mit Hintergrundbild */}
      <section className="relative overflow-hidden mb-[-2px]">
        {/* Hintergrundbild */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/meinePhilosophie.jpg')" }}
        />
        {/* Dunkler Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Welle oben: Sand fließt von oben ins Bild */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <WaveDivider fill="#FFBD59" flip />
        </div>

        {/* Welle unten: fließt aus dem Bild zu Sand */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <WaveDivider fill="#FFBD59" />
        </div>

        {/* Inhalt */}
        <div className="relative z-20 px-6 pt-28 pb-28 max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-semibold text-iris-sand text-center mb-12"
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
                shape: '60% 40% 44% 56% / 54% 42% 58% 46%',
              },
              {
                title: 'Vielfalt statt Schubladen',
                content: 'Ich folge keinem bestimmten Stil dogmatisch. Stattdessen verbinde ich Elemente aus Hatha-, Vinyasa- und Ashtanga-Yoga – je nachdem, was sich im Moment stimmig anfühlt. Durch verschiedene Varianten der Asanas gehe ich auf unterschiedliche Schwierigkeitsgrade ein, um jeden genau dort abzuholen, wo er an diesem Tag gerade steht.',
                shape: '42% 58% 60% 40% / 46% 42% 58% 54%',
              },
              {
                title: 'Asana erleben – ohne Druck',
                content: <>Yoga ist für mich kein klassisches Workout – auch wenn es manchmal durchaus warm und anstrengend werden kann. 😉<br />Es geht nicht um die perfekte Haltung, sondern um das Spüren, Atmen und Dasein im Jetzt. Meine Anleitungen laden dich ein, deinen Körper liebevoll zu erkunden – ohne Leistungsdruck, dafür mit viel Achtsamkeit.</>,
                shape: '56% 44% 40% 60% / 60% 56% 44% 40%',
              },
              {
                title: 'Raum für Rückverbindung',
                content: 'Im Alltag verlieren wir oft den Kontakt zu uns selbst. Meine Stunden sind eine Einladung, wieder zurück in die eigene Mitte zu finden. Mit sanften Impulsen, bewussten Atemzügen und Momenten der Stille entsteht Raum für Rückverbindung – zu dir selbst und zum Frieden in dir.',
                shape: '44% 56% 56% 44% / 42% 60% 40% 58%',
              },
            ].map(({ title, content, shape }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <motion.div
                  className="bg-iris-sand/85 overflow-hidden flex flex-col justify-center cursor-default px-10 py-14"
                  style={{ borderRadius: shape }}
                  whileHover={{ scale: 1.03, y: -6, boxShadow: '0 28px 64px rgba(0,0,0,0.2)' }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <h3 className="text-2xl font-semibold text-iris-terracotta mb-4 text-center">{title}</h3>
                  <p className="text-base leading-relaxed text-justify text-iris-charcoal">{content}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Namaste Bild */}
      <section className="relative overflow-hidden mb-[-2px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/uebermich-namaste.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Welle oben: von Sand kommend */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <WaveDivider fill="#FFBD59" flip />
        </div>

        {/* Welle unten: zu Golden (Footer) */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <WaveDivider fill="#C4A675" />
        </div>

        <div className="h-[60vh] md:h-[70vh]" />
      </section>
    </>
  );
}