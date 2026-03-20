import { motion } from 'framer-motion';
import { Cloud, Container, Brain, Plug } from 'lucide-react';

const nodes = [
  { icon: Cloud, title: 'Cloud Native', subtitle: 'AWS, Terraform, K8s' },
  { icon: Container, title: 'Containerised', subtitle: 'Docker, ECS, EKS' },
  { icon: Brain, title: 'AI Reasoning', subtitle: 'Claude, LLMs, Agents' },
  { icon: Plug, title: 'MCP Connected', subtitle: 'Tool servers, A2A' },
];

function ConnectorLine() {
  return (
    <div className="hidden lg:flex items-center justify-center w-16 relative">
      <div className="w-full h-px bg-white/[0.06]" />
      <div
        className="absolute w-2 h-2 rounded-full bg-cyan-accent/60"
        style={{
          animation: 'travel-h 2.5s linear infinite',
        }}
      />
      <style>{`
        @keyframes travel-h {
          0% { left: 0; }
          100% { left: calc(100% - 8px); }
        }
      `}</style>
    </div>
  );
}

function VerticalConnector() {
  return (
    <div className="flex lg:hidden items-center justify-center h-10 relative">
      <div className="h-full w-px bg-white/[0.06]" />
      <div
        className="absolute w-2 h-2 rounded-full bg-cyan-accent/60"
        style={{
          animation: 'travel-v 2.5s linear infinite',
        }}
      />
      <style>{`
        @keyframes travel-v {
          0% { top: 0; }
          100% { top: calc(100% - 8px); }
        }
      `}</style>
    </div>
  );
}

export default function TechDNA() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-0">
      {nodes.map((node, i) => (
        <div key={i} className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass glass-hover p-5 w-36 text-center"
          >
            <node.icon size={20} className="text-cyan-accent mx-auto mb-3" />
            <div className="font-mono text-xs font-semibold text-white mb-1">{node.title}</div>
            <div className="text-[10px] text-text-dim">{node.subtitle}</div>
          </motion.div>

          {i < nodes.length - 1 && (
            <>
              <ConnectorLine />
              <VerticalConnector />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
