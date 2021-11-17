import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerWrapper: {
    backgroundColor: "#E5E5E5",
  },
  mainContainer: {
    height: Dimensions.get("window").height / 2.5,
    backgroundColor: "#22374C",
  },
  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },

  middleContainer: {
    backgroundColor: "#E5E5E5",
    flex: 1.5,
    bottom: 70,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  profileEditIcon: {
    color: "#FFFFFF",
    fontSize: 25,
    alignSelf: "flex-end",
    paddingRight: 10,
    alignItems: "center",
    paddingTop: 10,
  },
  profileImage: {
    width: 156,
    height: 156,
    borderRadius: 80,
    resizeMode: "cover",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#FFFFFFFF",
    bottom: 80,
  },
  profileDetails: {
    flexDirection: "row",
    paddingBottom: 15,
  },
  profileName: {
    fontSize: 20,
    fontFamily: "PlayfairDisplay_700Bold",
    textTransform: "capitalize",
  },
  profileDetailsIcons: {
    fontSize: 15,
    paddingRight: 20,
    paddingTop: 2,
    alignItems: "center",
  },
  profileUserRole: {
    fontSize: 10,
    textTransform: "capitalize",
    fontFamily: "PlayfairDisplay_400Regular",
  },
  profileInfoTitles: {
    fontSize: 12,
    fontFamily: "PlayfairDisplay_400Regular",
    textTransform: "lowercase",
  },
});
