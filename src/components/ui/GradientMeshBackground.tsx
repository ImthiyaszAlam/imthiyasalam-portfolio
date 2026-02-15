import React from 'react';
import { Platform, StyleSheet, View, useColorScheme } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

// Helper for theme colors
const getBlobColors = (colorScheme: 'light' | 'dark') => {
  if (colorScheme === 'dark') {
    return [
      ['#3a3a6a', '#1a1a2e'],
      ['#2e8bc0', '#145374'],
      ['#f6416c', '#ffde7d'],
    ];
  }
  return [
    ['#a8edea', '#fed6e3'],
    ['#fcb69f', '#ffecd2'],
    ['#89f7fe', '#66a6ff'],
  ];
};

const blobsConfig = [
  { size: 350, top: -60, left: -80, animX: 30, animY: 20, duration: 12000 },
  { size: 250, top: 200, left: 100, animX: -20, animY: 40, duration: 15000 },
  { size: 300, top: 400, left: -50, animX: 40, animY: -30, duration: 18000 },
];

const GradientMeshBackground: React.FC = () => {
  const colorScheme = useColorScheme() as 'light' | 'dark';
  const colors = getBlobColors(colorScheme);

  // Shared values for animation
  const anims = blobsConfig.map((cfg, i) => {
    const x = useSharedValue(0);
    const y = useSharedValue(0);
    React.useEffect(() => {
      x.value = withRepeat(withTiming(cfg.animX, { duration: cfg.duration }), -1, true);
      y.value = withRepeat(withTiming(cfg.animY, { duration: cfg.duration * 1.2 }), -1, true);
    }, []);
    return { x, y };
  });

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      {blobsConfig.map((cfg, i) => {
        const animatedStyle = useAnimatedStyle(() => ({
          transform: [
            { translateX: anims[i].x.value },
            { translateY: anims[i].y.value },
          ],
        }));
        return (
          <Animated.View
            key={i}
            style={[
              styles.blob,
              animatedStyle,
              {
                width: cfg.size,
                height: cfg.size,
                top: cfg.top,
                left: cfg.left,
                backgroundColor: colors[i][0],
                opacity: 0.18,
                shadowColor: colors[i][1],
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.5,
                shadowRadius: 80,
                // For web: heavy blur
                filter: 'blur(80px)',
              },
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  blob: {
    position: 'absolute',
    borderRadius: 9999,
    // For native: heavy blur (web uses filter)
    ...(Platform.OS !== 'web'
      ? {
          // @ts-ignore
          blurRadius: 80,
        }
      : {}),
  },
});

export default GradientMeshBackground;
