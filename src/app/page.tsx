'use client';

import { motion } from 'framer-motion';
import FeedbackSection from './components/FeedbackSection';

export default function HomePage() {
  return (
    <>
      {/* Hero mit Parallax-Bild */}
      <section
        className="min-h-screen bg-fixed bg-center bg-cover flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage: `url('/hero-placeholder.jpg')`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 dark:bg-black/50 backdrop-blur-md p-8 rounded-xl max-w-xl flex flex-col gap-6 shadow-xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Yoga mit Herz, Humor & Tiefe
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-200"
          >
            Entdecke herzgeleiteten Yoga – achtsam, frei und verbunden. Für Frauen, Mamas, Menschen mit Seele.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            href="/timetable"
            className="inline-block px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-lg font-medium transition"
          >
            Zum Stundenplan
          </motion.a>
        </motion.div>
      </section>

      {/* Begrüßung & Philosophie separat */}
      <section className="py-16 px-6 flex flex-col items-center text-center bg-white dark:bg-gray-900">
        <div className="max-w-2xl">
          <img
            src="/iris-portrait.jpg"
            alt="Iris Portrait"
            className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-md"
          />

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Herzlich willkommen
          </h2>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
            Ich bin Iris – und Yoga ist für mich kein Workout, sondern ein Weg nach innen.
            Ein Zuhause für Körper, Herz & Seele. Mit Humor, Tiefe und echter Verbindung.
          </p>

          <p className="italic text-pink-600 dark:text-pink-400 font-medium">
            „Sei du selbst. Alles andere ist Nebensache.“
          </p>
        </div>
      </section>

      {/* Was dich erwartet */}
      <section className="bg-pink-50 dark:bg-gray-800 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-pink-600 dark:text-pink-400">
            Was dich erwartet
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💗</div>
              <h3 className="text-xl font-semibold mb-2">Yoga mit Herz</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Authentisch, liebevoll und ganz nah am Leben. Kein Leistungsdruck, nur du mit dir.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-xl font-semibold mb-2">Raum für Ruhe</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Entspannung, Meditation und Atem. Momente, in denen du auftanken darfst.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🌀</div>
              <h3 className="text-xl font-semibold mb-2">Fließen statt Funktionieren</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Du musst nichts beweisen. Du darfst einfach sein – und dich bewegen, wie es dir guttut.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <FeedbackSection />

      {/* Jetzt ausprobieren Block */}
      <section className="bg-pink-100 dark:bg-pink-900 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Bereit für deine erste Stunde?</h2>
        <p className="text-lg mb-6">Ob Anfängerin oder erfahrene Yogini – bei mir bist du willkommen, genau so wie du bist.</p>
        <a
          href="/timetable"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-lg font-medium transition"
        >
          Zum Stundenplan
        </a>
      </section>
    </>
  );
}