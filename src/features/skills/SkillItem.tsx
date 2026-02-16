import React, { memo } from "react";
import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
import GlowPulse from '../../components/ui/animation/GlowPulse';
import ShimmerSweep from '../../components/ui/animation/ShimmerSweep';
import { useTheme } from "../../theme/ThemeContext";
import CinematicProgressBar from './CinematicProgressBar';
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

  const [hovered, setHovered] = React.useState(false);

  return (
    <Pressable
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: hovered ? 'rgba(255,255,255,0.04)' : 'transparent',
          borderRadius: 12,
          boxShadow: hovered ? '0 2px 16px 0 rgba(80,200,255,0.12)' : 'none',
          transform: [{ scale: hovered ? 1.02 : 1 }],
          transition: 'all 200ms cubic-bezier(0.4,0.2,0.2,1)',
        },
        style,
      ]}
      accessibilityRole="listitem"
    >
      <GlowPulse active={hovered} />
      <View style={styles.row}>
        <View style={[styles.iconPlaceholder, { backgroundColor: colors.backgroundSecondary }]}> 
          {Icon ? <Icon width={24} height={24} color={colors.primary} /> : null}
        </View>
        <View style={styles.nameContainer}>
          <Text style={[styles.name, { color: hovered ? theme.glowPrimary || colors.primary : colors.text }]} numberOfLines={1}>
            {skill.name}
          </Text>
          {showPercent && (
            <Text style={[styles.percent, { color: hovered ? theme.glowPrimary || colors.primary : colors.textSecondary }]}> 
              {hovered ? `${skill.level}%` : ''}
            </Text>
          )}
        </View>
      </View>
      <CinematicProgressBar level={skill.level} hovered={hovered} style={{ marginTop: spacing.xs }} />
      <ShimmerSweep active={hovered} />
    </Pressable>
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
