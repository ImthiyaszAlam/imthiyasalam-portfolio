// Styles for BlogSection component
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  section: {
    position: "relative",
    padding: 40,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 48,
    minHeight: 600,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    zIndex: 0,
  },
  header: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0070f3",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#333",
    marginBottom: 8,
  },
  gridWrap: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    marginBottom: 0,
    justifyContent: "center",
  },
});

export default styles;
