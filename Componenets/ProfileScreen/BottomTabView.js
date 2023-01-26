import { View, Text, Image } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Tab } from "react-native-elements";
import { StyleSheet } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import { db, firebase } from "../../firebase";
import Post, { PostImage } from "../Home/Post";
import { useState, useEffect } from "react";
import { personalPost } from "../../data/posts";

const BottomTabView = () => {
  const Tab = createMaterialTopTabNavigator();

  // const image = firebase.auth().currentUser
  const Posts = ({ post }) => {
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //   db.collectionGroup("posts")
    //     .orderBy("createdAt", "desc")
    //     .onSnapshot((snapshot) => {
    //       setPosts(
    //         snapshot.docs.map((post) => ({ id: post.id, ...post.data() }))
    //       );
    //     });
    // }, []);

    return (
      <View
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {personalPost.map((post, index) => (
          <View style={{ width: 120, height: 120 }}>
            <Image
              source={{ uri: post.image }}
              style={{
                height: "100%",
                resizeMode: "cover",
                margin: 2,
              }}
              key={index}
            />
          </View>
        ))}
      </View>
    );
  };
  const Videos = () => {
    return (
      <View
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          No Reels Yet
        </Text>
      </View>
    );
  };
  const Tags = () => {
    return (
      <View
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          No Tags Yet
        </Text>
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarContentContainerStyle: {
          backgroundColor: "black",
        },
        tabBarIndicatorStyle: {
          borderBottomColor: "white",
          borderBottomWidth: 1,
        },
        tabBarIcon: ({ focused, colour }) => {
          let iconName;
          if (route.name === "Posts") {
            iconName = focused ? "ios-apps-sharp" : "ios-apps-sharp";
            colour = focused ? "white" : "grey";
          } else if (route.name === "Videos") {
            iconName = focused ? "ios-play-circle" : "ios-play-circle-outline";
            colour = focused ? "white" : "grey";
          } else if (route.name === "Tags") {
            iconName = focused ? "ios-person" : "ios-person-outline";
            colour = focused ? "white" : "grey";
          }

          return <Ionic name={iconName} color={colour} size={25} />;
        },
      })}
    >
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="Videos" component={Videos} />
      <Tab.Screen name="Tags" component={Tags} />
    </Tab.Navigator>
  );
};
export default BottomTabView;
