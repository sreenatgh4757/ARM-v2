import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PageLoader() {
  const [done, setDone] = useState(false);

  if (done) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      onAnimationComplete={() => setDone(true)}
      className="fixed inset-0 z-[200] bg-dark pointer-events-none"
    />
  );
}
