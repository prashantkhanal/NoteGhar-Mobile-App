import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { styles } from "../home-styled";

export default function FlatComponent({ stateName }) {
  return (
    <FlatList
      data={stateName}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.flatListContainer}
      renderItem={({ item }) => (
        <View style={styles.faltCard}>
          <Image
            source={{ uri: `http://192.168.1.68:8001${item?.image_url}` }}
            style={styles.flatImage}
          />
          <Text style={styles.flatTitle}>{item.name}</Text>
          <Text style={styles.flatAutherName}>
            {item.subscription_user.name}
          </Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
