import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useTheme } from '../../theme/ThemeContext';

interface CinematicProgressBarProps {
  level: number;
  hovered?: boolean;
  style?: ViewStyle;
}

const CinematicProgressBar: React.FC<CinematicProgressBarProps> = ({ level, hovered, style }) => {
  const { theme } = useTheme();
  const { gradientSkill, glowPrimary, spacing } = theme;
  const progress = useSharedValue(0);

  React.useEffect(() => {
    progress.value = withTiming(level / 100, {
      duration: 800,
      easing: Easing.out(Easing.cubic),
    });
  }, [level]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
    shadowColor: glowPrimary || '#6ef3ff',
    shadowRadius: hovered ? 16 : 8,
    shadowOpacity: hovered ? 0.25 : 0.12,
    backgroundColor: 'transparent',
  }));

  return (
    <View style={[styles.track, { backgroundColor: theme.glassBackground || 'rgba(255,255,255,0.08)' }, style]}>
      <Animated.View style={[styles.fill, animatedStyle, { background: gradientSkill || 'linear-gradient(90deg,#6ef3ff,#a7ffeb,#fff)' }]} />
      {/* Optional: Add shimmer/particle effects here */}
    </View>
  );
};

const styles = StyleSheet.create({
  track: {
    height: 16,
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
    position: 'relative',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    boxShadow: '0 2px 16px 0 rgba(80,200,255,0.12)',
  },
  fill: {
    height: '100%',
    borderRadius: 8,
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: '#6ef3ff',
    boxShadow: '0 0 24px 0 #6ef3ff',
  },
});

export default CinematicProgressBar;
