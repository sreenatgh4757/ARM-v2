export default function PipelineAnimation() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-48">
      <defs>
        <filter id="pipe-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path d="M 20 100 Q 60 60 100 100 Q 140 140 180 100" fill="none" stroke="rgba(0,212,255,0.12)" strokeWidth="1" />
      <path d="M 20 100 Q 60 120 100 80 Q 140 40 180 80" fill="none" stroke="rgba(139,92,246,0.12)" strokeWidth="1" />
      <path d="M 20 120 Q 70 90 100 110 Q 130 130 180 110" fill="none" stroke="rgba(0,212,255,0.08)" strokeWidth="1" />

      <circle r="3" fill="#00D4FF" opacity="0.8" filter="url(#pipe-glow)">
        <animateMotion dur="3s" repeatCount="indefinite" path="M 20 100 Q 60 60 100 100 Q 140 140 180 100" />
      </circle>
      <circle r="2.5" fill="#8B5CF6" opacity="0.8" filter="url(#pipe-glow)">
        <animateMotion dur="4s" repeatCount="indefinite" path="M 20 100 Q 60 120 100 80 Q 140 40 180 80" />
      </circle>
      <circle r="2" fill="#00D4FF" opacity="0.6" filter="url(#pipe-glow)">
        <animateMotion dur="3.5s" repeatCount="indefinite" path="M 20 120 Q 70 90 100 110 Q 130 130 180 110" />
      </circle>
      <circle r="2" fill="#ffffff" opacity="0.4" filter="url(#pipe-glow)">
        <animateMotion dur="2.8s" repeatCount="indefinite" begin="1s" path="M 20 100 Q 60 60 100 100 Q 140 140 180 100" />
      </circle>

      <circle cx="20" cy="100" r="3" fill="rgba(0,212,255,0.3)" />
      <circle cx="180" cy="100" r="3" fill="rgba(0,212,255,0.3)" />
      <circle cx="180" cy="80" r="2.5" fill="rgba(139,92,246,0.3)" />
    </svg>
  );
}
