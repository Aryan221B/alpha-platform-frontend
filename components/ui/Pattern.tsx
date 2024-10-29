'use client';

import { motion } from 'framer-motion';

export default function Pattern() {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="grid"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 32V.5H32"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.2"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </motion.svg>
  );
}
