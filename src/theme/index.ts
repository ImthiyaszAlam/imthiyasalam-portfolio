export * from "./ThemeContext";

import type { ColorPalette } from "./colors";
import { shadows } from "./shadows";
import { spacing } from "./spacing";
import type { Typography } from "./typography";

export type Theme = {
  colors: ColorPalette;
  typography: Typography;
  spacing: typeof spacing;
  shadows: typeof shadows;
  mode: "light" | "dark";
};
