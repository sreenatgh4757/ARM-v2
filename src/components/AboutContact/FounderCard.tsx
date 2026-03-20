import { motion } from 'framer-motion';

export default function FounderCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <div className="relative w-60 h-60 rounded-2xl flex items-center justify-center border-gradient-animated bg-dark">
        <span
          className="font-mono text-6xl font-bold text-white"
          style={{ textShadow: '0 0 30px rgba(0,212,255,0.2)' }}
        >
          SR
        </span>
      </div>
      <div className="mt-6 text-center">
        <div className="text-lg font-sans text-white">Sreenath Reddy</div>
        <div className="text-sm text-text-muted">Founder & Lead Engineer</div>
      </div>
    </motion.div>
  );
}
