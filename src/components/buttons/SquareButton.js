import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Colors, Fonts } from "../../../GlobalStyle";

const SquareButton = (props) => {
  const {
    title = "Title",
    imagePath = require("../../assets/images/notificationIcon.png"),
  } = props;
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <Image
        style={styles.imageStyle}
        source={imagePath}
      />
      <Text style={styles.textStyle}>{title} </Text>
    </TouchableOpacity>
  );
};

export default SquareButton;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
    borderRadius: 23,
    padding: wp("6"),
    minWidth: wp("25"),
    minHeight: wp("25"),
    elevation: 10,
  },
  imageStyle: {
    width: wp("6"),
    height: wp("6"),
    resizeMode: "contain",
  },
  textStyle: {
    color: Colors.darkGrey,
    fontSize: wp("3"),
    marginTop: wp("1"),
  },
});
