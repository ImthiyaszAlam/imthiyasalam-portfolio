import React from 'react';
import { StyleSheet, View } from 'react-native';

export const ProjectGrid: React.FC = () => (
  <View style={styles.grid}>
    {/* Example: <Card>Project 1</Card> */}
  </View>
);

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
    marginVertical: 16,
  },
});
