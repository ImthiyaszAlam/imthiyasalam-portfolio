import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  style?: ViewStyle;
  accessibilityLabel?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  style,
  accessibilityLabel,
}) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.headingWrap, { marginBottom: theme.spacing.xl }, style]}>
      <Text
        style={[styles.title, { color: theme.colors.textPrimary, fontSize: theme.typography.h1.fontSize }]}
        accessibilityRole="header"
        accessibilityLabel={accessibilityLabel || title}
      >
        {title}
      </Text>
      {subtitle ? (
        <Text
          style={[styles.subtitle, { color: theme.colors.textSecondary, fontSize: theme.typography.body.fontSize }]}
          accessibilityRole="text"
        >
          {subtitle}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  headingWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 0,
    maxWidth: 480,
  },
});

export default SectionHeader;
