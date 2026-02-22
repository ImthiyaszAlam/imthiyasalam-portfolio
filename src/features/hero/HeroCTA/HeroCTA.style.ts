import { StyleSheet } from "react-native";

export const heroCTAStyles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
  },
  containerRow: {
    flexDirection: "row",
    gap: 16,
  },
  containerStacked: {
    flexDirection: "column",
    gap: 12,
  },
  buttonRow: {
    marginRight: 16,
  },
  buttonStacked: {
    marginBottom: 12,
  },
});
