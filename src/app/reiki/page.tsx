'use client';

import { motion } from 'framer-motion';
import WaveDivider from '../components/WaveDivider';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';

const treatmentSteps = [
  {
    emoji: '🛋️',
    title: 'Ankommen',
    text: 'Du liegst bekleidet und ganz entspannt auf einer Liege.',
    shape: '58% 42% 48% 52% / 52% 44% 56% 48%',
    delay: 0,
  },
  {
    emoji: '🤲',
    title: 'Behandlung',
    text: 'Durch das sanfte Auflegen der Hände darf die Energie frei fließen, Blockaden können sich lösen, die Selbstheilungskräfte werden aktiviert.',
    shape: '44% 56% 54% 46% / 48% 56% 44% 52%',
    delay: 0.15,
  },
  {
    emoji: '🌿',
    title: 'Entspannung',
    text: 'Viele Menschen erleben diese Zeit als tief beruhigend und wohltuend.',
    shape: '52% 48% 42% 58% / 56% 46% 54% 44%',
    delay: 0.3,
  },
];

export default function ReikiPage() {
  return (
    <main className="bg-iris-golden text-iris-charcoal">

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden mb-[-4px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/reiki-hero.jpg')" }}
        />
        <div className="relative z-10 flex items-center justify-center h-full bg-black/40">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-iris-golden text-5xl md:text-6xl font-bold text-center drop-shadow-lg px-6"
          >
            Reiki
          </motion.h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <WaveDivider fill="#C4A675" />
        </div>
      </section>

      {/* Einleitung */}
      <section className="py-24 px-6 bg-iris-golden mb-[-2px]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-iris-terracotta mb-6">
              Reiki – sanfte Energiearbeit für Körper und Seele
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Reiki schenkt einen Raum für tiefe Entspannung, in dem Körper und Geist zur Ruhe kommen dürfen.
              Durch achtsame Berührung und das Fließen der Energie kann ein Gefühl von Balance, Wärme und innerer Ruhe entstehen.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Wave: Golden → Sand */}
      <div className="bg-iris-golden mb-[-2px]">
        <WaveDivider fill="#FFBD59" />
      </div>

      {/* Was ist Reiki? */}
      <section className="py-24 px-6 bg-iris-sand mb-[-2px]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-iris-terracotta mb-10">
              Was ist Reiki?
            </h2>
          </FadeIn>
          <div className="space-y-5 text-[1.05rem] leading-[1.85] text-justify">
            {[
              { delay: 0, text: 'Reiki ist eine sanfte Form der Energiearbeit, die Körper, Geist und Seele dabei unterstützen kann, wieder in ihre natürliche Balance zu finden.' },
              { delay: 0.08, text: 'Der Ursprung von Reiki liegt in Japan. Anfang des 20. Jahrhunderts wurde diese Methode von Mikao Usui wiederentdeckt und weitergegeben. Seitdem wird Reiki auf der ganzen Welt praktiziert und von Mensch zu Mensch weitergegeben.' },
              { delay: 0.16, text: 'Während einer Reiki-Behandlung werden die Hände achtsam auf verschiedene Bereiche des Körpers gelegt. Die Energie darf dabei frei fließen und den Menschen in seiner Ganzheit berühren.' },
              { delay: 0.24, text: 'Viele Menschen erleben Reiki als eine tiefe Form der Entspannung. Der Atem wird ruhiger, der Körper darf loslassen und der Geist kommt zur Ruhe.' },
              { delay: 0.32, text: 'Reiki kann dabei helfen, neue Kraft zu schöpfen, innere Klarheit zu finden und wieder mehr bei sich selbst anzukommen.' },
              { delay: 0.40, text: 'Jede Behandlung ist dabei so individuell wie der Mensch, der sie empfängt.' },
            ].map(({ delay, text }, idx) => (
              <FadeIn key={idx} delay={delay}>
                <p>{text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Wie eine Behandlung abläuft */}
      <section className="relative py-24 px-6 text-center mb-[-2px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/startseite-oben-III.jpg')" }} />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-0 left-0 right-0 z-10"><WaveDivider fill="#FFBD59" flip /></div>
        <div className="absolute bottom-0 left-0 right-0 z-10"><WaveDivider fill="#FFBD59" /></div>
        <div className="relative z-10 max-w-6xl mx-auto pt-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-iris-golden mb-14">
              Wie eine Reiki-Behandlung abläuft
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {treatmentSteps.map(({ emoji, title, text, shape, delay }, idx) => (
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

      {/* CTA */}
      <section className="py-24 px-6 bg-iris-sand mb-[-2px]">
        <FadeIn delay={0.1}>
          <div className="max-w-xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-iris-terracotta">
              Magst du Reiki ausprobieren?
            </h2>
            <p className="text-lg leading-relaxed">
              Schreib mir einfach – ich freue mich, von dir zu hören.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex-1">
                <Button className="w-full" href="https://wa.me/491749735048" target="_blank" rel="noopener noreferrer">
                  Schreib mir auf WhatsApp
                </Button>
              </div>
              <div className="flex-1">
                <Button className="w-full" variant="outline" href="/contact">
                  Zum Kontaktformular
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Wave: Sand → Footer */}
      <div className="bg-iris-sand mb-[-2px]">
        <WaveDivider fill="#C4A675" />
      </div>

    </main>
  );
}
