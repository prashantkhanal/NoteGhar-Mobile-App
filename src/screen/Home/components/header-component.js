import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon } from "native-base";
import { styles } from "../home-styled";

export default function Header({ mainHeading }) {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.headingHeading}>{mainHeading}</Text>
      <Icon
        as={
          <MaterialIcons
            name="arrow-forward-ios"
            style={styles.headingIcon}
            color="#22374c"
          />
        }
      />
    </View>
  );
}
