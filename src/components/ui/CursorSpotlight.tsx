import React, { useEffect, useRef, useState } from 'react';

interface CursorSpotlightProps {
  size?: number; // px diameter
  color?: string; // CSS color for gradient
  opacity?: number; // 0-1
  style?: React.CSSProperties;
}

const CursorSpotlight: React.FC<CursorSpotlightProps> = ({
  size = 240,
  color = 'rgba(0,153,255,0.25)',
  opacity = 0.18,
  style,
}) => {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  const anim = useRef({ x: -9999, y: -9999 });
  const req = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  // Interpolate movement for smoothness
  useEffect(() => {
    if (typeof window === 'undefined') return;
    let running = true;
    const animate = () => {
      anim.current.x += (pos.x - anim.current.x) * 0.18;
      anim.current.y += (pos.y - anim.current.y) * 0.18;
      req.current = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      running = false;
      if (req.current !== null) cancelAnimationFrame(req.current);
    };
  }, [pos.x, pos.y]);

  // Only render on web
  if (typeof window === 'undefined') return null;

  return (
    <div
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        left: 0,
        top: 0,
        width: size,
        height: size,
        opacity,
        zIndex: 9999,
        willChange: 'transform',
        transform: `translate3d(${anim.current.x - size / 2}px, ${anim.current.y - size / 2}px, 0)`,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: 'blur(32px)',
        transition: 'opacity 0.2s',
        ...style,
      }}
    />
  );
};

export default CursorSpotlight;
