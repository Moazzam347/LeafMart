import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors, Fonts } from "../../../GlobalStyle";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useState } from "react";

const EmailField = (props) => {
  const {
    placeholder = "Placeholder Text",
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
      <MaterialIcons name={iconName} size={wp("6")} color={Colors.darkGrey} />
      <TextInput
        style={styles.textStyle}
        placeholder={placeholder}
        value={text}
        onChangeText={handleText}
        keyboardType="default"
      />
    </View>
  );
};

export default EmailField;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    backgroundColor: Colors.lightGrey,
    borderRadius: 20,
    paddingVertical: wp("6"),
    paddingHorizontal: wp("7"),
    gap: wp("3"),
    alignItems: "center",
  },
  textStyle: {
    color: Colors.darkGrey,
    fontFamily: Fonts.medium,
    letterSpacing: 1,
    fontSize: wp("4"),
    width: wp("70"),
  },
});
