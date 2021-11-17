import React from "react";
import { Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import LoadingComp from "../../../components/utils/Loading";
import { styles } from "./auth.styles";

export function AuthContainer({
  loading,
  loadingMessage,
  nextStackOption,
  onPress,
  nextStackOptionText,
  children,
}) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={require("../../../assets/bg.jpg")}
        style={styles.topBackgrounImage}
      >
        <View style={styles.topText}>
          <Icon
            as={
              <MaterialIcons
                name="room"
                color="#FFFFFFFF"
                style={styles.topIcon}
              />
            }
          />
          <Text style={styles.topHeading}>Note Ghar</Text>
        </View>
      </ImageBackground>
      <View style={styles.middleContainer}>
        <View style={{ padding: 30 }}>
          <Text style={styles.greetingMeaage}>Welcome</Text>
          <Text style={styles.navigationOption}>
            {nextStackOptionText}
            <Text style={styles.navigation} onPress={onPress}>
              {nextStackOption}
            </Text>
          </Text>
          {children}
        </View>
      </View>
      <LoadingComp loading={loading} loginMessage={loadingMessage} />
    </ScrollView>
  );
}
