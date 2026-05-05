'use client';

import { motion } from 'framer-motion';
import FeedbackSection from './components/FeedbackSection';
import GalleryCarousel from './components/GalleryCarousel';
import WaveDivider from './components/WaveDivider';
import FadeIn from './components/FadeIn';
import Button from './components/Button';


export default function HomePage() {
  return (
    <main className="bg-iris-golden text-iris-charcoal">
      {/* Hero mit Bild */}
      <section
        className="relative h-screen overflow-hidden bg-center bg-cover flex flex-col justify-center items-center text-center mb-[-4px]"
        style={{ backgroundImage: "url('/Iris_Hero.jpg')" }}
      >
        {/* Dunkler Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Wave: Hero → Golden */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <WaveDivider fill="#C4A675" />
        </div>

        {/* Hero Text – minimalistisch */}
        <div className="relative z-10 flex flex-col items-center text-center gap-7 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg"
          >
            Einlassen.<br />Loslassen.<br />Ankommen.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 drop-shadow"
          >
            Yoga von Herzen – ein Raum ganz für dich.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            href="/yoga"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/40 text-white text-base md:text-lg font-medium transition shadow-md"
          >
            Zu meinen Kursen
          </motion.a>
        </div>
      </section>

      {/* Begrüßung & Philosophie (2-Spalten-Layout) */}
      <section className="pt-12 pb-12 md:py-28 px-6 bg-iris-golden">
        <div className="max-w-6xl mx-auto md:grid grid-cols-2 items-center gap-16">
          <FadeIn direction="left">
            <img
              src="/iris-portrait.jpg"
              alt="Iris Portrait"
              className="relative z-[2] rounded-full w-64 h-64 object-cover mx-auto border-4 border-iris-moss shadow-lg mb-12 md:mb-0"
            />
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-iris-terracotta">
                Namasté – Das Licht in meinem Herzen grüßt das Licht in deinem Herzen
              </h2>
              <p className="text-lg md:text-xl mb-4">
                Ich bin Iris und lade dich ein, gemeinsam mit mir auf der Matte deinen ganz eigenen Weg zu dir zu entdecken. Einen Weg, der dich mit deinem Körper, deinem Inneren und deinem Atem verbindet – und dir Raum für Ruhe, Frieden und Entspannung schenkt.
              </p>
              <div className="relative mt-6 md:pl-12">
                <span
                  aria-hidden
                  className="hidden md:block absolute -top-4 left-3 text-6xl leading-none text-iris-terracotta/25 font-serif select-none"
                >
                  &ldquo;
                </span>
                <p className="italic text-iris-terracotta font-medium text-lg leading-relaxed">
                  Wenn man auf sich selbst hört, kommt alles von selbst.
                </p>
                <p className="mt-2 text-sm text-iris-terracotta/70 tracking-widest uppercase">
                  – Petri Räisänen
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Was dich erwartet */}
      <section className="pt-8 pb-12 md:py-24 px-6 bg-iris-golden text-center">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-iris-terracotta mb-14">
              Was ich dir anbieten möchte
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              {
                emoji: '💗',
                title: 'Yoga mit Herz',
                text: 'Authentisch, liebevoll und ganz nah am Leben. Kein Leistungsdruck, nur du mit dir.',
                shape: '58% 42% 48% 52% / 52% 44% 56% 48%',
                delay: 0,
              },
              {
                emoji: '🌙',
                title: 'Raum für Ruhe',
                text: 'Entspannung, Meditation und Atem. Momente, in denen du auftanken darfst.',
                shape: '44% 56% 54% 46% / 48% 56% 44% 52%',
                delay: 0.15,
              },
              {
                emoji: '🌀',
                title: 'Bewegung in deinem Rhythmus',
                text: 'Du musst nichts beweisen. Du darfst einfach sein – und dich bewegen, wie es dir guttut.',
                shape: '52% 48% 42% 58% / 56% 46% 54% 44%',
                delay: 0.3,
              },
            ].map(({ emoji, title, text, shape, delay }, idx) => (
              <FadeIn key={idx} delay={delay}>
                <motion.div
                  className="bg-iris-sand/60 overflow-hidden flex flex-col items-center justify-center cursor-default text-center px-10 py-14"
                  style={{ borderRadius: shape }}
                  whileHover={{ scale: 1.03, y: -6, boxShadow: '0 28px 64px rgba(0,0,0,0.11)' }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <div className="text-4xl mb-4">{emoji}</div>
                  <h3 className="text-2xl font-semibold text-iris-terracotta mb-3">{title}</h3>
                  <p className="text-base leading-relaxed">{text}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Energiearbeit-Section: vorübergehend ausgeblendet – siehe /energy/page.tsx */}

      {/* Kundenstimmen */}
      <section className="pt-8 pb-24 md:py-24 px-6 bg-iris-golden">
        <FadeIn>
          <FeedbackSection />
        </FadeIn>
      </section>

      {/* Wave: Golden → Sand */}
      <div className="bg-iris-golden">
        <WaveDivider fill="#FFBD59" />
      </div>

      {/* CTA */}
      <section className="py-24 px-6 bg-iris-sand text-iris-charcoal">
        <FadeIn delay={0.1}>
          <div className="max-w-xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-iris-terracotta">
              Vielleicht hast du Lust,<br className="hidden md:block" /> Yoga mit mir auszuprobieren?
            </h2>
            <p className="text-lg">
              Du bist herzlich willkommen – genau so, wie du bist.
            </p>
            <Button href="/yoga" className="px-10">Entdecke Yoga mit mir</Button>
          </div>
        </FadeIn>
      </section>

      {/* Wave: Sand → Golden */}
      <div className="bg-iris-sand">
        <WaveDivider fill="#C4A675" />
      </div>

      {/* Galerie */}
      <GalleryCarousel />

      {/* Wave: Golden → Sand */}
      <div className="bg-iris-golden">
        <WaveDivider fill="#FFBD59" />
      </div>

      {/* Let's Connect */}
      <section className="py-28 px-6 bg-iris-sand text-iris-charcoal">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Bild im asymmetrischen Blob-Rahmen */}
          <FadeIn direction="left">
            <motion.div
              className="overflow-hidden w-1/2 md:w-3/4 mx-auto aspect-[3/4] shadow-xl"
              style={{ borderRadius: '40% 60% 63% 37% / 55% 45% 40% 60%' }}
              whileHover={{ scale: 1.02, boxShadow: '0 28px 64px rgba(0,0,0,0.13)' }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <img
                src="/iris-portrait-contact.jpg"
                alt="Iris Portrait"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </FadeIn>

          {/* Textbereich */}
          <FadeIn direction="right" delay={0.15} className="space-y-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-iris-terracotta">
              Ein Moment für dich –<br />und für mich
            </h2>
            <p className="text-lg leading-relaxed">
              Schreib mir, wenn du Fragen, Lust auf eine Yogastunde oder einfach ein kleines „Hallo" hast. Ich freue mich, von dir zu lesen – du bist jederzeit willkommen!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex-1">
                <Button href="https://wa.me/491749735048" target="_blank" rel="noopener noreferrer" className="w-full">
                  Schreib mir auf WhatsApp
                </Button>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* Wave: Sand → Footer (Golden) */}
      <div className="bg-iris-sand mb-[-2px]">
        <WaveDivider fill="#C4A675" />
      </div>
    </main>
  );
}