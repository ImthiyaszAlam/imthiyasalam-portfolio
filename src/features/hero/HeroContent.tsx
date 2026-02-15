import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

interface HeroContentProps {
  name: string;
  role: string;
  description: string;
}

export const HeroContent: React.FC<HeroContentProps> = ({ name, role, description }) => {
  const { theme } = useTheme();
  const { colors } = theme;

  return (
    <View style={styles.container} accessible accessibilityRole="header">
      <Text
        accessibilityRole="header"
        style={[styles.heading, { color: colors.text }]}
        accessibilityLevel={1}
      >
        {name}
      </Text>
      <Text
        accessibilityRole="header"
        style={[styles.role, { color: colors.primary }]}
        accessibilityLevel={2}
      >
        {role}
      </Text>
      <Text style={[styles.description, { color: colors.textSecondary }]} accessibilityRole="text">
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    width: '100%',
  },
  heading: {
    ...typography.display,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  role: {
    ...typography.h2,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  description: {
    ...typography.body,
    textAlign: 'center',
    maxWidth: 600,
  },
  // Responsive styles will be handled via media queries or platform-specific logic if needed
});

export default HeroContent;
