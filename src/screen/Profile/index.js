import { Icon } from "native-base";
import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./Profile-styled";
import { useDispatch, useSelector } from "react-redux";
import { logOutAction } from "../../redux/actions";
const userLogo = require("../../assets/profilephoto.jpg");

export default function Profile() {
  const data = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOutAction());
  };
  // const data = JSON.parse(userData);

  // console.log("this is the userdata in the proflie page", data.photoUrl);
  return (
    <ScrollView style={styles.containerWrapper}>
      <View style={styles.mainContainer}>
        <Icon
          as={
            <Ionicons
              name="log-out-outline"
              style={styles.profileEditIcon}
              onPress={handleLogout}
            />
          }
        />
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.imageWrapper}>
          <Image
            source={require("../../assets/profilephoto.jpg")}
            style={styles.profileImage}
          />
          <View style={{ paddingLeft: 55, marginTop: -50 }}>
            <View style={styles.profileDetails}>
              <Icon
                as={
                  <Ionicons name="person" style={styles.profileDetailsIcons} />
                }
              />
              <Text style={styles.profileName}>
                Prashant
                {/* {data?.name}{" "} */}
                {/* <Text style={styles.profileUserRole}>{data.role.name}</Text> */}
              </Text>
            </View>
            {/* Location */}
            <View style={styles.profileDetails}>
              <Icon
                as={
                  <Ionicons
                    name="location-sharp"
                    style={styles.profileDetailsIcons}
                  />
                }
              />
              <Text style={styles.profileInfoTitles}>Kathmandu</Text>
            </View>
            {/* Eamil */}
            <View style={styles.profileDetails}>
              <Icon
                as={
                  <Ionicons
                    name="mail-sharp"
                    style={styles.profileDetailsIcons}
                  />
                }
              />
              <Text style={styles.profileInfoTitles}>
                {/* {data.email} */}
                prashantkhanal32@gmail.com
              </Text>
            </View>
            {/* Phone */}
            <View style={styles.profileDetails}>
              <Icon
                as={<Ionicons name="call" style={styles.profileDetailsIcons} />}
              />
              <Text style={styles.profileInfoTitles}>9876543210</Text>
            </View>
            <View style={styles.profileDetails}>
              <Icon
                as={<Ionicons name="call" style={styles.profileDetailsIcons} />}
              />

              <Text style={styles.profileInfoTitles}>Logout</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
