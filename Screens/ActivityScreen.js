import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { friendProfile } from "../Componenets/ReelScreen/Database";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import Ant from "react-native-vector-icons/AntDesign";

const ActivityScreen = ({ navigation }) => {
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "black" }}>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
          borderBottomWidth: 0.2,
          borderBottomColor: "#909090",
          padding: 10,
          marginHorizontal: 5,
        }}
      >
        Nortifications
      </Text>
      <ScrollView style={{ margin: 10 }}>
        <Text
          style={{
            color: "white",
            fontSize: 17,
            fontWeight: "bold",
            marginHorizontal: 5,
          }}
        >
          This Week
        </Text>
        <View style={{ marginTop: 25, marginHorizontal: 5 }}>
          {friendProfile.slice(0, 3).map((data, index) => {
            const [follow, setFollow] = useState(data.follow);
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 20,
                  justifyContent: "space-between",
                }}
                key={index}
              >
                <TouchableOpacity
                  onPress={() =>
                    navigation.push("FriendProfileScreen", {
                      name: data.name,
                      profileImage: data.profileImage,
                      follow: data.follow,
                      post: data.posts,
                      followers: data.followers,
                      following: data.following,
                    })
                  }
                >
                  <Image
                    source={data.profileImage}
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: 100,
                      // marginRight: 10,
                    }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  key={index}
                  style={{ marginRight: 60 }}
                  onPress={() =>
                    navigation.push("FriendProfileScreen", {
                      name: data.name,
                      profileImage: data.profileImage,
                      follow: data.follow,
                      post: data.posts,
                      followers: data.followers,
                      following: data.following,
                    })
                  }
                >
                  <Text style={{ color: "white", fontSize: 15 }}>
                    {data.name}
                  </Text>
                  <Text style={{ color: "white" }}>started following you.</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setFollow(!follow)}
                  style={{
                    width: 70,
                  }}
                >
                  <View
                    style={{
                      width: follow ? 75 : 70,
                      height: 35,
                      borderRadius: 10,
                      backgroundColor: follow ? "#404040" : "#3493D9",
                      // borderWidth: follow ? 1 : 0,
                      // borderColor: follow ? "#DEDEDE" : null,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      {follow ? "Following" : "Follow"}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>

        <Text
          style={{
            color: "white",
            fontSize: 17,
            fontWeight: "bold",
            marginHorizontal: 5,
            marginTop: 30,
          }}
        >
          Earlier
        </Text>
        <View style={{ marginTop: 25, marginHorizontal: 5 }}>
          {friendProfile.slice(3, 9).map((data, index) => {
            const [follow, setFollow] = useState(data.follow);
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 20,
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    navigation.push("FriendProfileScreen", {
                      name: data.name,
                      profileImage: data.profileImage,
                      follow: data.follow,
                      post: data.posts,
                      followers: data.followers,
                      following: data.following,
                    })
                  }
                >
                  <Image
                    source={data.profileImage}
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: 100,
                      // marginRight: 10,
                    }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  key={index}
                  style={{
                    marginRight: 10,
                    width: "57%",
                    height: "100%",
                  }}
                  onPress={() =>
                    navigation.push("FriendProfileScreen", {
                      name: data.name,
                      profileImage: data.profileImage,
                      follow: data.follow,
                      post: data.posts,
                      followers: data.followers,
                      following: data.following,
                    })
                  }
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                    {data.name}
                    <Text style={{ color: "white" }}>
                      , who you might know,is on instagram
                    </Text>
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setFollow(!follow)}
                  style={{
                    width: 70,
                  }}
                >
                  <View
                    style={{
                      width: follow ? 75 : 70,
                      height: 35,
                      borderRadius: 10,
                      backgroundColor: follow ? "#404040" : "#3493D9",
                      // borderWidth: follow ? 1 : 0,
                      // borderColor: follow ? "#DEDEDE" : null,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      {follow ? "Following" : "Follow"}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>

        <View>
          <Text
            style={{
              color: "white",
              fontSize: 17,
              fontWeight: "bold",
              marginHorizontal: 5,
              marginTop: 30,
            }}
          >
            Suggestions for you
          </Text>
          <View style={{ marginTop: 25, marginHorizontal: 5 }}>
            {friendProfile.slice(9, 14).map((data, index) => {
              const [follow, setFollow] = useState(data.follow);
              const [close, setCLose] = useState(false);
              return (
                <View key={index}>
                  {close ? null : (
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 20,
                        justifyContent: "space-between",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() =>
                          navigation.push("FriendProfileScreen", {
                            name: data.name,
                            accountName: data.accountName,
                            profileImage: data.profileImage,
                            follow: data.follow,
                            post: data.posts,
                            followers: data.followers,
                            following: data.following,
                          })
                        }
                      >
                        <Image
                          source={data.profileImage}
                          style={{
                            width: 60,
                            height: 60,
                            borderRadius: 100,
                            // marginRight: 10,
                          }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        key={index}
                        style={{ marginRight: 40 }}
                        onPress={() =>
                          navigation.push("FriendProfileScreen", {
                            name: data.name,
                            profileImage: data.profileImage,
                            follow: data.follow,
                            post: data.posts,
                            followers: data.followers,
                            following: data.following,
                          })
                        }
                      >
                        <Text style={{ color: "white", fontSize: 15 }}>
                          {data.name}
                        </Text>
                        <Text style={{ color: "grey" }}>
                          {data.accountName}
                        </Text>
                        <Text style={{ color: "grey" }}>Suggested for you</Text>
                      </TouchableOpacity>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "25%",
                        }}
                      >
                        <TouchableOpacity
                          onPress={() => setFollow(!follow)}
                          style={{
                            width: follow ? 90 : 78,
                          }}
                        >
                          <View
                            style={{
                              width: "100%",
                              height: 35,
                              borderRadius: 10,
                              backgroundColor: follow ? "#404040" : "#3493D9",
                              borderWidth: follow ? 1 : 0,
                              // borderColor: follow ? "#DEDEDE" : null,
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Text
                              style={{
                                color: "white",
                                fontSize: 15,
                                fontWeight: "bold",
                              }}
                            >
                              {follow ? "Following" : "Follow"}
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{ paddingHorizontal: 5 }}
                          onPress={() => setCLose(true)}
                        >
                          <Ant
                            name="close"
                            style={{
                              color: "gray",
                              fontSize: 14,
                              display: follow ? "none" : null,
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ActivityScreen;
