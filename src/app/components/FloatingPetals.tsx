'use client';

import { motion } from 'framer-motion';

// Jedes Element hat eigene Position, Größe, Geschwindigkeit und Verzögerung
const petals = [
  { id: 1, left: '7%',  top: '18%', size: 18, delay: 0,   duration: 7,   rotate: 20,  type: 'petal' },
  { id: 2, left: '18%', top: '65%', size: 11, delay: 1.5, duration: 5.5, rotate: -15, type: 'dot'   },
  { id: 3, left: '78%', top: '22%', size: 22, delay: 0.8, duration: 8,   rotate: 45,  type: 'petal' },
  { id: 4, left: '88%', top: '72%', size: 13, delay: 2.5, duration: 6,   rotate: -30, type: 'dot'   },
  { id: 5, left: '52%', top: '8%',  size: 16, delay: 1.0, duration: 7.5, rotate: 10,  type: 'petal' },
  { id: 6, left: '33%', top: '82%', size: 20, delay: 3.0, duration: 6.5, rotate: -20, type: 'petal' },
  { id: 7, left: '63%', top: '58%', size: 9,  delay: 0.5, duration: 9,   rotate: 60,  type: 'dot'   },
  { id: 8, left: '42%', top: '42%', size: 15, delay: 2.0, duration: 7,   rotate: -5,  type: 'petal' },
];

function Petal({ size }: { size: number }) {
  return (
    <svg width={size} height={size * 1.6} viewBox="0 0 10 16" fill="none" aria-hidden>
      <path
        d="M5 0 C8 4 8 12 5 16 C2 12 2 4 5 0Z"
        fill="white"
        opacity="0.5"
      />
    </svg>
  );
}

function Dot({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" aria-hidden>
      <circle cx="5" cy="5" r="4" fill="white" opacity="0.35" />
    </svg>
  );
}

export default function FloatingPetals() {
  return (
    <>
      {petals.map(({ id, left, top, size, delay, duration, rotate, type }) => (
        <motion.div
          key={id}
          className="absolute pointer-events-none z-[5]"
          style={{ left, top }}
          animate={{
            y: [0, -22, 0],
            x: [0, 6, 0],
            rotate: [rotate, rotate + 12, rotate],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {type === 'petal' ? <Petal size={size} /> : <Dot size={size} />}
        </motion.div>
      ))}
    </>
  );
}
