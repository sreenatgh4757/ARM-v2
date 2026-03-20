import { useMemo } from 'react';

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function GigSearchVisual() {
  const { leftDots, rightDots, connections } = useMemo(() => {
    const left = Array.from({ length: 8 }, (_, i) => ({
      x: 30 + seededRandom(i * 7 + 1) * 60,
      y: 40 + seededRandom(i * 7 + 2) * 240,
    }));

    const right = Array.from({ length: 8 }, (_, i) => ({
      x: 230 + seededRandom(i * 11 + 3) * 60,
      y: 40 + seededRandom(i * 11 + 4) * 240,
    }));

    const conns = Array.from({ length: 6 }, (_, i) => ({
      from: left[i % left.length],
      to: right[(i + 2) % right.length],
      delay: i * 1.2,
      dur: 2 + seededRandom(i * 13) * 2,
    }));

    return { leftDots: left, rightDots: right, connections: conns };
  }, []);

  return (
    <svg viewBox="0 0 320 320" className="w-full max-w-sm mx-auto">
      <defs>
        <filter id="gs-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="match-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      <line x1="160" y1="20" x2="160" y2="300" stroke="rgba(139,92,246,0.08)" strokeWidth="1" strokeDasharray="3 3" />
      <rect x="155" y="60" width="10" height="200" rx="5" fill="rgba(139,92,246,0.03)" />

      {connections.map((conn, i) => (
        <g key={`conn-${i}`}>
          <line
            x1={conn.from.x}
            y1={conn.from.y}
            x2={conn.to.x}
            y2={conn.to.y}
            stroke="url(#match-line)"
            strokeWidth="0.5"
            opacity="0"
          >
            <animate
              attributeName="opacity"
              values="0;0.6;0.6;0"
              dur={`${conn.dur}s`}
              begin={`${conn.delay}s`}
              repeatCount="indefinite"
            />
          </line>
          <circle r="2" fill="#00D4FF" opacity="0" filter="url(#gs-glow)">
            <animateMotion
              dur={`${conn.dur * 0.5}s`}
              begin={`${conn.delay}s`}
              repeatCount="indefinite"
              path={`M ${conn.from.x} ${conn.from.y} L ${conn.to.x} ${conn.to.y}`}
            />
            <animate
              attributeName="opacity"
              values="0;0.8;0.8;0"
              dur={`${conn.dur * 0.5}s`}
              begin={`${conn.delay}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}

      {leftDots.map((dot, i) => (
        <g key={`l-${i}`}>
          <circle cx={dot.x} cy={dot.y} r="4" fill="rgba(0,212,255,0.15)" stroke="rgba(0,212,255,0.3)" strokeWidth="0.5" />
          <circle cx={dot.x} cy={dot.y} r="1.5" fill="#00D4FF" opacity="0.5" />
        </g>
      ))}

      {rightDots.map((dot, i) => (
        <g key={`r-${i}`}>
          <circle cx={dot.x} cy={dot.y} r="4" fill="rgba(139,92,246,0.15)" stroke="rgba(139,92,246,0.3)" strokeWidth="0.5" />
          <circle cx={dot.x} cy={dot.y} r="1.5" fill="#8B5CF6" opacity="0.5" />
        </g>
      ))}

      <text x="60" y="305" textAnchor="middle" className="text-[8px] fill-text-dim">Businesses</text>
      <text x="260" y="305" textAnchor="middle" className="text-[8px] fill-text-dim">Workers</text>
    </svg>
  );
}
