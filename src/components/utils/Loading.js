import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { left, right } from "styled-system";

const LoadingComp = ({ loading, loginMessage }) => {
  if (!loading) {
    return <View />;
  }

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator color={"#000000"} />
        <Text style={styles.loadingText}>{loginMessage}.</Text>
      </View>
    </View>
  );
};

export default LoadingComp;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 8,
  },
  loadingText: {
    marginLeft: 16,
    fontSize: 15,
    fontWeight: "bold",
  },
});
