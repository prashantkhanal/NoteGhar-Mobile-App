import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./error-styled";

const Error = ({ error }) => {
  return (
    <View>
      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
};

export default Error;
