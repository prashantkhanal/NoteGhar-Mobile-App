import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, Icon } from "native-base";

//Prashant

export const SocialLogin = ({ content }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{content}</Text>
      <View style={styles.wrapper}>
        <Button style={styles.facebookBtn}>
          <Icon
            as={
              <MaterialCommunityIcons
                name="facebook"
                style={styles.icons}
                size={20}
              />
            }
          />
        </Button>
        <Button style={styles.twitterBtn}>
          <Icon
            as={
              <MaterialCommunityIcons
                name="twitter"
                style={styles.icons}
                size={20}
              />
            }
          />
        </Button>
        <Button style={styles.googleBtn}>
          <Icon
            as={
              <MaterialCommunityIcons
                name="google"
                style={styles.icons}
                size={20}
              />
            }
          />
        </Button>
      </View>
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icons: {
    color: "#FFFFFFFF",
  },
  heading: {
    textAlign: "center",
    marginTop: 15,
  },
  wrapper: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    marginTop: 30,
  },
  facebookBtn: {
    borderRadius: 20,
    height: 40,
    backgroundColor: "#4267b2",
    shadowOffset: { width: 1, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 13,
    elevation: 30,
    shadowColor: "#80acee",
  },
  googleBtn: {
    borderRadius: 20,
    height: 40,
    backgroundColor: "#db4a39",
    shadowOffset: { width: 1, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 13,
    elevation: 30,
    shadowColor: "#80acee",
  },
  twitterBtn: {
    borderRadius: 20,
    height: 40,
    backgroundColor: "#00acee",
    shadowOffset: { width: 1, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 13,
    elevation: 30,
    shadowColor: "#80acee",
  },
});
