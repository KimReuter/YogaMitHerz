'use client';
import { useState } from 'react';

import { motion } from 'framer-motion';

export default function TimetablePage() {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState<string|null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    const data = Object.fromEntries(new FormData(e.currentTarget) as any);
    const res = await fetch('/api/timetable-feedback', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (res.ok) { setSent(true); (e.currentTarget as HTMLFormElement).reset(); }
    else setErr(await res.text());
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-iris-charcoal">
      {/* Hero */}
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-iris-terracotta mb-4"
        >
          Stundenplan
        </motion.h1>
        <p className="text-lg opacity-80">
          Hier findest du meine aktuellen Yoga-Stunden.<br />
          Und vielleicht bald auch neue – je nachdem, was du dir wünschst.
        </p>
      </section>

      {/* Aktuelle Stunden */}
      <section className="mb-20">
        <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-white/80 p-6 shadow text-center"
        >
          <h3 className="text-xl font-semibold mb-2">Donnerstag</h3>
          <p className="mb-1">🌝 18:30 – 20:00 (90 Min)</p>
          <p className="mb-1">🌚 20:15 – 21:45 (90 Min)</p>
          <p className="text-sm opacity-70 mt-2">
            Beide Einheiten finden in kleiner, persönlicher Runde statt.
          </p>
        </motion.div>
        </div>
      </section>

      {/* Feedback / Wünsche */}
      <section className="bg-iris-sand rounded-2xl p-8 shadow space-y-6">
        <h3 className="text-2xl font-bold text-iris-terracotta">Dein Wunsch zählt!</h3>
        <p>
          Ich überlege, zusätzliche Kurse ins Leben zu rufen – vielleicht am Vormittag oder an einem weiteren Abend.
          <br />Sag mir, wann du dir eine Stunde wünschen würdest:
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Wie darf ich dich ansprechen?</label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 p-2"
              placeholder="Dein Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Wann wäre für dich ein guter Zeitpunkt?</label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 p-2"
              placeholder="z. B. Montagvormittag, Freitagabend …"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">E-Mail (optional, für Rückmeldung)</label>
            <input
              type="email"
              className="w-full rounded-lg border border-gray-300 p-2"
              placeholder="deine@email.de"
            />
          </div>

          <button
            type="submit"
            className="inline-block px-6 py-3 rounded-full bg-iris-terracotta text-white font-semibold hover:bg-iris-clay transition-colors"
          >
            Feedback absenden
          </button>
        </form>
      </section>
    </main>
  );
}