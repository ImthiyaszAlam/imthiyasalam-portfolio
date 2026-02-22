import React, { useCallback, useMemo } from 'react';
import { Platform, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { IconSymbol } from '../../../components/ui/icon-symbol';
import { SectionId, useNavigation } from '../../app/navigation/NavigationProvider';
import { useTheme } from '../../theme/ThemeContext';
import Container from './Container';

const MENU = [
  { id: 'home', icon: 'house.fill' },
  { id: 'skills', icon: 'chevron.right' }, // Use mapped icon
  { id: 'projects', icon: 'chevron.left.forwardslash.chevron.right' }, // Use mapped icon
  { id: 'timeline', icon: 'paperplane.fill' }, // Use mapped icon
  { id: 'contact', icon: 'chevron.right' }, // Use mapped icon
];

const HEADER_HEIGHT = 64;

const Header: React.FC = React.memo(() => {
  const { theme } = useTheme();
  const { activeSection, scrollToSection, setActiveSection } = useNavigation();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  // Shadow on scroll: use CSS for web, fallback to always-on for mobile
  // For demo, always show shadow (can be improved with scroll state)
  const shadowStyle = Platform.OS === 'web'
    ? { boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }
    : theme.shadows.md;

  const blurStyle = Platform.OS === 'web'
    ? { backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }
    : {};

  const handleMenuPress = useCallback(
    (id: SectionId) => () => {
      setActiveSection(id);
      scrollToSection(id);
    },
    [scrollToSection, setActiveSection]
  );

  const menu = useMemo(
    () => (
      <View style={[styles.menu, isMobile && styles.menuMobile]} accessibilityRole="menubar">
        {MENU.map((item) => (
          <Pressable
            key={item.id}
            onPress={handleMenuPress(item.id as SectionId)}
            accessibilityRole="menuitem"
            accessibilityState={{ selected: activeSection === item.id }}
            style={({ pressed }) => [
              styles.menuItem,
              activeSection === item.id && styles.menuItemActive,
              pressed && { opacity: 0.7 },
            ]}
          >
            <IconSymbol
              name={item.icon as any}
              size={24}
              color={activeSection === item.id ? theme.colors.primary : theme.colors.text}
              style={activeSection === item.id ? styles.menuTextActive : styles.menuText}
            />
          </Pressable>
        ))}
      </View>
    ),
    [activeSection, handleMenuPress, isMobile, theme.colors.primary]
  );

  return (
    <View
      style={[
        styles.sticky,
        { backgroundColor: theme.colors.surface, height: HEADER_HEIGHT },
        shadowStyle,
        blurStyle,
      ]}
      // accessibilityRole="banner" // Not valid in React Native, remove or replace
    >
      <Container style={styles.container}>
        <View style={styles.logoBox}>
          <Text style={[styles.logoText, { color: theme.colors.primary }]}>Logo</Text>
        </View>
        {menu}
      </Container>
    </View>
  );
});

Header.displayName = 'Header';

const styles = StyleSheet.create({
  sticky: {
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: 100,
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 0,
  },
  logoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 80,
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: 22,
    letterSpacing: 1.2,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },
  menuMobile: {
    gap: 12,
  },
  menuItem: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
    // cursor: 'pointer', // Not valid in React Native
    // outlineStyle: 'none', // Not valid in React Native
  },
  menuItemActive: {
    backgroundColor: '#0070f3',
    borderBottomWidth: 3,
    borderBottomColor: '#0070f3',
  },
  menuText: {
    fontSize: 16,
    color: '#444',
    fontWeight: '500',
  },
  menuTextActive: {
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: '#0070f3',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});

export default Header;
