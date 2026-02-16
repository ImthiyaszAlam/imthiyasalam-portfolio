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

  let columns = 1;
  if (breakpoint === "tablet") columns = 2;
  if (breakpoint === "desktop") columns = 3;

  // Split categories into rows for the grid
  const rows: SkillCategory[][] = [];
  for (let i = 0; i < categories.length; i += columns) {
    rows.push(categories.slice(i, i + columns));
  }

  return (
    <FadeInUpStagger>
      <View style={[styles.grid, { gap: spacing.lg }, style]}>
        {rows.map((row, rowIdx) => (
          <View
            key={rowIdx}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: spacing.lg,
              marginBottom: rowIdx !== rows.length - 1 ? spacing.lg : 0,
            }}
          >
            {row.map((cat) => (
              <View key={cat.title} style={{ flex: 1, minWidth: 0 }}>
                <SkillCategoryCard category={cat} />
              </View>
            ))}
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
