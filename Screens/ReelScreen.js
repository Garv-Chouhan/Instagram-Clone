import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import ReelComponent from "../Componenets/ReelScreen/ReelComponent";

const ReelScreen = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "black",
        position: "relative",
      }}
    >
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 10,
          right: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          zIndex: 1,
          padding: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
          Reels
        </Text>
        <Image
          source={{
            uri: "https://img.icons8.com/fluency-systems-regular/48/FFFFFF/camera.png",
          }}
          style={{ width: 32, height: 32 }}
        />
      </View>
      <ReelComponent />
    </View>
  );
};

export default ReelScreen;
