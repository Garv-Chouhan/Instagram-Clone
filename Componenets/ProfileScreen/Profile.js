import { View, Text, TouchableOpacity, Image } from "react-native";
import { useState, useEffect } from "react";
import React from "react";
import { db, firebase } from "../../firebase";
import Feather from "react-native-vector-icons/Feather";
import Ionic from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native";

import Highlights from "./Highlights";
import BottomTabView from "./BottomTabView";

const Profile = ({ navigation, name, accountName, postImage }) => {
  const [currentLoggedInUser, setcurrentLoggedInUser] = useState(null);

  const getUserName = () => {
    const user = firebase.auth().currentUser;
    const unsubscribe = db
      .collection("users")
      .where("owner_name", "==", user.uid)
      .limit(1)
      .onSnapshot((snapshot) =>
        snapshot.docs.map((doc) => {
          setcurrentLoggedInUser({
            username: doc.data().username,
            profilePicture: doc.data().profile_picture,
            post: doc.data().length,
          });
        })
      );
    return unsubscribe;
  };

  useEffect(() => {
    getUserName();
  }, []);

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "black" }}>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 20,
          //   marginVertical: 20,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
            {name}
          </Text>
          <Feather
            name="chevron-down"
            style={{ color: "white", fontSize: 25, marginLeft: 5 }}
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
            <Image
              source={require("../../assets/instagram-3814084_1280-removebg-preview.png")}
              style={{
                width: 55,
                height: 55,
                //   marginLeft: 10,
                // resizeMode: "cover",
              }}
            />
          </TouchableOpacity>
          <Ionic name="menu-outline" style={{ color: "white", fontSize: 40 }} />
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            paddingVertical: 20,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              source={{ uri: postImage }}
              style={{
                width: 80,
                height: 80,
                borderRadius: 100,
                resizeMode: "cover",
                // marginLeft: 10,
              }}
            />
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                paddingVertical: 5,
                marginLeft: 5,
              }}
            >
              {accountName}
            </Text>
          </View>

          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              4
            </Text>
            <Text style={{ color: "white" }}>Posts</Text>
          </View>
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              1.5M
            </Text>
            <Text style={{ color: "white" }}>Followers</Text>
          </View>
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              1
            </Text>
            <Text style={{ color: "white" }}>Following</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{ width: "76%" }}
          onPress={() =>
            navigation.push("EditProfile", {
              name: name,
              accountName: accountName,
              postImage: postImage,
            })
          }
        >
          <View
            style={{
              width: "100%",
              height: 38,
              borderRadius: 5,
              backgroundColor: "#404040",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Edit profile
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            width: "10%",
            height: 38,
            backgroundColor: "#404040",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
          }}
        >
          <Ionic
            name="person-add-sharp"
            style={{ color: "white", fontSize: 20 }}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            color: "white",
            paddingVertical: 20,
            marginHorizontal: 15,
            fontSize: 16,
          }}
        >
          Story Highlights
        </Text>
        <ScrollView>
          <Highlights />
        </ScrollView>
      </View>

      <BottomTabView />
    </View>
  );
};

export default Profile;
