import { motion } from 'framer-motion';
import CapabilityCard from './CapabilityCard';
import OrbAnimation from './OrbAnimation';
import PipelineAnimation from './PipelineAnimation';
import IntegrationAnimation from './IntegrationAnimation';

const capabilities = [
  {
    title: 'AI Products',
    description: 'We design and ship AI-native products — from hotel intelligence to workforce platforms.',
    visual: <OrbAnimation />,
  },
  {
    title: 'Business Automation',
    description: 'We automate operations for startups and SMEs — hotels, hospitality, small-scale industries.',
    visual: <PipelineAnimation />,
  },
  {
    title: 'Intelligent Integrations',
    description: 'We connect AI models to real business tools using MCP servers and agent-to-agent protocols.',
    visual: <IntegrationAnimation />,
  },
];

const headlineWords = ['Products.', 'Automation.', 'Intelligence.'];

export default function WhatWeBuild() {
  return (
    <section id="what-we-build" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[4px] text-cyan-accent font-sans block mb-4"
          >
            What We Build
          </motion.span>

          <h2 className="font-mono text-3xl md:text-[40px] font-bold leading-tight">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="inline-block mr-3 text-white"
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <CapabilityCard
              key={i}
              title={cap.title}
              description={cap.description}
              visual={cap.visual}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
