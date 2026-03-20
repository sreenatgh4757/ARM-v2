import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CapabilityCardProps {
  title: string;
  description: string;
  visual: ReactNode;
  index: number;
}

export default function CapabilityCard({ title, description, visual, index }: CapabilityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="glass glass-hover p-8 group cursor-default transition-all duration-300 hover:-translate-y-1.5"
    >
      {/* Visual — swap with React Bits SpotlightCard or TiltedCard */}
      <div className="mb-6">
        {visual}
      </div>

      <h3 className="font-mono text-lg font-semibold text-white mb-3">{title}</h3>
      <p className="text-sm text-text-muted leading-relaxed">{description}</p>
    </motion.div>
  );
}
