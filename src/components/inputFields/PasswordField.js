import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React from "react";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { Colors, Fonts } from "../../../GlobalStyle";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useState } from "react";

const PasswordField = (props) => {
  const {
    placeholder = "Password",
    iconName = "lock-outline",
    getText,
  } = props;

  const [text, setText] = useState("");
  const [toggleShow, setToggleShow] = useState(false);

  const handleToggleShow = () => {
    setToggleShow(!toggleShow);
  };

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
        secureTextEntry={toggleShow}
      />
      <Pressable onPress={handleToggleShow}>
        {toggleShow ? (
          <Feather name="eye-off" size={wp("6")} color={Colors.lightGreen} />
        ) : (
          <Feather name="eye" size={wp("6")} color={Colors.lightGreen} />
        )}
      </Pressable>
    </View>
  );
};

export default PasswordField;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    backgroundColor: Colors.lightGrey,
    borderRadius: 20,
    paddingVertical: wp("6"),
    paddingHorizontal: wp("7"),
    gap: wp("3"),
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: Colors.darkGrey,
    fontFamily: Fonts.medium,
    letterSpacing: 1,
    fontSize: wp("4"),
    width: wp("70"),
  },
});
