import React, { useEffect, useRef, useState } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  strength?: number; // px, default 24
  className?: string;
  style?: React.CSSProperties;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  strength = 24,
  className,
  style,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [magnet, setMagnet] = useState({ x: 0, y: 0, scale: 1 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const pointer = window.matchMedia('(pointer: fine)').matches;
    setIsPointer(pointer);
    if (!pointer) return;
    const handleMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      // Only react if mouse is near
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < rect.width * 0.8) {
        setMagnet({
          x: (dx / rect.width) * strength,
          y: (dy / rect.height) * strength,
          scale: 1.06,
        });
      } else {
        setMagnet({ x: 0, y: 0, scale: 1 });
      }
    };
    const handleLeave = () => setMagnet({ x: 0, y: 0, scale: 1 });
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseout', handleLeave);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseout', handleLeave);
    };
  }, [strength]);

  // Smoothly animate back to origin
  useEffect(() => {
    if (!isPointer) return;
    let frame: number;
    const animate = () => {
      setMagnet((prev) => {
        const lerp = (a: number, b: number, t: number) => a + (b - a) * 0.18;
        return {
          x: lerp(prev.x, 0, 0.08),
          y: lerp(prev.y, 0, 0.08),
          scale: lerp(prev.scale, 1, 0.12),
        };
      });
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [isPointer]);

  if (typeof window === 'undefined' || !isPointer) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        willChange: 'transform',
        transform: `translate3d(${magnet.x}px, ${magnet.y}px, 0) scale(${magnet.scale})`,
        transition: 'transform 0.18s cubic-bezier(.22,1,.36,1)',
        cursor: 'pointer',
        display: 'inline-block',
      }}
    >
      {children}
    </div>
  );
};

export default MagneticButton;
