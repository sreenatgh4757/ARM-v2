import { motion } from 'framer-motion';
import VzirVisual from './VzirVisual';
import StatusPill from './StatusPill';

const features = [
  'Natural language queries to live PMS data',
  'Works with Guestline, Cloudbeds, Opera',
  'Zero data storage — fetched live, discarded after',
];

export default function VzirShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="glass p-8 md:p-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          {/* Product name — swap with React Bits GradientText or LetterPullup */}
          <h3 className="font-mono text-4xl md:text-[56px] font-bold mb-4 animated-gradient-text leading-tight">
            Vzir
          </h3>
          <p className="text-xl text-white mb-8">AI intelligence for hotels.</p>

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
            <StatusPill label="In Development" color="cyan" />
            <a
              href="#contact"
              className="glass glass-hover px-5 py-2.5 text-sm text-white hover:text-cyan-accent transition-colors duration-200"
            >
              Learn about Vzir &rarr;
            </a>
          </div>
        </div>

        <div className="order-first lg:order-last">
          <VzirVisual />
        </div>
      </div>
    </motion.div>
  );
}
