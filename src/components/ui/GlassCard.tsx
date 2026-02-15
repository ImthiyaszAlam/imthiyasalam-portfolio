import React from 'react';
import { Platform, StyleProp, StyleSheet, useColorScheme, View, ViewProps, ViewStyle } from 'react-native';

interface GlassCardProps extends ViewProps {
  children?: React.ReactNode;
  padding?: number;
  style?: StyleProp<ViewStyle>;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  padding = 20,
  style,
  ...rest
}) => {
  const colorScheme = useColorScheme() as 'light' | 'dark';
  const backgroundColor =
    colorScheme === 'dark'
      ? 'rgba(30, 32, 38, 0.55)'
      : 'rgba(255, 255, 255, 0.55)';
  const borderColor =
    colorScheme === 'dark'
      ? 'rgba(255,255,255,0.10)'
      : 'rgba(255,255,255,0.18)';

  return (
    <View
      pointerEvents={rest.pointerEvents}
      style={[
        styles.card,
        {
          backgroundColor,
          borderColor,
          padding,
          // Web only: backdrop blur
          ...(Platform.OS === 'web'
            ? {
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
              }
            : {}),
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4, // Android shadow
    overflow: Platform.OS === 'web' ? 'visible' : 'hidden',
  },
});

export default GlassCard;
