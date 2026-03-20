import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import TechDNA from './TechDNA';
import TechMarquee from './TechMarquee';

export default function Approach() {
  return (
    <section id="approach" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[4px] text-cyan-accent font-sans block mb-4"
          >
            Our Approach
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-mono text-2xl md:text-4xl font-bold text-white"
          >
            Infrastructure meets intelligence.
          </motion.h2>
        </div>

        <TechDNA />

        <div className="mt-16 border-t border-b border-white/[0.04]">
          <TechMarquee />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <div className="glass inline-flex items-center gap-2 px-5 py-2.5">
            <Award size={14} className="text-cyan-accent" />
            <span className="text-xs font-sans text-text-muted">AWS Solutions Architect — Associate</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
