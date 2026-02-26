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
          {
            backgroundColor: theme.glassBackground || 'rgba(30,30,40,0.7)',
            padding: spacing.lg,
            shadowColor: theme.glowPrimary || colors.shadow,
            ...shadows.card,
            backdropFilter: 'blur(24px)',
            borderWidth: 2,
            borderColor: hovered ? theme.gradientBorder || '#6ef3ff' : 'rgba(255,255,255,0.12)',
            boxShadow: hovered ? '0 8px 32px 0 rgba(80,200,255,0.25)' : '0 4px 16px 0 rgba(30,30,40,0.15)',
            transform: [{ translateY: hovered ? -8 : 0 }, { scale: hovered ? 1.02 : 1 }],
            transition: 'all 200ms cubic-bezier(0.4,0.2,0.2,1)',
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
