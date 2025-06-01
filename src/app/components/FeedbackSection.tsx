'use client';

import { motion } from 'framer-motion';

export default function FeedbackSection() {
  return (
    <section className="bg-pink-50 dark:bg-gray-800 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-pink-600 dark:text-pink-400">
          Was Teilnehmerinnen sagen
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
          >
            <p className="text-lg italic mb-4">
              „Iris schafft es, dass ich mich in meinem Körper wieder zuhause fühle – ganz ohne Leistungsdruck.“
            </p>
            <footer className="text-sm font-medium text-pink-600 dark:text-pink-400">
              – Laura, 39
            </footer>
          </motion.blockquote>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
          >
            <p className="text-lg italic mb-4">
              „Ich liebe Iris’ Humor und ihre Tiefe – jede Stunde ist wie eine kleine Reise zu mir selbst.“
            </p>
            <footer className="text-sm font-medium text-pink-600 dark:text-pink-400">
              – Melanie, 42
            </footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}