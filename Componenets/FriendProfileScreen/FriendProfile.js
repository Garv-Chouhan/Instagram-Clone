import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { ProfileBody, ProfileButtons } from "./ProfileBody";
import { friendProfile } from "../ReelScreen/Database";
import { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const FriendProfile = ({ route, navigation }) => {
  const {
    name,
    profileImage,
    follow,
    post,
    followers,
    following,
    accountName,
  } = route.params;
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="arrow-back" style={{ color: "white", fontSize: 30 }} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "87%",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 30,
            }}
          >
            {name}
          </Text>
          <Feather
            name="more-vertical"
            style={{ color: "white", fontSize: 20 }}
          />
        </View>
      </View>
      <ProfileBody
        name={name}
        accountName={accountName}
        profileImage={profileImage}
        post={post}
        followers={followers}
        following={following}
      />
      <ProfileButtons id={1} />

      <View
        style={{
          borderTopColor: "#404040",
          borderTopWidth: 0.5,
          paddingVertical: 30,
          marginTop: 30,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Feather name="lock" style={{ color: "white", fontSize: 40 }} />
        <View style={{ marginHorizontal: 20 }}>
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "bold",
              marginBottom: 5,
            }}
          >
            This Account is Private
          </Text>
          <Text style={{ color: "grey", fontSize: 14 }}>
            Follow this account to see their photos and videos
          </Text>
        </View>
      </View>
      <Text
        style={{
          color: "white",
          fontSize: 15,
          fontWeight: "bold",
          // paddingVertical: 10,
          marginHorizontal: 5,
        }}
      >
        Suggestions for you
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 10 }}
      >
        {name === FriendProfile.name
          ? null
          : friendProfile.map((data, index) => {
              const [isFollow, setIsFollow] = useState(false);
              const [close, setClose] = useState(false);
              return (
                <View key={index}>
                  {data.name === name || close ? null : (
                    <View
                      style={{
                        backgroundColor: "black",
                        width: 160,
                        height: 200,
                        borderColor: "grey",
                        borderWidth: 0.5,
                        borderRadius: 2,
                        margin: 3,
                        position: "relative",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => setClose(!close)}
                        style={{ top: 10, right: 10, position: "absolute" }}
                      >
                        <AntDesign
                          name="close"
                          style={{ color: "white", fontSize: 20, opacity: 0.5 }}
                        />
                      </TouchableOpacity>
                      <Image
                        source={data.profileImage}
                        style={{
                          width: 80,
                          height: 80,
                          borderRadius: 100,
                          margin: 10,
                        }}
                      />
                      <Text
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontSize: 16,
                        }}
                      >
                        {data.accountName}
                      </Text>
                      <Text style={{ color: "grey", fontSize: 12 }}>
                        {data.name}
                      </Text>
                      <TouchableOpacity
                        onPress={() => setIsFollow(!isFollow)}
                        style={{ width: "80%", paddingVertical: 10 }}
                      >
                        <View
                          style={{
                            width: "100%",
                            height: 30,
                            borderRadius: 5,
                            backgroundColor: isFollow ? "#404040" : "#3493D9",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Text style={{ color: "white", fontSize: 15 }}>
                            {isFollow ? "Following" : "Follow"}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              );
            })}
      </ScrollView>
    </View>
  );
};

export default FriendProfile;
