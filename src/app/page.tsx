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
      {/* Hero mit Parallax-Bild */}
      <section
        className="relative min-h-screen bg-fixed bg-center bg-cover flex flex-col justify-center items-center text-center px-6"
        style={{ backgroundImage: "url('/Iris_Hero.jpg')" }}
      >
        {/* Dunkler Overlay für Lesbarkeit des Headers */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Wave: Hero → Golden */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <WaveDivider fill="#D69A3B" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 bg-iris-golden/90 backdrop-blur-sm max-w-2xl w-full flex flex-col gap-6 shadow-xl overflow-hidden"
          style={{ borderRadius: '52% 48% 48% 52% / 50% 46% 54% 50%', padding: '4.5rem 3.5rem' }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold tracking-tight text-iris-terracotta"
          >
            Einlassen. Loslassen. Ankommen.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl"
          >
            Entdecke Yoga von Herzen – ein Raum für dich, ganz gleich mit welcher Erfahrung du kommst. <br />
            Komm bei dir an, atme durch und nimm dir Zeit nur für dich.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            href="/yoga"
            className="self-center inline-flex items-center justify-center px-10 py-3 bg-iris-terracotta hover:bg-iris-terracotta/80 text-white hover:text-white rounded-full text-lg font-medium transition shadow-md"
          >
            Zu meinen Kursen
          </motion.a>
        </motion.div>
      </section>

      {/* Begrüßung & Philosophie (2-Spalten-Layout) */}
      <section className="py-28 px-6 bg-iris-golden">
        <div className="max-w-6xl mx-auto md:grid grid-cols-2 items-center gap-16">
          <FadeIn direction="left">
            <img
              src="/iris-portrait.jpg"
              alt="Iris Portrait"
              className="relative z-[2] rounded-full w-64 h-64 object-cover mx-auto border-4 border-iris-moss shadow-lg"
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
              <div className="relative mt-6 pl-12 border-l-2 border-iris-terracotta/40">
                <span
                  aria-hidden
                  className="absolute -top-4 left-3 text-6xl leading-none text-iris-terracotta/25 font-serif select-none"
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
      <section className="py-24 px-6 bg-iris-golden text-center">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-iris-terracotta mb-10">
              Was ich dir anbieten möchte
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FadeIn delay={0}>
              <div className="relative z-[2] bg-iris-moss/20 p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-500 ease-in-out h-full">
                <div className="text-4xl mb-4">💗</div>
                <h3 className="text-3xl font-semibold mb-2">Yoga mit Herz</h3>
                <p>Authentisch, liebevoll und ganz nah am Leben. Kein Leistungsdruck, nur du mit dir.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="relative z-[2] bg-iris-moss/20 p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-500 ease-in-out h-full">
                <div className="text-4xl mb-4">🌙</div>
                <h3 className="text-3xl font-semibold mb-2">Raum für Ruhe</h3>
                <p>Entspannung, Meditation und Atem. Momente, in denen du auftanken darfst.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="relative z-[2] bg-iris-moss/20 p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-500 ease-in-out h-full">
                <div className="text-4xl mb-4">🌀</div>
                <h3 className="text-3xl font-semibold mb-2">Bewegung in deinem Rhythmus</h3>
                <p>Du musst nichts beweisen. <br />
                Du darfst einfach sein – und dich bewegen, <br />
                wie es dir guttut.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Energiearbeit-Section: vorübergehend ausgeblendet – siehe /energy/page.tsx */}

      {/* Feedback + Erste Stunde nebeneinander */}
      <section className="py-28 px-6 bg-iris-golden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Feedback */}
          <FadeIn direction="left" className="flex flex-col justify-start h-full">
            <FeedbackSection />
          </FadeIn>

          {/* Erste Stunde */}
          <FadeIn direction="right" delay={0.15} className="flex flex-col justify-start h-full space-y-6 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-iris-terracotta">
              Vielleicht hast du Lust, Yoga mit mir auszuprobieren?
            </h2>
            <p className="text-lg">
              Du bist herzlich willkommen – genau so, wie du bist.
            </p>
            <Button href="/yoga">Entdecke Yoga mit mir</Button>
          </FadeIn>
        </div>
      </section>

      {/* Galerie */}
      <GalleryCarousel />

      {/* Wave: Golden → Sand */}
      <div className="bg-iris-golden">
        <WaveDivider fill="#EDD59E" />
      </div>

      {/* Let's Connect */}
      <section className="py-28 px-6 bg-iris-sand text-iris-charcoal">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Bild */}
          <FadeIn direction="left">
            <img
              src="/iris-portrait.jpg"
              alt="Iris Portrait"
              className="relative z-[2] w-full rounded-2xl shadow-lg object-cover"
            />
          </FadeIn>

          {/* Textbereich */}
          <FadeIn direction="right" delay={0.15} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-iris-terracotta">
              Ein Moment für dich – und für mich
            </h2>
            <p className="text-lg leading-relaxed">
              Schreib mir, wenn du Fragen, Lust auf eine Yogastunde oder einfach ein kleines „Hallo" hast. Ich freue mich, von dir zu lesen – du bist jederzeit willkommen!
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button href="https://wa.me/4917662468814" target="_blank" rel="noopener noreferrer">
                Schreib mir auf WhatsApp
              </Button>
              <Button variant="outline" href="https://www.instagram.com/iriswallenaar/" target="_blank" rel="noopener noreferrer">
                Folge mir auf Instagram
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Wave: Sand → Footer (Golden) */}
      <div className="bg-iris-sand">
        <WaveDivider fill="#D69A3B" />
      </div>
    </main>
  );
}