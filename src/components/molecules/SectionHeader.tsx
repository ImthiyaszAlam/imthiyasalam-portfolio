import React from 'react';
import { StyleSheet, Text, View, ViewProps } from 'react-native';

interface SectionHeaderProps extends ViewProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, style, ...props }) => (
  <View style={[styles.container, style]} {...props}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0070f3',
  },
});
