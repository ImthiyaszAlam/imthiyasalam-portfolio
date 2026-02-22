import { StyleSheet } from "react-native";

export const heroSectionStyles = StyleSheet.create({
  section: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    flex: 1,
    width: "90%",
    marginLeft: "auto",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    flex: 1,
    // No justifyContent, so content aligns right
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
    color: "white",
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
