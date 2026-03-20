import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';

interface StatItem {
  value: string;
  numericValue?: number;
  label: string;
}

const stats: StatItem[] = [
  { value: '2 Products', numericValue: 2, label: 'Shipped & building' },
  { value: 'AI + MCP', label: 'Core architecture' },
  { value: 'UK Based', label: 'Bournemouth, England' },
];

function StatValue({ stat, inView }: { stat: StatItem; inView: boolean }) {
  const count = useCountUp(stat.numericValue || 0, 1500, 0, inView);

  if (stat.numericValue) {
    return (
      <span className="font-mono text-xl md:text-2xl font-semibold text-white">
        {count} Products
      </span>
    );
  }

  return (
    <span className="font-mono text-xl md:text-2xl font-semibold text-white">
      {stat.value}
    </span>
  );
}

export default function StatsStrip() {
  const [inView, setInView] = useState(false);

  return (
    <motion.div
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row items-center gap-6 md:gap-0 mt-16"
    >
      {stats.map((stat, i) => (
        <div key={i} className="flex items-center">
          {i > 0 && (
            <div className="hidden md:block w-px h-12 bg-white/[0.06] mx-8" />
          )}
          <div className="flex flex-col items-center gap-1 text-center">
            <StatValue stat={stat} inView={inView} />
            <span className="text-xs text-text-dim uppercase tracking-wider">
              {stat.label}
            </span>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
