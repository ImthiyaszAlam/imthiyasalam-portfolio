import React, { memo } from "react";
import { View, Text, ViewStyle } from "react-native";
import { IconSymbol } from "../../../../components/ui/icon-symbol";
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

  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        <View style={styles.iconPlaceholder}>
          {/* Render icon as actual icon, not text */}
          {typeof skill.icon === "string" ? (
            <IconSymbol name={skill.icon} size={24} style={styles.icon} />
          ) : (
            Icon ? <Icon width={24} height={24} style={styles.icon} /> : null
          )}
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name} numberOfLines={1}>
            {skill.name}
          </Text>
        </View>
      </View>
    </View>
  );
};


export const SkillItem = memo(SkillItemComponent);
export default SkillItem;
