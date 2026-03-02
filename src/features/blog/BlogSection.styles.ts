// Styles for BlogSection component
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  section: {
    position: "relative",
    overflow: "hidden",
    marginBottom: 48,
    minHeight: 600,
    // width and borderRadius removed for Section consistency
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
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  gridWrap: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    width: "100%",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    marginBottom: 0,
    justifyContent: "stretch",
    width: "100%",
  },
  card: {
    minWidth: 260,
    maxWidth: 340,
    flex: 1,
  },
});

export default styles;
