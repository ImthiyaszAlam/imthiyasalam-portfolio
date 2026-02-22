import { StyleSheet } from "react-native";

export const heroSectionStyles = StyleSheet.create({
  section: {
    width: "100%",
    // minHeight and height will be set dynamically
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
  heroInfo: {
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
  },
  heroNameWrapper: {
    marginBottom: 4,
  },
  heroName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#222",
  },
  heroRole: {
    fontSize: 20,
    color: "#666",
  },
  visualWrapper: {
    backgroundColor: "transparent",
    alignItems: "flex-end",
    justifyContent: "center",
    flex: 1,
    marginLeft: 16,
  },
  ctaRow: {
    alignItems: "flex-start",
    justifyContent: "flex-end",
    width: "100%",
    flex: 1,
  },
  ctaInner: {
    backgroundColor: "transparent",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    width: "100%",
  },
});
