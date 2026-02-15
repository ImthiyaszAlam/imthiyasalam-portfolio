import React, { useEffect } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useTheme } from "../../theme/ThemeContext";

interface SkillProgressBarProps {
  level: number; // 0–100
  duration?: number; // ms, default 800
  style?: ViewStyle;
}

const BAR_HEIGHT = 8;

export const SkillProgressBar: React.FC<SkillProgressBarProps> = ({
  level,
  duration = 800,
  style,
}) => {
  const { theme } = useTheme();
  const { colors } = theme;
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(level, { duration });
  }, [level, duration, progress]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${progress.value}%`,
  }));

  return (
    <View
      style={[
        styles.track,
        { backgroundColor: colors.border, height: BAR_HEIGHT },
        style,
      ]}
    >
      <Animated.View
        style={[
          styles.fill,
          animatedStyle,
          { backgroundColor: colors.primary, height: BAR_HEIGHT },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  track: {
    width: "100%",
    borderRadius: BAR_HEIGHT / 2,
    overflow: "hidden",
  },
  fill: {
    height: BAR_HEIGHT,
    borderRadius: BAR_HEIGHT / 2,
  },
});

export default SkillProgressBar;
