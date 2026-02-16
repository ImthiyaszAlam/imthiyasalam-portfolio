import React from 'react';
import { StyleSheet, Text, View, ViewProps } from 'react-native';

interface BadgeProps extends ViewProps {
  label: string;
}

export const Badge: React.FC<BadgeProps> = ({ label, style, ...props }) => (
  <View style={[styles.badge, style]} {...props}>
    <Text style={styles.text}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  badge: {
    backgroundColor: 'rgba(255,136,0,0.85)', // orange glassy
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.18)',
    // Web only: backdrop blur
    ...(typeof window !== 'undefined' ? {
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
    } : {}),
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});
