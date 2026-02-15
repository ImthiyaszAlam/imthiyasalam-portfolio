import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { useTheme } from '../../theme';

export const Card: React.FC<ViewProps> = ({ style, children, ...props }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);
  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
};

function getStyles(theme: any) {
  return StyleSheet.create({
    card: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.radii.lg,
      padding: theme.spacing.lg,
      ...theme.shadows.md,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
  });
}
