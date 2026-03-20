export default function OrbAnimation() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-48">
      <defs>
        <filter id="orb-glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <line x1="100" y1="100" x2="100" y2="40" stroke="rgba(0,212,255,0.15)" strokeWidth="0.5">
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="8s" repeatCount="indefinite" />
      </line>
      <line x1="100" y1="100" x2="100" y2="35" stroke="rgba(139,92,246,0.15)" strokeWidth="0.5">
        <animateTransform attributeName="transform" type="rotate" from="120 100 100" to="480 100 100" dur="12s" repeatCount="indefinite" />
      </line>
      <line x1="100" y1="100" x2="100" y2="45" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5">
        <animateTransform attributeName="transform" type="rotate" from="240 100 100" to="600 100 100" dur="10s" repeatCount="indefinite" />
      </line>

      <circle cx="100" cy="40" r="8" fill="#00D4FF" opacity="0.6" filter="url(#orb-glow)">
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="8s" repeatCount="indefinite" />
      </circle>

      <circle cx="100" cy="35" r="7" fill="#8B5CF6" opacity="0.6" filter="url(#orb-glow)">
        <animateTransform attributeName="transform" type="rotate" from="120 100 100" to="480 100 100" dur="12s" repeatCount="indefinite" />
      </circle>

      <circle cx="100" cy="45" r="6" fill="#ffffff" opacity="0.4" filter="url(#orb-glow)">
        <animateTransform attributeName="transform" type="rotate" from="240 100 100" to="600 100 100" dur="10s" repeatCount="indefinite" />
      </circle>

      <circle cx="100" cy="100" r="4" fill="#00D4FF" opacity="0.3">
        <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
