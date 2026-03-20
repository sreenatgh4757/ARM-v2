import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';

interface MetricCardProps {
  value: string;
  numericValue?: number;
  suffix?: string;
  label: string;
  sublabel: string;
  index: number;
}

export default function MetricCard({ value, numericValue, suffix, label, sublabel, index }: MetricCardProps) {
  const [inView, setInView] = useState(false);
  const count = useCountUp(numericValue || 0, 1500, 0, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="glass glass-hover p-8 text-center"
    >
      {/* Value — swap with React Bits CountUp */}
      <div className="font-mono text-5xl font-bold text-cyan-accent mb-3">
        {numericValue !== undefined ? `${count}${suffix || ''}` : value}
      </div>
      <div className="text-sm text-white mb-1">{label}</div>
      <div className="text-xs text-text-dim">{sublabel}</div>
    </motion.div>
  );
}
