'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ExpandableBox from '../components/ExpandableBox';

export default function EnergyPage() {
  return (
    <main className="text-iris-charcoal bg-iris-golden">
      {/* Hero-Bild */}
      <section
        className="min-h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: `url('/reiki-hero.jpg')`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/20 backdrop-blur-lg p-8 rounded-xl shadow-xl max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-iris-forest">Energiearbeit</h1>
          <p className="text-lg">
            Spüre dich selbst – mit Reiki, Frequenzen & intuitiver Begleitung.
          </p>
        </motion.div>
      </section>

      {/* Inhalte */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <p className="text-lg mb-10">
          Energie ist überall – auch in dir. In meinen Einzelsitzungen begleite ich dich mit liebevoller Intuition,
          Reiki-Energie und dem Frequenzgerät Healy zurück in Balance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Reiki Text */}
          <ExpandableBox
            title="Reiki-Heilsitzungen ✨"
            summary={
              <>
                Sanfte Berührung, tiefe Entspannung und ein liebevoller Raum zum Loslassen: Bei einer Reiki-Sitzung darfst du einfach nur sein.
                Während ich meine Hände intuitiv auflege, kann dein System regenerieren, zur Ruhe kommen und neue Klarheit finden.
              </>
            }
            details={
              <>
                <p><strong>👐 Was ist Reiki?</strong> Eine berührungsbasierte Technik zur Aktivierung des Energieflusses.</p>
                <p><strong>📋 Ablauf:</strong> Du liegst entspannt auf einer Liege, während Iris ihre Hände an bestimmten Stellen auflegt.</p>
                <p><strong>💫 Wirkung:</strong> Mehr Ruhe, bessere Regeneration, emotionale Ausgeglichenheit.</p>
                <p><strong>👩‍👧 Zielgruppe:</strong> Erwachsene, Kinder, feinfühlige Menschen – jeder, der sich mehr innere Balance wünscht.</p>
              </>
            }
          />

          {/* Reiki Bild */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-xl overflow-hidden shadow-md h-[280px] flex justify-center items-center"
          >
            <Image
              src="/reiki-session.jpg"
              alt="Reiki Session"
              width={500}
              height={280}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </motion.div>

          {/* Healy Bild */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-xl overflow-hidden shadow-md h-[280px] flex justify-center items-center md:order-last"
          >
            <Image
              src="/healy.jpg"
              alt="Healy Frequenzgerät"
              width={500}
              height={280}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105 object-[center_30%]"
            />
          </motion.div>

          {/* Healy Text */}
          <ExpandableBox
            title="Healy Frequenzbehandlung 🎧"
            summary={
              <>
                Dein Körper spricht in Schwingungen – der Healy hört zu. Dieses kleine Frequenzwunder analysiert dein Energiefeld und
                unterstützt dich mit gezielten Schwingungen dabei, wieder in Einklang zu kommen. Für mehr Wohlbefinden, Balance
                und innere Ausrichtung – ganz individuell auf dich abgestimmt.
              </>
            }
            details={
              <>
                <p><strong>🔍 Was ist der Healy?</strong> Ein zertifiziertes Medizinprodukt, das auf Basis quantenphysikalischer Prinzipien arbeitet.</p>
                <p><strong>⚙️ Wie funktioniert das?</strong> Durch Elektroden oder Fernanwendung werden individuelle Frequenzen direkt an dein Energiefeld übertragen.</p>
                <p><strong>🌿 Anwendungsgebiete:</strong> Stress, Erschöpfung, Schmerzen, emotionale Dysbalancen – aber auch zur Förderung von Klarheit und Leichtigkeit.</p>
                <p><strong>🌈 Besonderheit:</strong> Die Frequenzen werden personalisiert analysiert – jede Anwendung ist so individuell wie du.</p>
              </>
            }
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-iris-sand py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Spürst du den Ruf?</h2>
        <p className="text-lg mb-6">Vereinbare jetzt deine persönliche Energie-Sitzung.</p>
        <a
          href="/contact"
          className="inline-block bg-iris-terracotta hover:bg-iris-clay hover:text-white text-white px-6 py-3 rounded-full text-lg font-medium transition"
        >
          Termin vereinbaren
        </a>
      </section>
    </main>
  );
}