'use client';

import { motion } from 'framer-motion';
import React from 'react';

const timelineData = [
  {
    year: '2010',
    text: 'Das erste Mal eine Yogamatte betreten – neugierig, aber skeptisch.',
  },
  {
    year: '2013',
    text: 'Verliebt in Ashtanga. Viel geschwitzt, viel geflucht, noch mehr gelernt.',
  },
  {
    year: '2017',
    text: 'Ausbildung zur Yoga- und Kinderyogalehrerin – mit Herz, Humor und Hindernissen.',
  },
  {
    year: '2020',
    text: 'Eigenes Kursangebot gestartet – frei, intuitiv, authentisch.',
  },
  {
    year: 'Heute',
    text: 'Yoga ist Teil meines Lebens – und ich gebe weiter, was mich selbst trägt.',
  },
];

export default function TimelineSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-iris-linen text-iris-charcoal">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-iris-terracotta">
          Mein Yogaweg
        </h2>

        <div className="relative border-l-2 border-iris-moss pl-6">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-10 relative pl-6"
            >
              <div className="absolute -left-3 top-2.5 w-6 h-6 bg-iris-terracotta rounded-full border-2 border-white" />
              <h3 className="text-lg font-semibold mb-1">{item.year}</h3>
              <p className="text-base opacity-80">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}