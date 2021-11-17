import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  topBackgrounImage: { height: Dimensions.get("window").height / 2.5 },
  topIcon: { fontSize: 100 },
  topText: { flex: 1, justifyContent: "center", alignItems: "center" },
  topHeading: { color: "#FFFFFF", fontWeight: "bold", fontSize: 20 },
  middleContainer: {
    backgroundColor: "#FFFFFF",
    flex: 1.5,
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  greetingMeaage: {
    color: "#4632A1",
    fontSize: 34,
  },
  navigationOption: {
    marginTop: 5,
  },
  navigation: {
    color: "red",
    fontStyle: "italic",
    padding: 20,
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#22374c",
    width: Dimensions.get("window").width / 2,
    justifyContent: "center",
    borderRadius: 20,
    height: 50,
    marginTop: 20,
    shadowOffset: { width: 1, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 7,
    shadowColor: "white",
  },
});
