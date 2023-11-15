import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../../GlobalStyle";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

const BookmarkButton = () => {
  const [toggleBookmark, setToggleMark] = useState(false);

  const handleBookmark = () => {
    setToggleMark(!toggleBookmark);
  };
  return (
    <TouchableOpacity onPress={handleBookmark}>
      {toggleBookmark ? (
        <View style={styles.outer}>
          <View style={styles.bookmarked}>
            <AntDesign name="heart" size={wp("4")} color={Colors.white} />
          </View>
        </View>
      ) : (
        <View style={styles.outerNot}>
          <View style={styles.notBookmarked}>
            <AntDesign name="heart" size={wp("4")} color={Colors.red} />
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default BookmarkButton;

const styles = StyleSheet.create({
  bookmarked: {
    backgroundColor: Colors.red,
    width: wp("8"),
    height: wp("8"),
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 30,
    shadowColor: Colors.red,
  },
  notBookmarked: {
    backgroundColor: Colors.white,
    width: wp("8"),
    height: wp("8"),
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    shadowColor: Colors.red,
  },
  outer: {
    backgroundColor: Colors.white,
    width: wp("10"),
    height: wp("10"),
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.red,
  },
  outerNot: {
    width: wp("10"),
    height: wp("10"),
    alignItems: "center",
    justifyContent: "center",
  },
});
