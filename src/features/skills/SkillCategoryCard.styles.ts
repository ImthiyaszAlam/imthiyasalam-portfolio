import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
    position: "relative",
    overflow: "hidden",
    borderRadius: 20,
    // The rest will be applied dynamically in component
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
