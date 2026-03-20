const techNames = [
  'AWS', 'Terraform', 'Docker', 'Kubernetes', 'Python',
  'TypeScript', 'Next.js', 'Anthropic', 'React', 'PostgreSQL', 'GitHub',
];

export default function TechMarquee() {
  const items = [...techNames, ...techNames];

  return (
    /* Marquee wrapper — swap with React Bits InfiniteScroll */
    <div className="overflow-hidden py-8">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((name, i) => (
          <span
            key={i}
            className="mx-8 text-sm font-mono text-white/40 hover:text-white transition-colors duration-300 cursor-default select-none"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
