import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors, Fonts } from "../../../GlobalStyle";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useState } from "react";
import MainButton from "../buttons/MainButton";

const CouponField = (props) => {
   const {
     placeholder = "Add Promo Code",
     iconName = "mail-outline",
     getText,
   } = props;

   const [text, setText] = useState("");

   handleText = (value) => {
     setText(value);
     getText(value);
   };

   return (
     <View style={styles.mainContainer}>
       <TextInput
         style={styles.textStyle}
         placeholder={placeholder}
         value={text}
         onChangeText={handleText}
         keyboardType="default"
       />
       <MainButton
         title={"Apply"}
         color1={Colors.darkGreen}
         color2={Colors.darkGreen}
       />
     </View>
   );
};

export default CouponField;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    backgroundColor: Colors.lightGrey,
    borderRadius: 20,
    paddingVertical: wp("4"),
    paddingHorizontal: wp("7"),
    gap: wp("3"),
    alignItems: "center",
  },
  textStyle: {
    color: Colors.darkGreen,
    fontFamily: Fonts.medium,
    letterSpacing: 1,
    fontSize: wp("4"),
    width: wp("55"),
  },
});
