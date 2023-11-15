import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Colors, Fonts } from "../../../GlobalStyle";

const RatingButton = (props) => {
const { ratingNumber, onPress, isSelected } = props;

  return (
    <TouchableOpacity
      onPress={() => onPress(ratingNumber)}
      style={[styles.mainContainer, isSelected ? styles.activeRating : null]}
    >
      <AntDesign name="star" size={wp("4")} color={Colors.yellow} />
      <Text style={styles.textStyle}>{ratingNumber} </Text>
    </TouchableOpacity>
  );
};

export default RatingButton;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: wp("4"),
    paddingVertical: wp("2"),
    backgroundColor: Colors.white,
    borderRadius: wp("10"),
    gap: wp("1"),
    maxWidth: wp("20"),
    elevation: 10,
    shadowColor: Colors.darkGreen,
  },
  textStyle: {
    color: Colors.darkGrey,
    fontSize: wp("3.5"),
    // fontFamily: Fonts.medium,
  },

  activeRating: {
    borderColor: Colors.darkGreen,
    borderWidth: 1,
  },
});
