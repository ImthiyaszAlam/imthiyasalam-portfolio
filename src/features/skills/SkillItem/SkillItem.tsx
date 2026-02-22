import React, { memo } from "react";
import { Pressable, Text, View, ViewStyle } from "react-native";
import { IconSymbol } from "../../../../components/ui/icon-symbol";
import GlowPulse from '../../../components/ui/animation/GlowPulse';
import ShimmerSweep from '../../../components/ui/animation/ShimmerSweep';
import { useTheme } from "../../../theme/ThemeContext";
import { Skill } from "../types";
import styles from "./SkillItem.styles";

interface SkillItemProps {
  skill: Skill;
  showPercent?: boolean;
  style?: ViewStyle;
}

const SkillItemComponent: React.FC<SkillItemProps> = ({ skill, showPercent = false, style }) => {
  const { theme } = useTheme();
  // Icon rendering: string or component
  const Icon = typeof skill.icon === "string" ? null : skill.icon;

  const [hovered, setHovered] = React.useState(false);

  return (
    <Pressable
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      style={({ pressed }) => [
        styles.container,
        hovered && styles.hovered,
        style,
      ]}
    >
      <GlowPulse active={hovered} />
      <View style={styles.row}>
        <View style={[
          styles.iconPlaceholder,
          hovered && styles.iconHovered,
        ]}> 
          {/* Render icon as actual icon, not text */}
          {typeof skill.icon === "string" ? (
            <IconSymbol name={skill.icon} size={24} style={styles.icon} />
          ) : (
            Icon ? <Icon width={24} height={24} style={styles.icon} /> : null
          )}
        </View>
        <View style={styles.nameContainer}>
          <Text style={[styles.name, hovered && styles.nameHovered]} numberOfLines={1}>
            {skill.name}
          </Text>
        </View>
      </View>
      <ShimmerSweep active={hovered} />
    </Pressable>
  );
};


export const SkillItem = memo(SkillItemComponent);
export default SkillItem;
