interface StatusPillProps {
  label: string;
  color: 'cyan' | 'green';
}

export default function StatusPill({ label, color }: StatusPillProps) {
  const dotColor = color === 'cyan' ? 'bg-cyan-accent' : 'bg-emerald-400';
  const textColor = color === 'cyan' ? 'text-cyan-accent' : 'text-emerald-400';
  const borderColor = color === 'cyan' ? 'border-cyan-accent/20' : 'border-emerald-400/20';

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${borderColor} bg-white/[0.02]`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor} animate-pulse-glow`} />
      <span className={`text-xs font-sans ${textColor}`}>{label}</span>
    </div>
  );
}
