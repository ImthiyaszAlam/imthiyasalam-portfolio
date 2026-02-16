import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface ShimmerSweepProps {
  active?: boolean;
}

const ShimmerSweep: React.FC<ShimmerSweepProps> = ({ active }) => {
  const shimmer = useSharedValue(0);

  React.useEffect(() => {
    if (active) {
      shimmer.value = withTiming(1, { duration: 800, easing: Easing.inOut(Easing.cubic) });
    } else {
      shimmer.value = withTiming(0, { duration: 400, easing: Easing.inOut(Easing.cubic) });
    }
  }, [active]);

  const animatedStyle = useAnimatedStyle(() => ({
    left: `${shimmer.value * 100}%`,
    opacity: shimmer.value,
  }));

  return (
    <View style={styles.container} pointerEvents="none">
      <Animated.View style={[styles.shimmer, animatedStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    zIndex: 2,
    pointerEvents: 'none',
  },
  shimmer: {
    position: 'absolute',
    width: 48,
    height: '100%',
    borderRadius: 24,
    backgroundColor: 'linear-gradient(90deg,#fff,#6ef3ff,#fff)',
    filter: 'blur(16px)',
    opacity: 0.7,
  },
});

export default ShimmerSweep;
