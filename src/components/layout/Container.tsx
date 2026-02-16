import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from "react-native";
import { useTheme } from "../../theme";

export interface ContainerProps extends Omit<ViewProps, 'style'> {
  /** Content to render inside the container */
  children: ReactNode;
  /** Maximum width of the container (default: 1200) */
  maxWidth?: number;
  /** If true, container is full width (no maxWidth constraint) */
  fluid?: boolean;
  /** Custom style override */
  style?: StyleProp<ViewStyle>;
}

const Container: React.FC<ContainerProps> = React.memo(
  ({
    children,
    maxWidth = 1200,
    fluid = false,
    style,
    ...props
  }) => {
    const theme = useTheme();
    // Responsive horizontal padding: use theme.spacing (e.g., 16 for mobile, 24 for tablet, 32 for desktop)
    // For simplicity, use a fixed value from theme.spacing, or you can enhance with breakpoints if available
    const horizontalPadding = theme.spacing?.horizontal ?? theme.spacing?.md ?? 16;

    // Compose styles
    const containerStyle: StyleProp<ViewStyle> = [
      styles.base,
      { alignSelf: "center", width: "100%", paddingHorizontal: horizontalPadding },
      !fluid && { maxWidth },
      style,
    ];

    return (
      <View style={containerStyle} {...props}>
        {children}
      </View>
    );
  }
);

Container.displayName = "Container";

const styles = StyleSheet.create({
  base: {
    width: "100%",
    // backgroundColor: 'rgba(0,0,0,0.55)', // glassmorphic black
    // borderRadius: 20,
    // borderWidth: 1,
    // borderColor: 'rgba(255,255,255,0.12)',
    // Web only: backdrop blur
    ...(typeof window !== 'undefined' ? {
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
    } : {}),
  },
});

export default Container;
