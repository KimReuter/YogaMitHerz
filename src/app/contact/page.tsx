// /app/contact/page.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form) as any);

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSent(true);
      form.reset();
    } else {
      const msg = await res.text();
      setError(msg || 'Senden fehlgeschlagen. Bitte versuch es später erneut.');
    }
  }

  return (
    <main className="text-iris-charcoal">
      {/* Hero */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/contact-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-iris-golden text-4xl md:text-5xl font-bold text-center drop-shadow"
        >
          Dein Weg zu deiner Yogastunde beginnt hier.
        </motion.h1>
      </section>

      {/* Inhalt */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-2">
        {/* Formular */}
        <div className="bg-white rounded-2xl border border-iris-golden/30 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-iris-terracotta">Schreib mir</h2>

          {sent ? (
            <p className="text-green-700">
              Danke für deine Nachricht! Ich melde mich so schnell wie möglich bei dir. ✨
            </p>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              {/* Honeypot (unsichtbar, aber für Bots attraktiv) */}
              <div
                aria-hidden="true"
                className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden"
              >
                <label className="block text-sm mb-1">Bitte dieses Feld leer lassen</label>
                <input
                  type="text"
                  name="website"           // unverdächtiger Name
                  autoComplete="off"
                  tabIndex={-1}
                  className="border rounded-md px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Wie darf ich dich ansprechen?</label>
                <input
                  name="name"
                  required
                  className="w-full border rounded-xl px-3 py-2"
                  placeholder="Dein Name"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Wo darf ich dir antworten?</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border rounded-xl px-3 py-2"
                  placeholder="deine@mail.de"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Stimmung des Tages</label>
                <select name="mood" className="w-full border rounded-xl px-3 py-2">
                  <option value="">Wähle deine Stimmung (optional)</option>
                  <option>😄 Energiegeladen</option>
                  <option>😊 Ausgeglichen</option>
                  <option>😌 Ruhig</option>
                  <option>😴 Müde</option>
                  <option>🤩 Vorfreude!</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-1">Erzähl mir, was ich für dich tun kann.</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full border rounded-xl px-3 py-2"
                  placeholder="Deine Nachricht…"
                />
              </div>

              <button
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-iris-terracotta text-white font-semibold
                           hover:brightness-110 transition"
              >
                Nachricht losschicken ✨
              </button>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <p className="text-xs opacity-70">
                Mit dem Senden akzeptierst du unsere{' '}
                <a href="/privacy" className="underline">Datenschutzerklärung</a>.
              </p>
            </form>
          )}
        </div>

        {/* Alternativen + Mini-CTA */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="https://wa.me/4917662468814" // <- Nummer anpassen (ohne +, mit Ländervorwahl)
              target="_blank"
              className="rounded-2xl px-4 py-6 text-center font-semibold bg-green-500 text-white hover:brightness-110 transition"
            >
              WhatsApp
            </a>
            <a
              href="mailto:hello@yogamitherz.de" // <- Mail anpassen
              className="rounded-2xl px-4 py-6 text-center font-semibold bg-iris-terracotta text-white hover:brightness-110 transition"
            >
              E‑Mail
            </a>
            <a
              href="https://www.instagram.com/iriswallenaar/" // <- IG-Link anpassen
              target="_blank"
              className="rounded-2xl px-4 py-6 text-center font-semibold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white hover:brightness-110 transition"
            >
              Instagram
            </a>
          </div>

          <div className="rounded-2xl p-6 bg-iris-sand">
            <h3 className="text-lg font-semibold mb-2">Noch unsicher?</h3>
            <p className="mb-4">
              Schau dir meinen Stundenplan an – such dir einen Termin aus und melde dich unkompliziert an.
            </p>
            <a
              href="/timetable"
              className="inline-block px-5 py-3 rounded-full bg-iris-golden text-iris-charcoal font-semibold hover:brightness-110 transition"
            >
              Zum Stundenplan
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}