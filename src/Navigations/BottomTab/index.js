import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Home, Profile, Search } from "../../screen";

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarActiveTintColor: "#efef",
        tintColor: "#22374c",
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 2,
        },
        tabBarStyle: {
          backgroundColor: "#22374c",
          height: 58,
          paddingTop: 4,
        },
        tabBarIconStyle: {
          color: "#FFFFFF",
        },
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ tintColor }) => (
            <Icon
              as={
                <Ionicons
                  name="home-outline"
                  color={tintColor}
                  style={{ color: "#FFFFFF", fontSize: 25 }}
                />
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ tintColor }) => (
            <Icon
              as={
                <Ionicons
                  name="search-outline"
                  color={tintColor}
                  style={{ color: "#FFFFFF", fontSize: 25 }}
                />
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ tintColor }) => (
            <Icon
              as={
                <Ionicons
                  name="person-outline"
                  color={tintColor}
                  style={{ color: "#FFFFFF", fontSize: 25 }}
                />
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTab;
