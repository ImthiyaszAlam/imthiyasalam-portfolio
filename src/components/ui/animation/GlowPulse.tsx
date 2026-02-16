import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

interface GlowPulseProps {
  active?: boolean;
}

const GlowPulse: React.FC<GlowPulseProps> = ({ active }) => {
  const pulse = useSharedValue(0.7);

  React.useEffect(() => {
    if (active) {
      pulse.value = withRepeat(withTiming(1, { duration: 600, easing: Easing.inOut(Easing.cubic) }), -1, true);
    } else {
      pulse.value = withTiming(0.7, { duration: 400, easing: Easing.inOut(Easing.cubic) });
    }
  }, [active]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: pulse.value,
    transform: [{ scale: 0.96 + 0.04 * pulse.value }],
  }));

  return (
    <Animated.View style={[styles.glow, animatedStyle]} />
  );
};

const styles = StyleSheet.create({
  glow: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 12,
    backgroundColor: 'rgba(110,243,255,0.18)',
    zIndex: 0,
    pointerEvents: 'none',
  },
});

export default GlowPulse;
