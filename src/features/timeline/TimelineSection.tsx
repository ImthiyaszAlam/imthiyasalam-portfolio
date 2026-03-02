import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Section from '../../components/layout/Section';
import TimelineList from '../../components/organisms/TimelineList';
import GlassCard from '../../components/ui/GlassCard';
import { useTheme } from '../../theme/ThemeContext';

const TIMELINE = [
  { year: '2026', title: 'Started new adventure', description: 'Began a new journey in tech innovation.' },
  { year: '2024', title: 'Graduated', description: 'Completed my degree in Computer Science.' },
  { year: '2022', title: 'Internship', description: 'Worked as a software engineering intern at TechCorp.' },
  { year: '2020', title: 'First App', description: 'Launched my first mobile application.' },
  { year: '2019', title: 'Open Source Contributor', description: 'Contributed to open source projects and communities.' },
  { year: '2018', title: 'Hackathon Winner', description: 'Won first place in a national hackathon.' },
  { year: '2017', title: 'Started Coding', description: 'Wrote my first lines of code.' },
  { year: '2016', title: 'High School Graduate', description: 'Graduated from high school with honors.' },
];

const TimelineSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Section id="timeline" background="transparent">
      <View style={styles.headingWrap}>
        <Text
          style={[styles.title, { color: theme.colors.text, fontSize: theme.typography.h1.fontSize }]}
          accessibilityRole="header"
        >
          Timeline
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.textSecondary, fontSize: theme.typography.body.fontSize }]}
          accessibilityRole="text"
        >
          A brief journey through my milestones.
        </Text>
      </View>
      <GlassCard style={{ width: '100%', alignSelf: 'stretch', marginLeft: 0, marginRight: 0, paddingHorizontal: 0 }}>
        <TimelineList timeline={TIMELINE} />
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
});

export default TimelineSection;
