'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  className?: string;
}

const directionMap = {
  up:    { y: 40, x: 0 },
  left:  { y: 0, x: -40 },
  right: { y: 0, x: 40 },
  none:  { y: 0, x: 0 },
};

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-80px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
