import React from "react";
import { Pressable, Text, View, ViewStyle } from "react-native";
import FadeInUpStagger from '../../components/ui/animation/FadeInUpStagger';
import GlowOrb from '../../components/ui/glow/GlowOrb';
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

  // Card hover state (for web)
  const [hovered, setHovered] = React.useState(false);

  return (
    <FadeInUpStagger>
      <Pressable
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
        style={({ pressed }) => [
          styles.card,
          hovered && styles.hovered,
            hovered
              ? {
                  padding: spacing.lg,
                  borderColor: theme.gradientBorder || '#6ef3ff',
                  borderWidth: 1,
                  boxShadow: 'none',
                }
              : {
                  padding: spacing.lg,
                  borderWidth: 0,
                  boxShadow: 'none',
                },
          style,
        ]}
        accessibilityRole="group"
      >
        <GlowOrb active={hovered} />
        <Text style={[styles.title, { color: colors.text, marginBottom: spacing.md }]}>{category.title}</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md, maxWidth: '100%' }}>
          {category.skills.map((skill, idx) => (
            <SkillItem
              key={skill.name}
              skill={skill}
              style={{ marginRight: idx !== category.skills.length - 1 ? spacing.md : 0, minWidth: 100, marginBottom: 0 }}
            />
          ))}
        </View>
      </Pressable>
    </FadeInUpStagger>
  );
};

export default SkillCategoryCard;
