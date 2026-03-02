import React from "react";
import { Text, View, ViewStyle } from "react-native";
import { useTheme } from "../../theme/ThemeContext";
import styles from "./SkillCategoryCard.styles";
import { SkillItem } from "./SkillItem/SkillItem";
import { SkillCategory } from "./types";

interface SkillCategoryCardProps {
  category: SkillCategory;
  style?: ViewStyle;
}

export const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category, style }) => {
  const { theme } = useTheme();
  const { colors, spacing, shadows } = theme;

  return (
    <View style={[styles.card, { backgroundColor: colors.background, padding: spacing.lg, borderWidth: 0, boxShadow: 'none' }, style]}>
      {/* Removed GlowOrb and hover logic */}
      <Text style={[styles.title, { color: colors.textPrimary, marginBottom: spacing.md }]}>{category.title}</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md, maxWidth: '100%' }}>
        {category.skills.map((skill, idx) => (
          <SkillItem
            key={skill.name}
            skill={skill}
            style={{ marginRight: idx !== category.skills.length - 1 ? spacing.md : 0, minWidth: 100, marginBottom: 0 }}
          />
        ))}
      </View>
    </View>
  );
};

export default SkillCategoryCard;
