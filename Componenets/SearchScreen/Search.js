import {
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
  Text,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import SearchBox from "./SearchBox";
import SearchContent from "./SearchContent";
import { useState } from "react";

const Search = () => {
  const [image, setImage] = useState(null);

  const getData = (data) => {
    setImage(data);
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View
      style={{
        backgroundColor: "black",
        // justifyContent: "center",
        // alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox />
        <SearchContent data={getData} />
        <TouchableOpacity
          style={{
            margin: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://img.icons8.com/ios/50/FFFFFF/plus--v1.png",
            }}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
      </ScrollView>
      {image ? (
        <View
          style={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(52,52,52,0.8)",
          }}
        >
          <StatusBar barStyle="default" />
          <View
            style={{
              position: "absolute",
              top: windowHeight / 6,
              left: windowWidth / 64,
              backgroundColor: "#101010",
              width: 350,
              height: 470,
              borderRadius: 15,
              zIndex: 1,
              elevation: 50,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}
            >
              <Image
                source={image}
                style={{ width: 30, height: 30, borderRadius: 100 }}
              />
              <View style={{ paddingLeft: 10 }}>
                <Text
                  style={{ fontSize: 12, fontWeight: "600", color: "white" }}
                >
                  __garv_5__
                </Text>
              </View>
            </View>
            <Image source={image} style={{ width: "100%", height: "80%" }} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <Image
                source={{
                  uri: "https://img.icons8.com/windows/32/FFFFFF/like--v1.png",
                }}
                style={{ width: 30, height: 30 }}
              />
              <Image
                source={{
                  uri: "https://img.icons8.com/small/64/FFFFFF/user-male-circle.png",
                }}
                style={{ width: 30, height: 30 }}
              />
              <Image
                source={{
                  uri: "https://img.icons8.com/ios/50/FFFFFF/sent.png",
                }}
                style={{ width: 30, height: 30 }}
              />
              <Image
                source={{
                  uri: "https://img.icons8.com/small/32/FFFFFF/menu-2.png",
                }}
                style={{ width: 30, height: 30 }}
              />
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Search;
