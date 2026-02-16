import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface FadeInUpStaggerProps {
  children: React.ReactNode;
  stagger?: number;
}

const FadeInUpStagger: React.FC<FadeInUpStaggerProps> = ({ children, stagger = 80 }) => {
  // Wrap children in staggered fade-in-up animation
  const childArray = React.Children.toArray(children);
  return (
    <View style={styles.container}>
      {childArray.map((child, idx) => {
        const translateY = useSharedValue(40);
        const opacity = useSharedValue(0);
        React.useEffect(() => {
          setTimeout(() => {
            translateY.value = withTiming(0, { duration: 600, easing: Easing.out(Easing.cubic) });
            opacity.value = withTiming(1, { duration: 600, easing: Easing.out(Easing.cubic) });
          }, idx * stagger);
        }, []);
        const animatedStyle = useAnimatedStyle(() => ({
          transform: [{ translateY: translateY.value }, { scale: 0.96 + 0.04 * opacity.value }],
          opacity: opacity.value,
        }));
        return (
          <Animated.View key={idx} style={animatedStyle}>
            {child}
          </Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default FadeInUpStagger;
