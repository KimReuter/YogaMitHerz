'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableBoxProps {
  title: string;
  summary: string | React.ReactNode;
  details: React.ReactNode;
}

export default function ExpandableBox({ title, summary, details }: ExpandableBoxProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-iris-moss rounded-xl shadow-lg p-6 transition-all duration-300 text-center flex flex-col items-center">
      {/* Titel */}
      <h2 className="text-2xl font-semibold mb-3 text-white">{title}</h2>

      {/* Zusammenfassung */}
      <div className="text-white mb-4">{summary}</div>

      {/* Ausklappbarer Inhalt */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden mt-2 space-y-3 text-white text-center"
          >
            {details}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pfeil am Ende */}
      <div
        className="cursor-pointer mt-4 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
    </div>
  );
}