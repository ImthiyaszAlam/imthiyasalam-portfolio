import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // Removed width: '100%' to allow horizontal alignment in parent
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
  icon: {
    width: 24,
    height: 24,
  },
});

export default styles;
