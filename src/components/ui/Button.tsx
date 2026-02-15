import React from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import { useTheme } from '../../theme';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  variant?: ButtonVariant;
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  variant = 'primary',
  style,
}) => {
  const { theme } = useTheme();
  const styles = getStyles(theme, variant);

  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed, style]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.text} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </Pressable>
  );
};

function getStyles(theme: any, variant: ButtonVariant) {
  let backgroundColor, borderColor, textColor;
  switch (variant) {
    case 'primary':
      backgroundColor = theme.colors.primary;
      borderColor = theme.colors.primary;
      textColor = '#fff';
      break;
    case 'secondary':
      backgroundColor = theme.colors.surface;
      borderColor = theme.colors.primary;
      textColor = theme.colors.primary;
      break;
    case 'ghost':
      backgroundColor = 'transparent';
      borderColor = 'transparent';
      textColor = theme.colors.primary;
      break;
  }
  return StyleSheet.create({
    button: {
      backgroundColor,
      borderColor,
      borderWidth: 1,
      borderRadius: theme.radii.md,
      paddingVertical: theme.spacing.sm,
      paddingHorizontal: theme.spacing.lg,
      alignItems: 'center',
      flexDirection: 'row',
      minHeight: 44,
    },
    pressed: {
      opacity: 0.7,
    },
    text: {
      color: textColor,
      fontWeight: 'bold',
      fontSize: theme.typography.fontSize.body,
    },
  });
}
