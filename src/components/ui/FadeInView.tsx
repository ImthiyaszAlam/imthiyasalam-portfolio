import React, { useEffect } from 'react';
import { ViewProps } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface FadeInViewProps extends ViewProps {
  duration?: number;
  children: React.ReactNode;
}

export const FadeInView: React.FC<FadeInViewProps> = ({ duration = 400, style, children, ...props }) => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, { duration });
  }, [duration, opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={[animatedStyle, style]} {...props}>
      {children}
    </Animated.View>
  );
};
