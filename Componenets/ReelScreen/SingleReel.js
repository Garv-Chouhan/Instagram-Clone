import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import React from "react";
import { Video } from "expo-av";
import { useRef } from "react";
import { useState } from "react";
import Ionic from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
const SingleReel = ({ item, index, currentIndex }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const videoRef = useRef(null);

  const onBuffer = (buffer) => {
    console.log("Buffring", buffer);
  };
  const onError = (error) => {
    console.log("Error", error);
  };

  const [status, setStatus] = useState({});

  const [mute, setMute] = useState(false);

  const [like, setLike] = useState(setLike);
  return (
    <View
      style={{ width: windowWidth, height: windowHeight, position: "relative" }}
    >
      <TouchableOpacity
        activeOpacity={1}
        style={{ width: "100%", height: "100%", position: "absolute" }}
        onPress={() => setMute(!mute)}
      >
        <Video
          shouldPlay={true}
          isLooping={true}
          isMuted={mute}
          shouldCorrectPitch={1.0}
          volume={true}
          onError={onError}
          ref={videoRef}
          resizeMode="cover"
          source={item.video}
          sound={true}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        />
      </TouchableOpacity>
      <Ionic
        name="volume-mute"
        style={{
          fontSize: mute ? 20 : 0,
          color: "white",
          position: "absolute",
          top: windowHeight / 2.3,
          left: windowWidth / 2.3,
          backgroundColor: "rgba(52,52,52,0.6)",
          borderRadius: 100,
          padding: mute ? 20 : 0,
        }}
      />
      <View
        style={{
          position: "absolute",
          width: windowWidth,
          zIndex: 1,
          bottom: 70,
          padding: 10,
        }}
      >
        <View>
          <TouchableOpacity style={{ width: 150 }}>
            <View
              style={{ width: 100, flexDirection: "row", alignItems: "center" }}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 100,
                  backgroundColor: "white",
                  margin: 10,
                }}
              >
                <Image
                  source={item.postProfile}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "cover",
                    borderRadius: 100,
                  }}
                />
              </View>
              <Text style={{ color: "white", fontSize: 14.5 }}>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
          <Text style={{ color: "white", fontSize: 15, marginHorizontal: 10 }}>
            {item.description}
          </Text>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <Ionic
              name="ios-musical-note"
              style={{ color: "white", fontSize: 16 }}
            />
            <Text style={{ color: "white" }}>Orignal Audio</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 90,
          right: 10,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => setLike(!like)}
          style={{ padding: 10 }}
        >
          <AntDesign
            name={like ? "heart" : "hearto"}
            style={{ color: like ? "red" : "white", fontSize: 25 }}
          />
        </TouchableOpacity>
        <Text style={{ color: "white" }}>{item.likes}</Text>
        <TouchableOpacity style={{ padding: 10 }}>
          <Ionic
            name="ios-chatbubble-outline"
            style={{ color: "white", fontSize: 25 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10 }}>
          <Ionic
            name="paper-plane-outline"
            style={{ color: "white", fontSize: 25 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10 }}>
          <Feather
            name="more-vertical"
            style={{ color: "white", fontSize: 25 }}
          />
        </TouchableOpacity>
        <View
          style={{
            width: 37,
            height: 37,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "white",
            // margin: 10,
          }}
        >
          <Image
            source={item.postProfile}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
              resizeMode: "cover",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SingleReel;
