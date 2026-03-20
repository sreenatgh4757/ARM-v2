const dataNodes = [
  { label: 'Rooms', angle: 0 },
  { label: 'Revenue', angle: 72 },
  { label: 'Guests', angle: 144 },
  { label: 'Bookings', angle: 216 },
  { label: 'Reports', angle: 288 },
];

export default function VzirVisual() {
  const cx = 160;
  const cy = 160;
  const radius = 110;

  return (
    <div className="group">
      <svg viewBox="0 0 320 320" className="w-full max-w-sm mx-auto">
        <defs>
          <filter id="vzir-glow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="vzir-soft">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="orb-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#00D4FF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className="transition-all duration-700" style={{ transformOrigin: `${cx}px ${cy}px` }}>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${cx} ${cy}`}
            to={`360 ${cx} ${cy}`}
            dur="30s"
            repeatCount="indefinite"
          />

          {dataNodes.map((node, i) => {
            const rad = (node.angle * Math.PI) / 180;
            const nx = cx + Math.cos(rad) * radius;
            const ny = cy + Math.sin(rad) * radius;

            return (
              <g key={i}>
                <line
                  x1={cx}
                  y1={cy}
                  x2={nx}
                  y2={ny}
                  stroke="rgba(0,212,255,0.08)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="16;0"
                    dur={`${2.5 + i * 0.2}s`}
                    repeatCount="indefinite"
                  />
                </line>

                <circle r="2" fill="#00D4FF" opacity="0.7" filter="url(#vzir-soft)">
                  <animateMotion
                    dur={`${2.5 + i * 0.2}s`}
                    repeatCount="indefinite"
                    path={`M ${nx - cx} ${ny - cy} L 0 0`}
                  />
                </circle>

                <circle cx={nx} cy={ny} r="6" fill="rgba(0,212,255,0.08)" stroke="rgba(0,212,255,0.2)" strokeWidth="0.5" />

                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from={`0 ${cx} ${cy}`}
                  to={`-360 ${cx} ${cy}`}
                  dur="30s"
                  repeatCount="indefinite"
                />

                <text
                  x={nx}
                  y={ny + 16}
                  textAnchor="middle"
                  className="text-[8px] fill-text-dim"
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </g>

        <circle cx={cx} cy={cy} r="40" fill="url(#orb-gradient)" filter="url(#vzir-glow)">
          <animate attributeName="r" values="35;45;35" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx={cx} cy={cy} r="16" fill="#00D4FF" opacity="0.25">
          <animate attributeName="opacity" values="0.2;0.35;0.2" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx={cx} cy={cy} r="6" fill="#00D4FF" opacity="0.5" />
      </svg>
    </div>
  );
}
