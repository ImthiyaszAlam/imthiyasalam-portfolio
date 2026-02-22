import { StyleSheet } from "react-native";

export const heroVisualStyles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    margin: 0,
  },
  centerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  placeholderText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    opacity: 0.85,
    textAlign: "center",
  },
});
