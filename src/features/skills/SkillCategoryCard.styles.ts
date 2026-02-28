import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: "100%",
    maxWidth: "100%",
    alignSelf: "stretch",
    position: "relative",
    overflow: "hidden",
    borderRadius: 20,
    backgroundColor: "rgba(63, 58, 58, 0.1)",
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.35)",
    shadowColor: "#6ef3ff",
    shadowOpacity: 0.18,
    shadowRadius: 32,
    shadowOffset: { width: 0, height: 12 },
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 0.2,
    textShadowColor: "rgba(0,0,0,0.12)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  hovered: {
    zIndex: 2,
    // Add more hover-specific styles if needed
  },
});

export default styles;
