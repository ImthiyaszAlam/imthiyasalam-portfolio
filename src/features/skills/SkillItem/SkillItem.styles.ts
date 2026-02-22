import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  hovered: {
    backgroundColor: "rgba(255,255,255,0.04)",
    // boxShadow and transition are not supported in React Native, so omit or use platform-specific workaround
    transform: [{ scale: 1.02 }],
  },
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
  iconHovered: {
    backgroundColor: "rgba(0,0,0,0.08)",
    // Add any additional hover effect for icon
  },
  nameHovered: {
    color: "#007AFF", // Example primary color, update as needed
    fontWeight: "bold",
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default styles;
