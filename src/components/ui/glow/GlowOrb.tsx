import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

interface GlowOrbProps {
  active?: boolean;
}

const GlowOrb: React.FC<GlowOrbProps> = ({ active }) => {
  const scale = useSharedValue(1);

  React.useEffect(() => {
    scale.value = withRepeat(withTiming(active ? 1.12 : 1, { duration: 1200, easing: Easing.inOut(Easing.quad) }), -1, true);
  }, [active]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: active ? 0.9 : 0.6,
  }));

  return (
    <Animated.View style={[styles.orb, animatedStyle]} />
  );
};

const styles = StyleSheet.create({
  orb: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'linear-gradient(90deg,#6ef3ff,#a7ffeb,#fff)',
    filter: 'blur(48px)',
    opacity: 0.7,
    left: '50%',
    top: '50%',
    transform: [{ translateX: -60 }, { translateY: -60 }],
    zIndex: 1,
  },
});

export default GlowOrb;
