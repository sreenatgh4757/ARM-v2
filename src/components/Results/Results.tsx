import { motion } from 'framer-motion';
import MetricCard from './MetricCard';
import ProofStrip from './ProofStrip';

const metrics = [
  { value: '2', numericValue: 2, label: 'Products built & shipping', sublabel: 'Vzir + TheGigSearch', index: 0 },
  { value: '6+', numericValue: 6, suffix: '+', label: 'Years engineering in UK', sublabel: 'Production systems at scale', index: 1 },
  { value: 'AWS', label: 'Certified Architecture', sublabel: 'Solutions Architect Associate', index: 2 },
  { value: 'MCP', label: 'Protocol specialists', sublabel: 'AI-to-tool integration standard', index: 3 },
];

export default function Results() {
  return (
    <section id="results" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[4px] text-cyan-accent font-sans block mb-4"
          >
            Track Record
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-mono text-3xl md:text-[40px] font-bold text-white"
          >
            We ship.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {metrics.map((m) => (
            <MetricCard
              key={m.index}
              value={m.value}
              numericValue={m.numericValue}
              suffix={m.suffix}
              label={m.label}
              sublabel={m.sublabel}
              index={m.index}
            />
          ))}
        </div>

        <ProofStrip />
      </div>
    </section>
  );
}
