import React, { useEffect } from 'react';
import { Platform, TextProps, useColorScheme } from 'react-native';
import Animated, { useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

interface AnimatedGradientTextProps extends TextProps {
  fontSize?: number;
  colors?: string[];
  children: React.ReactNode;
}

const getDefaultColors = (colorScheme: 'light' | 'dark') =>
  colorScheme === 'dark'
    ? ['#7f53ac', '#657ced', '#43cea2']
    : ['#ff6a00', '#ffb347', '#ffecd2'];

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({
  fontSize = 32,
  colors,
  style,
  children,
  ...rest
}) => {
  const colorScheme = useColorScheme() as 'light' | 'dark';
  const gradientColors = colors || getDefaultColors(colorScheme);
  const translateX = useSharedValue(0);

  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(100, { duration: 3500 }),
      -1,
      false
    );
  }, []);

  // For web: use CSS for gradient and animation
  if (Platform.OS === 'web') {
    const gradient = `linear-gradient(90deg, ${gradientColors.join(', ')})`;
    const webStyle: React.CSSProperties = {
      fontSize,
      fontWeight: 'bold',
      background: gradient,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block',
      animation: 'gradient-move 3.5s linear infinite',
      backgroundSize: '200% 100%',
      backgroundPosition: '0% 50%',
    };
    // Add keyframes to document (only once)
    const styleId = 'animated-gradient-text-keyframes';
    if (!document.getElementById(styleId)) {
      const styleTag = document.createElement('style');
      styleTag.id = styleId;
      styleTag.innerHTML = `@keyframes gradient-move { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }`;
      document.head.appendChild(styleTag);
    }
    return (
      <span style={webStyle} {...rest}>
        {children}
      </span>
    );
  }

  // Native: fallback to static color (or use Expo LinearGradient Mask if available)
  return (
    <Animated.Text
      style={[
        { fontSize, fontWeight: 'bold', color: gradientColors[0] },
        style,
      ]}
      {...rest}
    >
      {children}
    </Animated.Text>
  );
};

export default AnimatedGradientText;
