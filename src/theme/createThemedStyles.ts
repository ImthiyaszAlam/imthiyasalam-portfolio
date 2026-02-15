import { StyleSheet } from "react-native";
import { Theme } from "./ThemeContext";

/**
 * Helper to create themed styles with full type safety.
 * Usage:
 *   const useStyles = createThemedStyles(theme => ({
 *     container: { backgroundColor: theme.colors.background },
 *   }));
 *   const styles = useStyles(theme);
 */
export function createThemedStyles<
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
>(stylesFn: (theme: Theme) => T) {
  return (theme: Theme) => StyleSheet.create(stylesFn(theme));
}
