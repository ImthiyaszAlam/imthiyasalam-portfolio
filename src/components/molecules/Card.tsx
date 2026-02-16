import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

export const Card: React.FC<ViewProps> = ({ style, children, ...props }) => (
  <View style={[styles.card, style]} {...props}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(0,0,0,0.55)', // glassmorphic black
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 4,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    // Web only: backdrop blur
    ...(typeof window !== 'undefined' ? {
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
    } : {}),
  },
});
