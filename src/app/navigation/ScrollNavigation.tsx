import React, { useRef, useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Section {
  key: string;
  label: string;
}

interface ScrollNavigationProps {
  sections: Section[];
}

export const ScrollNavigation: React.FC<ScrollNavigationProps> = ({ sections }) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const sectionRefs = useRef<Record<string, View | null>>({});
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.key);

  // Scroll to section
  const handleNavPress = (key: string) => {
    const ref = sectionRefs.current[key];
    if (ref && 'measureLayout' in ref && scrollViewRef.current) {
      (ref as any).measureLayout(
        scrollViewRef.current.getInnerViewNode(),
        (_x: number, y: number) => {
          scrollViewRef.current?.scrollTo({ y, animated: true });
        },
        () => {}
      );
    }
  };

  // Detect active section on scroll
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    let found = sections[0]?.key;
    for (const section of sections) {
      const ref = sectionRefs.current[section.key];
      if (ref && 'measureLayout' in ref && scrollViewRef.current) {
        (ref as any).measureLayout(
          scrollViewRef.current.getInnerViewNode(),
          (_x: number, y: number, _w: number, h: number) => {
            if (scrollY >= y - 10 && scrollY < y + h - 10) {
              found = section.key;
              setActiveSection(section.key);
            }
          },
          () => {}
        );
      }
    }
    setActiveSection(found);
  };

  return (
    <View style={styles.container}>
      {/* Sticky Header */}
      <View style={styles.stickyHeader}>
        {sections.map((section) => (
          <TouchableOpacity
            key={section.key}
            onPress={() => handleNavPress(section.key)}
            style={[
              styles.navItem,
              activeSection === section.key && styles.activeNavItem,
            ]}
          >
            <Text
              style={[
                styles.navText,
                activeSection === section.key && styles.activeNavText,
              ]}
            >
              {section.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Scrollable Sections */}
      <ScrollView
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scrollView}
        contentContainerStyle={{ paddingTop: 60 }}
      >
        {sections.map((section) => (
          <View
            key={section.key}
            ref={(ref) => (sectionRefs.current[section.key] = ref)}
            style={styles.section}
          >
            <Text style={styles.sectionTitle}>{section.label}</Text>
            {/* Section content goes here */}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  stickyHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingHorizontal: 16,
  },
  navItem: {
    marginRight: 24,
    paddingVertical: 8,
  },
  activeNavItem: {
    borderBottomWidth: 2,
    borderBottomColor: '#0070f3',
  },
  navText: {
    fontSize: 16,
    color: '#333',
  },
  activeNavText: {
    color: '#0070f3',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  section: {
    minHeight: 400,
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fafbfc',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#0070f3',
  },
});
