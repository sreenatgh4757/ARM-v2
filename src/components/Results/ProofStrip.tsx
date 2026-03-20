import { motion } from 'framer-motion';

const proofPoints = [
  'TheGigSearch — Full staffing marketplace shipped on AWS EKS with Terraform IaC',
  'Vzir — AI intelligence layer for hotels, MCP server architecture with Claude',
];

export default function ProofStrip() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {proofPoints.map((point, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="glass p-6"
        >
          <p className="text-sm text-text-muted leading-relaxed">{point}</p>
        </motion.div>
      ))}
    </div>
  );
}
