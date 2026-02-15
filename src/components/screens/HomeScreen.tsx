import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { HeroSection } from '../organisms/HeroSection';
import { ProjectGrid } from '../organisms/ProjectGrid';
import { TimelineList } from '../organisms/TimelineList';

export const HomeScreen: React.FC = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <HeroSection />
    <ProjectGrid />
    <TimelineList />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
