import React from "react";
import { Input, FormControl } from "native-base";
import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const InputComp = ({
  label,
  rightIcon,
  placeHolder,
  onChangeText,
  value,
  iconName,
}) => {
  return (
    <View style={styles.container}>
      <FormControl>
        <FormControl.Label>{label}</FormControl.Label>
        <Input
          // InputLeftElement={
          //   <Icon
          //     as={<MaterialIcons name={iconName && iconName} />}
          //     size={5}
          //     ml="2"
          //     color="muted.400"
          //   />
          // }
          value={value}
          onChangeText={onChangeText}
          placeholder={placeHolder}
          variant="rounded"

          // InputRightElement={
          //   <Icon
          //     as={<MaterialIcons name={rightIcon && rightIcon} />}
          //     size={5}
          //     mr="2"
          //     color="#4632A1"
          //   />
          // }
        />
      </FormControl>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 14,
  },
});
