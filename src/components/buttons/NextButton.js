import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Colors, Fonts } from "../../../GlobalStyle";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

const NextButton = (props) => {
  const navigation = useNavigation();

  const {
    title = "Button",
    btnNavigation = () => navigation.navigate("Home"),
    color1 = "#26AD71",
    color2 = "#32CB4B",
  } = props;

  const propStyle = {};
  return (
    <TouchableOpacity onPress={btnNavigation}>
      <View style={styles.buttonBorder}>
        <LinearGradient
          colors={[color1, color2]}
          style={styles.buttonContainer}
        >
          <AntDesign name="arrowright" size={wp("6")} color={Colors.white} />
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.mediumGreen,
    paddingVertical: wp("4"),
    paddingHorizontal: wp("7"),
    alignItems: "center",
    borderRadius: 100,
    maxWidth: wp("60"),
    elevation: 10,
  },
  buttonBorder: {
    backgroundColor: Colors.white,
    padding: 10,
    borderColor: Colors.mediumGreen,
    borderWidth: 1,
    borderRadius: 100,
    maxWidth: wp("60"),
  },
});
