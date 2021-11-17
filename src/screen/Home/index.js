import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from "react-native";
import axios from "axios";
import Header from "./components/header-component";
import FlatComponent from "./components/flat-component";
import { styles } from "./home-styled";
import { useDispatch, useSelector } from "react-redux";
import { popularAction } from "../../redux/actions";
import HeaderComponent from "../../components/Header";

export default function Home() {
  const [isFeatured, setIsFeatured] = useState([]);
  const [notes, setNotes] = useState([]);
  const popularNotes = useSelector((state) => state.popular.data);
  const [refreshing, setRefreshing] = React.useState(false);
  const dispatch = useDispatch();
  // // Is Popular Api call
  React.useEffect(() => {
    dispatch(popularAction());
  }, []);

  // Is Featured Api Call
  React.useEffect(() => {
    const fetchpopular = async () => {
      const { data } = await axios.get(
        `http://192.168.1.68:8001/api/featured_notes`
      );
      setIsFeatured(data.data);
    };
    fetchpopular();
  }, []);

  const onRefresh = () => dispatch(popularAction());

  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
  //   wait(2000).then(() => setRefreshing(false));
  // }, []);

  // Explore Api Call
  React.useEffect(() => {
    const fetchpopular = async () => {
      const { data } = await axios.get(`http://192.168.1.68:8001/api/notes`);
      setNotes(data.data);
    };
    fetchpopular();
  }, []);

  return (
    <ScrollView
      style={styles.scrollViewContainer}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View>
        <Text
          style={{
            textAlign: "center",
            padding: 20,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Note Ghar
        </Text>
      </View>
      {/* PoPular Notes */}
      <Header mainHeading="Popular Notes" />
      <FlatComponent stateName={popularNotes} />

      {/* Featured notes */}
      <Header mainHeading="Featured Notes" />
      <FlatComponent stateName={isFeatured} />
      {/* Explore Notes */}
      <Header mainHeading="Explore Notes" />
      <FlatComponent stateName={notes} />
    </ScrollView>
  );
}
