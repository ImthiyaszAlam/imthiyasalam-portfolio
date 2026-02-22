import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import Section from "../../components/layout/Section";
import FadeInUpStagger from '../../components/ui/animation/FadeInUpStagger';
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
    <Section id="skills" background="transparent" style={[styles.section, style]} accessibilityRole="section">
      <AnimatedBackground />
      <FadeInUpStagger>
        <View style={{ alignItems: "center", marginBottom: spacing.lg, zIndex: 2 }}>
          <Text style={styles.title}>Technical Expertise</Text>
          <Text style={styles.subtitle}>
            {subtitle || "Technologies I use to build scalable, high-performance systems."}
          </Text>
        </View>
        <SkillsGrid categories={skillCategories} />
      </FadeInUpStagger>
    </Section>
  );
};

const styles = StyleSheet.create({
  section: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 64,
    paddingHorizontal: 24,
    minHeight: 600,
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
    color: '#fff',
    letterSpacing: 1,
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#cfd8dc',
    textAlign: 'center',
    maxWidth: 600,
    lineHeight: 28,
    marginTop: 2,
  },
});

export default SkillsSection;
