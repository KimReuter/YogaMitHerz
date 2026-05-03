'use client';

import { motion } from 'framer-motion';
import WaveDivider from '../components/WaveDivider';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';

const styleInfluences = ['Hatha', 'Vinyasa', 'Ashtanga'];

const courses = [
  {
    time: 'Donnerstag · 18:30 Uhr',
    duration: '90 Minuten',
    title: 'Kraftvoll & fordernd',
    mood: 'Energie · Fokus · Stärke',
    paragraphs: [
      'In dieser 90-minütigen Praxis kann es schon mal ganz schön warm werden. 😉 Wir beginnen sanft mit Entspannung und Mobilisierung, bevor wir Kraft, Fokus und Achtsamkeit miteinander verbinden.',
      'Die Übungen fordern dich, ohne zu überfordern, und schenken dir am Ende das kleine, aber kostbare Gefühl: „Das habe ich heute geschafft!" Ich passe die Intensität an die Gruppe an – mal intensiver, mal ruhiger, mal variiert – sodass du deinen eigenen Rhythmus finden kannst.',
      'Zum Abschluss wartet eine ausgiebige Shavasana, in der Körper und Geist alles Gelernte integrieren dürfen. Am Ende gehst du zufrieden, glücklich – und mit einem Lächeln im Gesicht – nach Hause.',
    ],
    motto: 'Erlaube dir, zu leuchten – und nimm dieses Strahlen mit in deinen Alltag.',
    bg: 'bg-iris-sand',
    waveFill: '#C4A675',
    waveContainerBg: 'bg-iris-sand',
  },
  {
    time: 'Donnerstag · 20:15 Uhr',
    duration: '90 Minuten',
    title: 'Entspannend & beruhigend',
    mood: 'Ankommen · Loslassen · Ruhe',
    paragraphs: [
      'Diese Praxis ist eine Einladung zum Ankommen und Loslassen. Wir bewegen uns achtsam, spüren den Körper und nehmen das wahr, was gerade ist.',
      'Die Asanas beginnen leicht kräftigend, fließen dann in sanfte, passive und dehnende Sequenzen über. Auch hier rundet eine ausgiebige Shavasana die Stunde ab, sodass du Körper und Geist tief entspannen kannst.',
    ],
    motto: 'Gönn dir diesen Moment für dich – loslassen, einlassen, ankommen.',
    bg: 'bg-iris-golden',
    waveFill: '#FFBD59',
    waveContainerBg: 'bg-iris-golden',
  },
];

export default function YogaPage() {
  return (
    <main className="bg-iris-golden text-iris-charcoal">

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden mb-[-2px]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/yoga-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        />
        <div className="relative z-10 flex items-center justify-center h-full bg-black/40">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-iris-golden text-5xl md:text-6xl font-bold text-center drop-shadow-lg px-6"
          >
            Meine Kurse
          </motion.h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <WaveDivider fill="#C4A675" />
        </div>
      </section>

      {/* Für alle, die... */}
      <section className="py-24 px-6 bg-iris-golden mb-[-2px]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-iris-terracotta mb-12">
              Für alle, die…
            </h2>
          </FadeIn>

          <ul className="space-y-5 text-left mb-12 max-w-fit mx-auto">
            {[
              'Yoga neu entdecken oder wieder zu sich selbst zurückfinden möchten.',
              'den eigenen Körper achtsam spüren und bewegen wollen.',
              'eine Balance aus Ruhe, Kraft und Entspannung suchen.',
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <li className="flex items-start gap-4">
                  <span className="mt-2 flex-shrink-0 w-3 h-3 rounded-full bg-iris-terracotta ring-4 ring-iris-terracotta/20" />
                  <span className="text-lg leading-relaxed">… {item}</span>
                </li>
              </FadeIn>
            ))}
          </ul>

          <FadeIn delay={0.35}>
            <p className="text-lg md:text-xl italic text-iris-terracotta font-medium leading-relaxed">
              Alles, was du brauchst, bist du selbst – und bequeme Kleidung.
            </p>
          </FadeIn>

          {/* Stil-Badges */}
          <FadeIn delay={0.45}>
            <div className="mt-10 flex flex-col items-center gap-3">
              <span className="text-sm opacity-60">Meine Praxis ist inspiriert von:</span>
              {styleInfluences.map((style) => (
                <span
                  key={style}
                  className="w-32 text-center py-1.5 rounded-full text-sm bg-iris-terracotta/10 text-iris-terracotta"
                >
                  {style}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Wave: Golden → Sand */}
      <div className="bg-iris-golden mb-[-2px]">
        <WaveDivider fill="#FFBD59" />
      </div>

      {/* Kurse */}
      {courses.map((course, idx) => (
        <div key={idx}>
          <section className={`py-24 px-6 mb-[-2px] ${course.bg}`}>
            <div className="max-w-3xl mx-auto">

              {/* Zeit & Dauer */}
              <FadeIn>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-iris-terracotta text-white text-sm font-medium">
                    {course.time}
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-iris-terracotta/10 text-iris-terracotta text-sm">
                    {course.duration}
                  </span>
                </div>
              </FadeIn>

              {/* Titel */}
              <FadeIn delay={0.05}>
                <h2 className="text-3xl md:text-4xl font-bold text-iris-terracotta mb-2">
                  {course.title}
                </h2>
                <p className="text-sm tracking-widest uppercase opacity-60 mb-10">
                  {course.mood}
                </p>
              </FadeIn>

              {/* Beschreibung */}
              <div className="space-y-5 text-[1.05rem] leading-[1.85] text-justify">
                {course.paragraphs.map((para, i) => (
                  <FadeIn key={i} delay={0.1 + i * 0.08}>
                    <p>{para}</p>
                  </FadeIn>
                ))}
              </div>

              {/* Motto */}
              <FadeIn delay={0.3}>
                <blockquote className="mt-10 flex items-start gap-4 bg-iris-terracotta/10 rounded-2xl px-6 py-5">
                  <span className="text-2xl flex-shrink-0">💛</span>
                  <p className="italic text-iris-terracotta font-medium leading-relaxed">
                    {course.motto}
                  </p>
                </blockquote>
              </FadeIn>
            </div>
          </section>

          {/* Wave zwischen Kursen oder vor CTA */}
          <div className={`${course.waveContainerBg} mb-[-2px]`}>
            <WaveDivider fill={course.waveFill} />
          </div>
        </div>
      ))}

      {/* CTA */}
      <section className="py-24 px-6 bg-iris-sand">
        <FadeIn>
          <div className="max-w-xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-iris-terracotta">
              Lust, es auszuprobieren?
            </h2>
            <p className="text-lg leading-relaxed">
              Komm einfach vorbei – du brauchst keine Vorkenntnisse und musst dich nicht anmelden.
              Schreib mir gerne, wenn du noch Fragen hast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex-1"><Button className="w-full" href="https://wa.me/491749735048" target="_blank" rel="noopener noreferrer">
                Schreib mir auf WhatsApp
              </Button></div>
              <div className="flex-1"><Button className="w-full" variant="outline" href="/contact">
                Zum Kontaktformular
              </Button></div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Wave: Sand → Footer */}
      <div className="bg-iris-sand">
        <WaveDivider fill="#C4A675" />
      </div>

    </main>
  );
}
