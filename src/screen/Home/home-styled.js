import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {},

  flatListContainer: {
    paddingTop: 20,
  },
  faltCard: {
    paddingRight: 20,
    paddingBottom: 17,
  },
  flatImage: {
    height: 141,
    width: 97,
    resizeMode: "cover",
    borderRadius: 10,
  },
  flatTitle: {
    fontSize: 10,
    textAlign: "center",
    color: "#22374c",
    fontWeight: "bold",
    paddingTop: 5,
    fontFamily: "PlayfairDisplay_700Bold",
    maxWidth: 100,
  },
  flatAutherName: {
    fontSize: 10,
    textAlign: "center",
    color: "#828d97",
    fontFamily: "PlayfairDisplay_700Bold",
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headingHeading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#22374c",
    fontFamily: "PlayfairDisplay_500Medium",
  },
  headingIcon: {
    fontSize: 20,
    paddingRight: 9,
  },
  scrollViewContainer: {
    paddingHorizontal: 10,
  },
  logo: {
    color: "#22374c",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "PlayfairDisplay_900Black",
    paddingBottom: 43,
    paddingTop: 15,
  },
});
