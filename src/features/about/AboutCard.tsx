import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Text } from '../../components/atoms/Text';
import { useTheme } from '../../theme/ThemeContext';

interface AboutCardProps extends ViewProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const AboutCard: React.FC<AboutCardProps> = ({ title, description, children, style, ...rest }) => {
  const { theme } = useTheme();
  return (
    <View style={[styles.glass, style]} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.description, { color: theme.colors.textSecondary }]}>{description}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  glass: {
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'flex-start',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 32,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.35)',
    overflow: 'hidden',
    // Web glassmorphism: blur and gradient overlay
    ...((typeof window !== 'undefined') && {
      backdropFilter: 'blur(18px) saturate(180%)',
      WebkitBackdropFilter: 'blur(18px) saturate(180%)',
      background: 'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.10) 100%)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      border: '1px solid rgba(255,255,255,0.18)',
      minHeight: '100px',
      minWidth: '150px',
      height: '100px',
      width: '150px',
    }),
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff',
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  description: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.85,
    textAlign: 'left',
    alignSelf: 'stretch',
  },
});
