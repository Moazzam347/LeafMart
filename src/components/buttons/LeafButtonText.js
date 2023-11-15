import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Colors, Fonts } from "../../../GlobalStyle";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";

const LeafButtonText = (props) => {
  const navigation = useNavigation();
  const {
    title = "Button",
    btnNavigation = () => navigation.navigate("Home"),
  } = props;
  return (
    <TouchableOpacity onPress={btnNavigation}>
      <LinearGradient
        colors={["#26AD71", "#32CB4B"]}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Add to Bag</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LeafButtonText;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.mediumGreen,
    paddingVertical: wp("5"),
    paddingHorizontal: wp("5"),
    alignItems: "center",
    // width: wp("20"),
    // height: wp("16"),
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 28,
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.white,
    fontFamily: Fonts.medium,
  },
});
