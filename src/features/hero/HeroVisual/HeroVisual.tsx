
import React, { useEffect, useRef, useState } from 'react';
import { Platform, Text, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { useBreakpoint } from '../../../hooks/useBreakpoint';
import { useTheme } from '../../../theme/ThemeContext';
import { heroVisualStyles } from './HeroVisual.style';

const HeroVisual: React.FC = () => {
  const breakpoint = useBreakpoint();
  const { theme } = useTheme();
  const isMobile = breakpoint === 'mobile';
  // Use theme colors and shadow
  const boxSize = isMobile ? 160 : 280;
  const borderRadius = theme.radii.lg;
  const shadow = theme.shadows.md;

  // Animation: slow vertical oscillation
  const amplitude = isMobile ? 8 : 12;
  const translateY = useSharedValue(0);

  // Parallax state for web
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    translateY.value = withRepeat(
      withTiming(amplitude, {
        duration: 2600,
        easing: Easing.inOut(Easing.cubic),
      }),
      -1,
      true
    );
  }, [amplitude]);

  // Mouse parallax for web
  useEffect(() => {
    if (Platform.OS !== 'web') return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      const rect = parallaxRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      setParallax({ x: dx * 10, y: dy * 10 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    // GPU transform for performance
    return {
      transform: [
        { translateY: translateY.value },
      ],
      willChange: Platform.OS === 'web' ? 'transform' : undefined,
    };
  });

  // Compose parallax for web
  const webParallaxStyle = Platform.OS === 'web' ? {
    transform: `translateY(${parallax.y}px) translateX(${parallax.x}px)`,
    willChange: 'transform',
  } : undefined;

  const Wrapper = Platform.OS === 'web' ? 'div' : Animated.View;

  return (
    <Animated.View
      // @ts-ignore web: ref for mouse parallax
      ref={Platform.OS === 'web' ? parallaxRef : undefined}
      style={[
        heroVisualStyles.container,
        {
          width: boxSize,
          height: boxSize,
          borderRadius,
          backgroundColor: theme.colors.surface,
          ...shadow,
        },
        animatedStyle,
        Platform.OS === 'web' ? webParallaxStyle : undefined,
      ]}
      accessible
      accessibilityLabel="Profile Visual"
      accessibilityRole="image"
    >
      {/* Subtle overlay for visual effect */}
      <View
        style={[
          heroVisualStyles.container,
          {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius,
            backgroundColor: theme.colors.primary,
            opacity: 0.15,
          },
        ]}
        pointerEvents="none"
      />
      <View style={heroVisualStyles.centerContent}>
        <Text style={heroVisualStyles.placeholderText}>Profile Visual</Text>
      </View>
    </Animated.View>
  );
};



export default HeroVisual;
