import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import Section from "../../components/layout/Section";
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
    <Section id="skills" style={[styles.section, style]}>
      <View style={{ alignItems: "center", marginBottom: spacing.lg }}>
        <Text style={styles.title}>Technical Skills</Text>
        {subtitle ? (
          <Text style={styles.subtitle}>{subtitle}</Text>
        ) : null}
      </View>
      <SkillsGrid categories={skillCategories} />
    </Section>
  );
};

const styles = StyleSheet.create({
  section: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 2,
  },
});

export default SkillsSection;
