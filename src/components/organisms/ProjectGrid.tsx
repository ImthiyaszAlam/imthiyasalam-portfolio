import React from 'react';
import { StyleSheet, View } from 'react-native';

export const ProjectGrid: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <View style={styles.grid}>
    {React.Children.map(children, (child) => (
      <View style={styles.cardWrap}>{child}</View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 16,
    marginVertical: 16,
    width: '100%',
  },
  cardWrap: {
    width: '24%', // 4 cards per row, slight gap for spacing
    marginBottom: 16,
    flexGrow: 1,
    flexShrink: 1,
    alignItems: 'stretch',
  },
});
