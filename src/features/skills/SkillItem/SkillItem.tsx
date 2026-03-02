import React, { memo } from "react";
import { Text, View, ViewStyle } from "react-native";
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
  return (
    <View style={[styles.container, style]}>
      <View style={styles.verticalItem}>
        <Text style={styles.name} numberOfLines={1}>
          {skill.name}
        </Text>
      </View>
    </View>
  );
};


export const SkillItem = memo(SkillItemComponent);
export default SkillItem;
