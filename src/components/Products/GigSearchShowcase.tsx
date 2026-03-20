import { motion } from 'framer-motion';
import GigSearchVisual from './GigSearchVisual';
import StatusPill from './StatusPill';

const features = [
  'Real-time shift matching for hospitality',
  'Built-in compliance and document management',
  'Full workforce management dashboard',
];

export default function GigSearchShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="glass p-8 md:p-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-first">
          <GigSearchVisual />
        </div>

        <div>
          {/* Product name — swap with React Bits GradientText or LetterPullup */}
          <h3 className="font-mono text-4xl md:text-[56px] font-bold mb-4 leading-tight">
            <span className="text-gradient-cyan">TheGigSearch</span>
          </h3>
          <p className="text-xl text-white mb-8">Flexible staffing, solved.</p>

          <div className="space-y-4 mb-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-cyan-accent mt-0.5 text-sm shrink-0">&rarr;</span>
                <span className="text-sm text-text-muted">{f}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <StatusPill label="Live" color="green" />
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover px-5 py-2.5 text-sm text-white hover:text-cyan-accent transition-colors duration-200"
            >
              Visit TheGigSearch &rarr;
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
