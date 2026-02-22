import React from 'react';
import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from 'react-native';

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
  // Removed background, border, and colorScheme

  return (
    <View
      pointerEvents={rest.pointerEvents}
      style={[{ padding }, style]}
      {...rest}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  // All effects removed
});

export default GlassCard;
