import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Button } from "native-base";
import { styles } from "./auth.styles";

const ButtonComp = ({ onPress, content, ...props }) => {
  return (
    <Button
      // style={styles.button}
      onPress={onPress}
      isLoadingText={"Processing"}
      {...props}
    >
      <Text style={{ color: "#FFFFFFFF" }}>{content}</Text>
    </Button>
  );
};

export default ButtonComp;
