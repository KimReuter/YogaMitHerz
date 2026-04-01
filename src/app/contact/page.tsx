'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import WaveDivider from '../components/WaveDivider';
import FadeIn from '../components/FadeIn';
import Button from '../components/Button';

const contactMethods = [
  {
    emoji: '💬',
    label: 'WhatsApp',
    desc: 'Schnell und unkompliziert – schreib mir einfach eine Nachricht.',
    href: 'https://wa.me/4917662468814',
    cta: 'Jetzt schreiben',
    target: '_blank',
  },
  {
    emoji: '📷',
    label: 'Instagram',
    desc: 'Schau hinter die Kulissen und bleib auf dem Laufenden.',
    href: 'https://www.instagram.com/iriswallenaar/',
    cta: 'Profil besuchen',
    target: '_blank',
  },
  {
    emoji: '✉️',
    label: 'E-Mail',
    desc: 'Für alles, was ein bisschen mehr Worte braucht.',
    href: 'mailto:hello@yogamitherz.de',
    cta: 'E-Mail schreiben',
    target: undefined,
  },
];

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
    <main className="bg-iris-golden text-iris-charcoal">

      {/* Hero */}
      <section
        className="relative h-[55vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/contact-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/35" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-iris-golden text-5xl md:text-6xl font-bold drop-shadow-lg">
            Lass uns in Kontakt kommen
          </h1>
          <p className="mt-4 text-white/90 text-lg md:text-xl drop-shadow">
            Ich freue mich, von dir zu hören.
          </p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <WaveDivider fill="#C4A675" />
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 bg-iris-golden text-center">
        <FadeIn>
          <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Ob du Fragen zu meinen Kursen hast, eine Probestunde ausprobieren möchtest
            oder einfach ein herzliches „Hallo" senden willst –{' '}
            <span className="text-iris-terracotta font-medium">ich bin für dich da.</span>{' '}
            Schreib mir einfach, wie es dir am liebsten ist.
          </p>
        </FadeIn>
      </section>

      {/* Wave: Golden → Sand */}
      <div className="bg-iris-golden">
        <WaveDivider fill="#FFBD59" />
      </div>

      {/* Kontaktwege */}
      <section className="py-20 px-6 bg-iris-sand">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-semibold text-iris-terracotta text-center mb-12">
              So erreichst du mich
            </h2>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-3">
            {contactMethods.map(({ emoji, label, desc, href, cta, target }, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.a
                  href={href}
                  target={target}
                  rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                  className="flex flex-col items-center text-center gap-3 bg-iris-golden/60 overflow-hidden cursor-pointer px-6 py-10 rounded-3xl"
                  whileHover={{ scale: 1.03, y: -5, boxShadow: '0 24px 56px rgba(0,0,0,0.11)' }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <span className="text-4xl">{emoji}</span>
                  <h3 className="text-xl font-semibold text-iris-terracotta">{label}</h3>
                  <p className="text-sm leading-relaxed">{desc}</p>
                  <span className="mt-2 text-sm font-medium text-iris-terracotta underline underline-offset-4 decoration-iris-terracotta/50">
                    {cta} →
                  </span>
                </motion.a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Wave: Sand → Golden */}
      <div className="bg-iris-sand">
        <WaveDivider fill="#C4A675" />
      </div>

      {/* Formular */}
      <section className="py-20 px-6 bg-iris-golden">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-semibold text-iris-terracotta text-center mb-2">
              Oder schreib mir direkt
            </h2>
            <p className="text-center mb-10 opacity-80">
              Ich antworte dir so schnell wie möglich – versprochen. 🙏
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-iris-sand/70 rounded-3xl p-8 md:p-12">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-4"
                >
                  <div className="text-5xl">✨</div>
                  <h3 className="text-2xl font-semibold text-iris-terracotta">Danke für deine Nachricht!</h3>
                  <p>Ich melde mich so schnell wie möglich bei dir.</p>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  {/* Honeypot */}
                  <div
                    aria-hidden="true"
                    className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden"
                  >
                    <input type="text" name="website" autoComplete="off" tabIndex={-1} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="block text-sm font-medium">Dein Name</label>
                      <input
                        name="name"
                        required
                        placeholder="Wie darf ich dich ansprechen?"
                        className="w-full bg-white/70 border border-iris-terracotta/20 rounded-xl px-4 py-3 placeholder:text-iris-charcoal/40 focus:outline-none focus:border-iris-terracotta transition"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-sm font-medium">Deine E-Mail</label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="deine@mail.de"
                        className="w-full bg-white/70 border border-iris-terracotta/20 rounded-xl px-4 py-3 placeholder:text-iris-charcoal/40 focus:outline-none focus:border-iris-terracotta transition"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium">Deine Nachricht</label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      placeholder="Was liegt dir am Herzen?"
                      className="w-full bg-white/70 border border-iris-terracotta/20 rounded-xl px-4 py-3 placeholder:text-iris-charcoal/40 focus:outline-none focus:border-iris-terracotta transition resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs opacity-60">
                      Mit dem Senden akzeptierst du unsere{' '}
                      <a href="/privacy" className="underline hover:opacity-80">Datenschutzerklärung</a>.
                    </p>
                    <Button type="submit">Nachricht senden</Button>
                  </div>

                  {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}
