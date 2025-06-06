'use client';

import { motion } from 'framer-motion';
import FeedbackSection from './components/FeedbackSection';
import GalleryCarousel from './components/GalleryCarousel';

export default function HomePage() {
  return (
    <main className="bg-iris-golden text-iris-charcoal">
      {/* Hero mit Parallax-Bild */}
      <section
        className="min-h-screen bg-fixed bg-center bg-cover flex flex-col justify-center items-center text-center px-6"
        style={{ backgroundImage: "url('/Iris_Hero.jpg')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-iris-golden/90 backdrop-blur-sm p-8 rounded-xl max-w-2xl w-full flex flex-col gap-6 shadow-xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-iris-forest"
          >
            Yoga mit Herz, Humor & Tiefe
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl"
          >
            Entdecke herzgeleiteten Yoga – achtsam, frei und verbunden. Für Frauen, Mamas, Menschen mit Seele.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            href="/timetable"
            className="inline-block px-6 py-3 bg-iris-terracotta hover:bg-iris-clay text-white rounded-full text-lg font-medium transition shadow-md"
          >
            Zum Stundenplan
          </motion.a>
        </motion.div>
      </section>

      {/* Begrüßung & Philosophie (2-Spalten-Layout) */}
      <section className="py-20 px-6 bg-iris-golden">
        <div className="max-w-6xl mx-auto md:grid grid-cols-2 items-center gap-10">
          <img
            src="/iris-portrait.jpg"
            alt="Iris Portrait"
            className="rounded-full w-64 h-64 object-cover mx-auto border-4 border-iris-moss shadow-lg"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-iris-forest">
              Herzlich willkommen
            </h2>
            <p className="text-lg md:text-xl mb-4">
              Ich bin Iris – und Yoga ist für mich kein Workout, sondern ein Weg nach innen. Ein Zuhause für Körper, Herz & Seele. Mit Humor, Tiefe und echter Verbindung.
            </p>
            <p className="italic text-iris-terracotta font-medium">
              „Sei du selbst. Alles andere ist Nebensache.“
            </p>
          </div>
        </div>
      </section>

      {/* Was dich erwartet */}
      <section className="py-16 px-6 bg-iris-golden text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-iris-forest">
            Was dich erwartet
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-iris-moss/20 p-6 rounded-xl shadow-md hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">💗</div>
              <h3 className="text-xl font-semibold mb-2">Yoga mit Herz</h3>
              <p>Authentisch, liebevoll und ganz nah am Leben. Kein Leistungsdruck, nur du mit dir.</p>
            </div>

            <div className="bg-iris-moss/20 p-6 rounded-xl shadow-md hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-xl font-semibold mb-2">Raum für Ruhe</h3>
              <p>Entspannung, Meditation und Atem. Momente, in denen du auftanken darfst.</p>
            </div>

            <div className="bg-iris-moss/20 p-6 rounded-xl shadow-md hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">🌀</div>
              <h3 className="text-xl font-semibold mb-2">Fließen statt Funktionieren</h3>
              <p>Du musst nichts beweisen. Du darfst einfach sein – und dich bewegen, wie es dir guttut.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Energiearbeit & Frequenzheilung */}
      <section
        className="min-h-[70vh] bg-fixed bg-center bg-cover flex items-center justify-center text-center px-6"
        style={{ backgroundImage: "url('/reiki-placeholder.jpg')" }}
      >
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl max-w-4xl shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-iris-forest">
            Energiearbeit & Frequenzheilung
          </h2>
          <p className="text-lg mb-6">
            Neben Yoga biete ich auch sanfte, tiefgehende Heilarbeit auf energetischer Ebene: Reiki-Sitzungen zur Entspannung & Aktivierung der Selbstheilung, sowie Frequenzbehandlungen mit dem Healy.
          </p>
          <a
            href="/energy"
            className="inline-block bg-iris-terracotta hover:bg-iris-clay text-white px-6 py-3 rounded-full text-lg font-medium transition"
          >
            Mehr über Energiearbeit
          </a>
        </div>
      </section>

      {/* Feedback + Erste Stunde nebeneinander */}
      <section className="py-20 px-6 bg-iris-golden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Feedback (umhüllt, damit gleiche Höhe) */}
          <div className="flex flex-col justify-start h-full">
            <FeedbackSection />
          </div>

          {/* Erste Stunde */}
          <div className="flex flex-col justify-start h-full space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-iris-forest">
              Bereit für deine erste Stunde?
            </h2>
            <p className="text-lg">
              Ob Anfängerin oder erfahrene Yogini – bei mir bist du willkommen, genau so wie du bist.
            </p>
            <a
              href="/timetable"
              className="inline-flex items-center justify-center bg-iris-forest hover:bg-iris-charcoal text-white px-4 py-2 rounded-full text-base font-medium transition min-w-[180px]"
            >
              Zum Stundenplan
            </a>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <GalleryCarousel />

      {/* Let's Connect */}
      <section className="py-20 px-6 bg-iris-sand text-iris-charcoal">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Bild */}
          <div>
            <img
              src="/iris-portrait.jpg"
              alt="Iris Portrait"
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* Textbereich */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-iris-forest">
              Lass uns verbinden 💌
            </h2>
            <p className="text-lg leading-relaxed">
              Du hast eine Frage zu den Kursen, möchtest dich anmelden oder einfach mal „Hallo“ sagen?
              Ich freue mich, von dir zu hören – ganz gleich, ob du schon Yoga-Erfahrung hast oder einfach neugierig bist.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="/contact"
                className="px-6 py-3 bg-iris-terracotta hover:bg-iris-clay text-white rounded-full font-medium transition"
              >
                Zum Kontaktformular
              </a>
              <a
                href="https://www.instagram.com/deinprofil" // ersetzt durch echten Link
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-iris-terracotta text-iris-terracotta hover:bg-iris-terracotta hover:text-white rounded-full font-medium transition"
              >
                Folge mir auf Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}