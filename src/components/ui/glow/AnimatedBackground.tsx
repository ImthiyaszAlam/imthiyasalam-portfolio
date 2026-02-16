import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { useTheme } from '../../../theme/ThemeContext';

const AnimatedBackground = () => {
  const { theme } = useTheme();
  // Animate mesh glow and floating blobs
  const glowX = useSharedValue(0);
  const glowY = useSharedValue(0);

  React.useEffect(() => {
    glowX.value = withRepeat(withTiming(1, { duration: 8000, easing: Easing.inOut(Easing.quad) }), -1, true);
    glowY.value = withRepeat(withTiming(1, { duration: 12000, easing: Easing.inOut(Easing.quad) }), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: 0.8,
    transform: [
      { translateX: glowX.value * 40 },
      { translateY: glowY.value * 24 },
    ],
  }));

  return (
    <View style={styles.container} pointerEvents="none">
      <Animated.View style={[styles.glow, animatedStyle]} />
      {/* Add GlowOrb components for floating blobs */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    overflow: 'hidden',
  },
  glow: {
    position: 'absolute',
    width: 600,
    height: 600,
    borderRadius: 300,
    backgroundColor: 'linear-gradient(90deg,#6ef3ff,#a7ffeb,#fff)',
    filter: 'blur(120px)',
    opacity: 0.7,
    left: '50%',
    top: '30%',
    transform: [{ translateX: -300 }, { translateY: -180 }],
  },
});

export default AnimatedBackground;
