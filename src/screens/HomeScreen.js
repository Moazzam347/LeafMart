import { StyleSheet, Text, View } from "react-native";
import React from "react";

import RatingButton from "../components/buttons/RatingButton";
import RatingBar from "../components/RatingBar";

const HomeScreen = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <RatingButton ratingNumber={"1"} />
        <RatingButton ratingNumber={"2"} />
        <RatingButton ratingNumber={"3"} />
        <RatingButton ratingNumber={"4"} />
        <RatingButton ratingNumber={"5"} />
      </View>

      <RatingBar/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
