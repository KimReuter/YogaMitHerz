'use client';

import { motion } from 'framer-motion';
import WaveDivider from '../components/WaveDivider';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';

const styleInfluences = [
  { name: 'Hatha', desc: 'ruhig, achtsam, ausgleichend' },
  { name: 'Vinyasa', desc: 'fließend, kraftvoll, lebendig' },
  { name: 'Ashtanga', desc: 'strukturiert, klar, zentrierend' },
];

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
    image: '/meineKurseV.jpg',
    imageRight: true,
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
    image: '/meineKurseVI.jpg',
    imageRight: false,
  },
];

export default function YogaPage() {
  return (
    <main className="bg-iris-golden text-iris-charcoal">

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden mb-[-4px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/meineKurseII.jpg')" }}
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
              'Yoga neu oder einfach mal anders entdecken wollen.',
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

          {/* Stil-Karten */}
          <FadeIn delay={0.45}>
            <div className="mt-10">
              <span className="block text-sm opacity-60 text-center mb-5">Meine Praxis ist inspiriert von:</span>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                {styleInfluences.map(({ name, desc }, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex flex-col items-center text-center gap-1.5 bg-iris-terracotta/10 rounded-2xl px-8 py-5 min-w-[160px]"
                  >
                    <span className="font-semibold text-iris-terracotta text-base">{name}</span>
                    <span className="text-sm opacity-70 leading-snug">{desc}</span>
                  </motion.div>
                ))}
              </div>
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
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

              {/* Text-Spalte */}
              <div className={`flex flex-col justify-center order-1 ${course.imageRight ? 'md:order-1' : 'md:order-2'}`}>

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
                  <blockquote className="mt-10 flex items-center gap-4 bg-iris-terracotta/10 rounded-2xl px-6 py-5">
                    <span className="text-2xl flex-shrink-0">💛</span>
                    <p className="italic text-iris-terracotta font-medium leading-relaxed">
                      {course.motto}
                    </p>
                  </blockquote>
                </FadeIn>
              </div>

              {/* Bild-Spalte */}
              <FadeIn
                direction={course.imageRight ? 'right' : 'left'}
                delay={0.15}
                className={`order-2 ${course.imageRight ? 'md:order-2' : 'md:order-1'}`}
              >
                <div className="h-64 md:h-full md:min-h-[400px] overflow-hidden rounded-3xl shadow-xl">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeIn>

            </div>
          </section>

          {/* Wave zwischen Kursen – nur nicht nach dem letzten */}
          {idx < courses.length - 1 && (
            <div className={`${course.waveContainerBg} mb-[-2px]`}>
              <WaveDivider fill={course.waveFill} />
            </div>
          )}
        </div>
      ))}

      {/* Wave: Golden → Sand */}
      <div className="bg-iris-golden mb-[-2px]">
        <WaveDivider fill="#FFBD59" />
      </div>

      {/* Preise */}
      <section className="py-24 px-6 bg-iris-sand mb-[-2px]">
        <div className="max-w-lg mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-iris-terracotta mb-4">
              Preise
            </h2>
            <p className="text-lg opacity-70 mb-12">
              Melde dich gerne kurz bei mir, damit ich weiß, dass du kommst. 🙏
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <motion.div
                className="bg-iris-golden/60 flex flex-col items-center gap-3 px-8 py-10 shadow-md"
                style={{ borderRadius: '60% 40% 54% 46% / 52% 44% 56% 48%' }}
                whileHover={{ scale: 1.03, y: -4, boxShadow: '0 20px 48px rgba(0,0,0,0.12)' }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <span className="text-4xl">🧘</span>
                <h3 className="text-xl font-semibold text-iris-terracotta">Einzelstunde</h3>
                <p className="text-4xl font-bold text-iris-terracotta">14 €</p>
                <p className="text-sm opacity-60">pro Einheit</p>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <motion.div
                className="bg-iris-golden/60 flex flex-col items-center gap-3 px-8 py-10 shadow-md"
                style={{ borderRadius: '44% 56% 46% 54% / 48% 56% 44% 52%' }}
                whileHover={{ scale: 1.03, y: -4, boxShadow: '0 20px 48px rgba(0,0,0,0.12)' }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <span className="text-4xl">🎟️</span>
                <h3 className="text-xl font-semibold text-iris-terracotta">10er-Karte</h3>
                <p className="text-4xl font-bold text-iris-terracotta">120 €</p>
                <p className="text-sm opacity-60">gültig 12 Wochen</p>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 px-6 mb-[-2px]">
        {/* Hintergrundbild */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/meineKurseKontakt.jpg')" }}
        />
        {/* Overlay für Lesbarkeit */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Wave oben → von Sand-Sektion kommend */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <WaveDivider fill="#FFBD59" flip />
        </div>

        {/* Wave nach unten → Footer (Golden) */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <WaveDivider fill="#C4A675" />
        </div>

        <FadeIn>
          <div className="relative z-10 max-w-xl mx-auto text-center space-y-6 pt-16 pb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-iris-golden">
              Lust, es auszuprobieren?
            </h2>
            <p className="text-lg leading-relaxed text-white/90">
              Komm einfach vorbei – du brauchst keine Vorkenntnisse und musst dich nicht anmelden.
              Schreib mir gerne, wenn du noch Fragen hast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex-1"><Button className="w-full" href="https://wa.me/491749735048" target="_blank" rel="noopener noreferrer">
                Schreib mir auf WhatsApp
              </Button></div>
              <div className="flex-1"><Button className="w-full" variant="outline" href="/contact">
                Kontakt aufnehmen
              </Button></div>
            </div>
          </div>
        </FadeIn>
      </section>

    </main>
  );
}
