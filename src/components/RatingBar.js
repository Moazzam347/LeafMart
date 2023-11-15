import { View } from 'react-native'
import React,{ useState } from 'react'
import RatingButton from './buttons/RatingButton';

const RatingBar = () => {
    const [selectedRating, setSelectedRating] = useState("5");

    const handleRatingPress = (rating) => {
      setSelectedRating(rating);
    };

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
      <RatingButton
        ratingNumber={"1"}
        onPress={handleRatingPress}
        isSelected={selectedRating === "1"}
      />
      <RatingButton
        ratingNumber={"2"}
        onPress={handleRatingPress}
        isSelected={selectedRating === "2"}
      />
      <RatingButton
        ratingNumber={"3"}
        onPress={handleRatingPress}
        isSelected={selectedRating === "3"}
      />
      <RatingButton
        ratingNumber={"4"}
        onPress={handleRatingPress}
        isSelected={selectedRating === "4"}
      />
      <RatingButton
        ratingNumber={"5"}
        onPress={handleRatingPress}
        isSelected={selectedRating === "5"}
      />
    </View>
  );
}

export default RatingBar
