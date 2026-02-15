import React from 'react';

interface HoverScaleProps {
  children: React.ReactNode;
  scale?: number;
  style?: React.CSSProperties;
}

const isWeb = typeof window !== 'undefined' && typeof document !== 'undefined';

const HoverScale: React.FC<HoverScaleProps> = ({ children, scale = 1.02, style }) => {
  if (!isWeb) {
    // On native, just render children as-is
    return <>{children}</>;
  }

  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const mergedStyle: React.CSSProperties = {
    display: 'inline-block',
    transition: 'transform 0.18s cubic-bezier(0.4,0,0.2,1)',
    transform: hovered ? `scale(${scale})` : 'scale(1)',
    willChange: 'transform',
    ...style,
  };

  return (
    <span
      style={mergedStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </span>
  );
};

export default HoverScale;
