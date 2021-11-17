import React, { useEffect } from "react";
import Constants from "expo-constants";
import {
  useFonts,
  PlayfairDisplay_400Regular,
  PlayfairDisplay_500Medium,
  PlayfairDisplay_600SemiBold,
  PlayfairDisplay_700Bold,
  PlayfairDisplay_800ExtraBold,
  PlayfairDisplay_900Black,
} from "@expo-google-fonts/playfair-display";
import { NativeBaseProvider } from "native-base";
import { StatusBar, StyleSheet, View } from "react-native";
import Routes from "./src/Navigations/Routes";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./src/redux/Store";
import { isUserLogin } from "./src/redux/actions/auth.action";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppWraper = () => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLogin());
    }
  }, []);
  const [playfairLoaded] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_600SemiBold,
    PlayfairDisplay_700Bold,
    PlayfairDisplay_800ExtraBold,
    PlayfairDisplay_900Black,
  });
  if (!playfairLoaded) {
    return null;
  }
  return <Routes />;
};

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <View style={styles.StatusBar}>
          <StatusBar translucent barStyle="light-content" />
        </View>
        <AppWraper />
      </NativeBaseProvider>
    </Provider>
  );
};
const styles = StyleSheet.create({
  StatusBar: {
    height: Constants.statusBarHeight,
    backgroundColor: "#22374c",
  },
});

export default App;
