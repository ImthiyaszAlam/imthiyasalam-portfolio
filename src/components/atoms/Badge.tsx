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
    backgroundColor: '#FF4081',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: 'flex-start',
  },
  text: {
    color: '#fff',
    fontSize: 12,
  },
});
