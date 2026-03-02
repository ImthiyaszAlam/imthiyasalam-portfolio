// Styles for BlogSection component
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  section: {
    position: "relative",
    overflow: "hidden",
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
  },
  card: {
    minWidth: 260,
    maxWidth: 340,
    flex: 1,
  },
});

export default styles;
