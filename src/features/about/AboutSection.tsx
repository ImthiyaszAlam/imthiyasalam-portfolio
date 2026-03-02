

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Section from '../../components/layout/Section';
import GlassCard from '../../components/ui/GlassCard';
import { useTheme } from '../../theme/ThemeContext';

const ABOUT = {
  title: 'About',
  subtitle: 'A brief introduction about myself.',
  description:
    'I am a passionate developer with experience in building modern web and mobile applications. I love working with new technologies and creating impactful solutions. Feel free to explore my portfolio and reach out for collaboration!'
};

const AboutSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Section id="about" background="transparent">
      <View style={styles.headingWrap}>
        <Text
          style={[styles.title, { color: theme.colors.textPrimary, fontSize: theme.typography.h1.fontSize }]}
          accessibilityRole="header"
        >
          {ABOUT.title}
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.textSecondary, fontSize: theme.typography.body.fontSize }]}
          accessibilityRole="text"
        >
          {ABOUT.subtitle}
        </Text>
      </View>
      <GlassCard style={{ width: '100%', alignSelf: 'stretch', marginLeft: 0, marginRight: 0, paddingHorizontal: 0 }}>
        <Text style={[styles.description, { color: theme.colors.textPrimary, fontSize: theme.typography.body.fontSize }]}> 
          {ABOUT.description}
        </Text>
      </GlassCard>
    </Section>
  );
};

const styles = StyleSheet.create({
  headingWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 32,
  },
  title: {
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },
  subtitle: {
    marginTop: 8,
    textAlign: 'center',
  },
  description: {
    marginTop: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default AboutSection;
