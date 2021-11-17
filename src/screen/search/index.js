import { Icon, Input } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Search() {
  return (
    <View style={{ padding: 20 }}>
      <Input
        style={{ height: 40 }}
        placeholder="Search Notes"
        variant="rounded"
        _focus={{
          borderColor: "#22374c",
        }}
        InputRightElement={
          <Icon
            as={
              <Ionicons
                name="search-outline"
                style={{ fontSize: 20, paddingRight: 10 }}
              />
            }
          />
        }
      />
    </View>
  );
}
