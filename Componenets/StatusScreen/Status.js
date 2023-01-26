import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Animated,
} from "react-native";
import React, { useEffect, useState } from "react";

const Status = ({ route, navigation }) => {
  const { name } = route.params;
  const { image } = route.params;

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);

    Animated.timing(progess, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }, []);

  const [progess, setProgess] = useState(new Animated.Value(0));

  const progessAnimation = progess.interpolate({
    inputRange: [0, 5],
    outputRange: ["0%", "100%"],
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.storyLine}>
        <Animated.View
          style={{
            height: "100%",
            backgroundColor: "white",
            width: progessAnimation,
          }}
        />
      </View>
      <View style={styles.story_logo_name}>
        <Image source={{ uri: image }} style={styles.story_image} />
        <Text style={{ color: "white", marginLeft: 15, fontSize: 15 }}>
          {name}
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{
              uri: "https://img.icons8.com/material-outlined/24/FFFFFF/delete-sign.png",
            }}
            style={{
              height: 20,
              width: 20,
              justifyContent: "space-between",
              marginLeft: 170,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.mainImage}>
        <Image
          source={{ uri: image }}
          style={{ height: 580, width: "100%", marginTop: 18 }}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 10,
          left: 0,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 10,
        }}
      >
        <TextInput
          placeholder="send message"
          placeholderTextColor="white"
          style={{
            borderColor: "white",
            borderRadius: 25,
            width: "85%",
            height: 50,
            paddingLeft: 20,
            borderWidth: 1,
            fontSize: 20,
            color: "white",
          }}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: "https://img.icons8.com/ios/50/FFFFFF/sent.png" }}
            style={{ width: 30, height: 30, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
  },
  storyLine: {
    height: 3,
    width: "95%",
    borderWidth: 1,
    backgroundColor: "gray",
    marginTop: 20,
    // marginTop: 50,
  },
  storyLineWhite: {},

  story_logo_name: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  story_image: {
    borderRadius: 100,
    backgroundColor: "orange",
    resizeMode: "cover",
    width: 40,
    height: 40,
    // marginTop: 15,
  },
  mainImage: {
    height: "100%",
    width: "100%",
    // marginTop: 20,
  },
});
export default Status;
