import React, { useState } from "react";
import { View, ViewStyle } from "react-native";
import { useTheme } from "../../../src/theme/ThemeContext";

interface HoverHighlightProps {
  children: React.ReactNode;
  hoverColor?: string;
  scaleOnHover?: boolean;
  style?: ViewStyle;
}

export const HoverHighlight: React.FC<HoverHighlightProps> = ({
  children,
  hoverColor,
  scaleOnHover = false,
  style,
}) => {
  const { theme } = useTheme();
  const { colors } = theme;
  const [isHovered, setIsHovered] = useState(false);

  // Only apply hover effect on web
  const isWeb = typeof window !== "undefined" && !!window.document;

  const backgroundColor = isHovered
    ? hoverColor || colors.backgroundSecondary
    : "transparent";

  const scale = isHovered && scaleOnHover ? 1.01 : 1;

  return (
    <View
      style={[
        style,
        {
          backgroundColor,
          transform: [{ scale }],
          transitionProperty: isWeb ? "background-color, transform" : undefined,
          transitionDuration: isWeb ? "180ms" : undefined,
          transitionTimingFunction: isWeb ? "ease" : undefined,
        },
      ]}
      onMouseEnter={isWeb ? () => setIsHovered(true) : undefined}
      onMouseLeave={isWeb ? () => setIsHovered(false) : undefined}
    >
      {children}
    </View>
  );
};

export default HoverHighlight;
