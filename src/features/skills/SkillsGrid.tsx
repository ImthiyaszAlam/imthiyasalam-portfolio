import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import FadeInUpStagger from '../../components/ui/animation/FadeInUpStagger';
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useTheme } from "../../theme/ThemeContext";
import { SkillCategoryCard } from "./SkillCategoryCard";
import { SkillCategory } from "./types";

interface SkillsGridProps {
  categories: SkillCategory[];
  style?: ViewStyle;
}

const SkillsGridComponent: React.FC<SkillsGridProps> = ({ categories, style }) => {
  const { theme } = useTheme();
  const { spacing } = theme;
  const breakpoint = useBreakpoint();

  return (
    <FadeInUpStagger>
      <View style={[styles.grid, { gap: spacing.lg, flexDirection: 'column' }, style]}>
        {categories.map((cat) => (
          <View key={cat.title} style={{ width: '100%', marginBottom: spacing.lg }}>
            <SkillCategoryCard category={cat} />
          </View>
        ))}
      </View>
    </FadeInUpStagger>
  );
};

const styles = StyleSheet.create({
  grid: {
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
  },
});

export const SkillsGrid = memo(SkillsGridComponent);
export default SkillsGrid;
