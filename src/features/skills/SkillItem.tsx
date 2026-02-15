import React, { memo } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { useTheme } from "../../theme/ThemeContext";
import { SkillProgressBar } from "./SkillProgressBar";
import { Skill } from "./types";

interface SkillItemProps {
  skill: Skill;
  showPercent?: boolean;
  style?: ViewStyle;
}

const SkillItemComponent: React.FC<SkillItemProps> = ({ skill, showPercent = false, style }) => {
  const { theme } = useTheme();
  const { colors, spacing } = theme;
  // Icon rendering: string or component
  const Icon = typeof skill.icon === "string" ? null : skill.icon;

  return (
    <View style={[styles.container, { marginBottom: spacing.md }, style]}>
      <View style={styles.row}>
        <View style={[styles.iconPlaceholder, { backgroundColor: colors.backgroundSecondary }]}> 
          {Icon ? <Icon width={24} height={24} color={colors.primary} /> : null}
          {/* If using string icons, replace with your icon system */}
        </View>
        <View style={styles.nameContainer}>
          <Text style={[styles.name, { color: colors.text }]} numberOfLines={1}>
            {skill.name}
          </Text>
          {showPercent && (
            <Text style={[styles.percent, { color: colors.textSecondary }]}> 
              {skill.level}%
            </Text>
          )}
        </View>
      </View>
      <SkillProgressBar level={skill.level} style={{ marginTop: spacing.xs }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconPlaceholder: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  nameContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    flexShrink: 1,
  },
  percent: {
    fontSize: 14,
    marginLeft: 8,
  },
});

export const SkillItem = memo(SkillItemComponent);
export default SkillItem;
