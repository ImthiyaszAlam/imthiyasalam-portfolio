import React from 'react';
import { Platform, StyleSheet, View, ViewProps } from 'react-native';

interface GlowBackgroundProps extends ViewProps {
  color?: string;
  size?: number;
  opacity?: number;
  style?: any;
}

const GlowBackground: React.FC<GlowBackgroundProps> = ({
  color = 'rgba(0, 153, 255, 1)',
  size = 320,
  opacity = 0.25,
  style,
  ...rest
}) => {
  // For web: use CSS radial-gradient and blur
  if (Platform.OS === 'web') {
    return (
      <div
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          left: '50%',
          top: '50%',
          width: size,
          height: size,
          transform: `translate(-50%, -50%)`,
          borderRadius: '50%',
          opacity,
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          filter: 'blur(48px)',
          zIndex: 0,
          ...style,
        }}
        {...rest as any}
      />
    );
  }

  // Native: fallback to blurred View with backgroundColor
  return (
    <View
      pointerEvents="none"
      style={[
        styles.glow,
        {
          backgroundColor: color,
          width: size,
          height: size,
          opacity,
          left: '50%',
          top: '50%',
          marginLeft: -size / 2,
          marginTop: -size / 2,
          // @ts-ignore
          blurRadius: 48,
        },
        style,
      ]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  glow: {
    position: 'absolute',
    borderRadius: 9999,
    zIndex: 0,
  },
});

export default GlowBackground;
