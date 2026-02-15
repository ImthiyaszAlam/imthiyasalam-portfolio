import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { useTheme } from "../../theme/ThemeContext";
import { SkillItem } from "./SkillItem";
import { SkillCategory } from "./types";

interface SkillCategoryCardProps {
  category: SkillCategory;
  style?: ViewStyle;
}

export const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category, style }) => {
  const { theme } = useTheme();
  const { colors, spacing, shadows } = theme;

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.surface,
          borderRadius: spacing.lg,
          padding: spacing.lg,
          shadowColor: colors.shadow,
          ...shadows.card,
        },
        style,
      ]}
    >
      <Text style={[styles.title, { color: colors.text, marginBottom: spacing.md }]}>{category.title}</Text>
      <View>
        {category.skills.map((skill, idx) => (
          <SkillItem
            key={skill.name}
            skill={skill}
            style={idx !== category.skills.length - 1 ? { marginBottom: spacing.md } : undefined}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.2,
  },
});

export default SkillCategoryCard;
