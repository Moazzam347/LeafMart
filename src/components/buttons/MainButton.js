import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Colors, Fonts } from "../../../GlobalStyle";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const MainButton = (props) => {
  const navigation = useNavigation();

  const {
    title = "Button",
    btnNavigation = () => navigation.navigate("Home"),
    color1 = "#26AD71",
    color2 = "#32CB4B",
  } = props;

  const propStyle = {

  }
  return (
    <TouchableOpacity onPress={btnNavigation}>
      <LinearGradient
        colors={[color1, color2]}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}> {title} </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.mediumGreen,
    paddingVertical: wp("4"),
    paddingHorizontal: wp("7"),
    alignItems: "center",
    borderRadius: 100,
  },
  buttonText: {
    color: Colors.white,
    fontFamily: Fonts.medium,
    letterSpacing: 1,
    fontSize: wp("4.5"),
  },
});
