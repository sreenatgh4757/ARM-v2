import { motion } from 'framer-motion';
import VzirShowcase from './VzirShowcase';
import GigSearchShowcase from './GigSearchShowcase';

export default function Products() {
  return (
    <section id="products" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[4px] text-cyan-accent font-sans block mb-4"
          >
            Our Products
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-mono text-3xl md:text-[40px] font-bold"
          >
            <span className="text-white">Built by </span>
            <span className="text-gradient-purple-cyan">us.</span>
          </motion.h2>
        </div>

        <div className="space-y-16">
          <VzirShowcase />
          <GigSearchShowcase />
        </div>
      </div>
    </section>
  );
}
