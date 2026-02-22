import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import Header from './Header';

const HEADER_HEIGHT = 64;

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Header />
      <ScrollView
        style={[styles.scroll, { backgroundColor: theme.colors.background }]}
        contentContainerStyle={[styles.content, { paddingTop: 0, paddingBottom: 0 }]}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  scroll: {
    flex: 1,
    width: '100%',
  },
  content: {
    minHeight: '100%',
    paddingBottom: 40,
  },
});
