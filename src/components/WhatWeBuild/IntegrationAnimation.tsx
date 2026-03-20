export default function IntegrationAnimation() {
  const outerNodes = [
    { cx: 100, cy: 30 },
    { cx: 165, cy: 60 },
    { cx: 165, cy: 140 },
    { cx: 100, cy: 170 },
    { cx: 35, cy: 140 },
    { cx: 35, cy: 60 },
  ];

  return (
    <svg viewBox="0 0 200 200" className="w-full h-48">
      <defs>
        <filter id="int-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {outerNodes.map((node, i) => (
        <g key={i}>
          <line
            x1="100"
            y1="100"
            x2={node.cx}
            y2={node.cy}
            stroke="rgba(0,212,255,0.1)"
            strokeWidth="1"
            strokeDasharray="4 3"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="14;0"
              dur={`${2 + i * 0.3}s`}
              repeatCount="indefinite"
            />
          </line>

          <circle r="2" fill="#00D4FF" opacity="0.7">
            <animateMotion
              dur={`${2 + i * 0.3}s`}
              repeatCount="indefinite"
              path={`M ${node.cx} ${node.cy} L 100 100`}
            />
          </circle>

          <circle
            cx={node.cx}
            cy={node.cy}
            r="4"
            fill="rgba(0,212,255,0.15)"
            stroke="rgba(0,212,255,0.2)"
            strokeWidth="0.5"
          />
        </g>
      ))}

      <circle cx="100" cy="100" r="10" fill="rgba(0,212,255,0.15)" filter="url(#int-glow)">
        <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="100" r="4" fill="#00D4FF" opacity="0.6" />
    </svg>
  );
}
