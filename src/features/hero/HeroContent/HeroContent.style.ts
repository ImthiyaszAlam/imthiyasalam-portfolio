import { StyleSheet } from "react-native";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export const heroContentStyles = StyleSheet.create({
  container: {
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
    alignItems: "center",
    width: "100%",
  },
  heading: {
    ...typography.display,
    marginBottom: spacing.md,
    textAlign: "center",
  },
  role: {
    ...typography.h2,
    marginBottom: spacing.sm,
    textAlign: "center",
  },
  description: {
    ...typography.body,
    textAlign: "center",
    maxWidth: 600,
  },
});
