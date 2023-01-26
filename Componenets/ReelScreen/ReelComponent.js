import { View, Text } from "react-native";
import React, { useState } from "react";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { videosData } from "./Database";
import SingleReel from "./SingleReel";

const ReelComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleChangeIndex = ({ index }) => {
    setCurrentIndex(index);
  };
  return (
    <SwiperFlatList
      data={videosData}
      vertical={true}
      onChangeIndex={handleChangeIndex}
      renderItem={({ item, index }) => (
        <SingleReel item={item} index={index} currentIndex={currentIndex} />
      )}
      keyExtractor={(item, index) => index}
    />
  );
};

export default ReelComponent;
