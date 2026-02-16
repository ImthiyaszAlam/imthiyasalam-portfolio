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
  // Always use black glassmorphic background
  const backgroundColor = 'rgba(0,0,0,0.55)';
  // Border is orange glassy
  const borderColor = 'rgba(255,136,0,0.18)';

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
    borderColor: 'rgba(255,136,0,0.18)',
    shadowColor: '#FF8800',
    shadowOpacity: 0.18,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4, // Android shadow
    overflow: Platform.OS === 'web' ? 'visible' : 'hidden',
  },
});

export default GlassCard;
