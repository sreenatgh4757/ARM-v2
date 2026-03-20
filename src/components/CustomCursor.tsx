import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorX - 6}px, ${cursorY - 6}px)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    const frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[100] hidden md:block"
      style={{
        background: 'rgba(0, 212, 255, 0.15)',
        boxShadow: '0 0 10px rgba(0, 212, 255, 0.1)',
      }}
    />
  );
}
