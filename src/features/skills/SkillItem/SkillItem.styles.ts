import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  verticalItem: {

  },
  nameContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 16,
    fontWeight: "500",
    flexShrink: 1,
    color: "#fff",
    textAlign: "center",
    marginTop: 0,
  },

  icon: {
    width: 24,
    height: 24,
    alignSelf: "center",
  },
});

export default styles;
