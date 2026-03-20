import { motion } from 'framer-motion';
import ParticleCanvas from './ParticleCanvas';
import StatsStrip from './StatsStrip';

const words = ['We', 'build', 'AI-powered', 'products.'];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleCanvas />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent animate-pulse-glow" />
          <span className="text-[11px] uppercase tracking-[6px] text-text-dim font-sans">
            A.R.M Technologies
          </span>
        </motion.div>

        {/* Headline — swap with React Bits SplitText */}
        <h1 className="font-mono font-bold text-4xl md:text-[60px] md:leading-[1.1] leading-tight mb-6">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`inline-block mr-3 md:mr-4 ${
                word === 'AI-powered' ? 'glow-cyan text-cyan-accent' : 'text-white'
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg text-text-muted font-sans max-w-xl mx-auto mb-10"
        >
          From concept to production. Intelligent software that actually ships.
        </motion.p>

        <motion.a
          href="#products"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="inline-block animate-float"
        >
          <span className="border border-cyan-accent/50 text-cyan-accent px-6 py-3 rounded-lg text-sm font-sans hover:bg-cyan-accent hover:text-dark transition-all duration-300 cursor-pointer">
            Explore our work ↓
          </span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <StatsStrip />
        </motion.div>
      </div>
    </section>
  );
}
