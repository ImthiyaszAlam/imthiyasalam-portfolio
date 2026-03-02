import React from 'react';
import { StyleSheet, View } from 'react-native';
import SectionHeader from '../layout/SectionHeader';

export const HeroSection: React.FC = () => (
  <View style={styles.container}>
    <SectionHeader
      title="Welcome to My Portfolio"
      subtitle="React Native Developer"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0070f3',
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    marginTop: 8,
  },
});
