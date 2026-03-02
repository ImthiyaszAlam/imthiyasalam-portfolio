import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import Section from "../../components/layout/Section";
import SectionHeader from '../../components/layout/SectionHeader';
import AnimatedBackground from '../../components/ui/glow/AnimatedBackground';
import { useTheme } from "../../theme/ThemeContext";
import { SkillsGrid } from "./SkillsGrid";
import { skillCategories } from "./data";

interface SkillsSectionProps {
  subtitle?: string;
  style?: ViewStyle;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ subtitle, style }) => {
  const { theme } = useTheme();
  const { spacing } = theme;

  return (
    <Section id="skills" background="transparent" style={[styles.section, style]}>
      <AnimatedBackground />
      <SectionHeader
        title="Technical Expertise"
        subtitle={subtitle || "Technologies I use to build scalable, high-performance systems."}
        accessibilityLabel="Technical Expertise"
        style={{ marginBottom: spacing.lg, zIndex: 2 }}
      />
      <SkillsGrid categories={skillCategories} />
    </Section>
  );
};

const styles = StyleSheet.create({
  section: {
    width: "100%",
    alignItems: "center",
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
    letterSpacing: 1,
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    maxWidth: 600,
    lineHeight: 28,
    marginTop: 2,
  },
});

export default SkillsSection;
