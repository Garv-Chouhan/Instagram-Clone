import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";

export const ProfileBody = ({
  name,
  accountName,
  profileImage,
  post,
  followers,
  following,
}) => {
  return (
    <View>
      {accountName ? null : (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            paddingVertical: 30,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              source={profileImage}
              style={{
                width: 80,
                height: 80,
                borderRadius: 100,
                resizeMode: "cover",
              }}
            />
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                paddingVertical: 5,
              }}
            >
              {name}
            </Text>
          </View>
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              {post}
            </Text>
            <Text style={{ color: "white" }}>Posts</Text>
          </View>
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              {followers}
            </Text>
            <Text style={{ color: "white" }}>Followers</Text>
          </View>
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              {following}
            </Text>
            <Text style={{ color: "white" }}>Following</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export const ProfileButtons = ({ id }) => {
  const [follow, setfollow] = useState(follow);
  return (
    <>
      {id === 0 ? null : (
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ width: "42%" }}
            onPress={() => setfollow(!follow)}
          >
            <View
              style={{
                width: "100%",
                height: 38,
                borderRadius: 5,
                backgroundColor: follow ? "#404040" : "#3493D9",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
              >
                {follow ? "Following" : " Follow"}
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              width: "42%",
              height: 38,
              backgroundColor: "#404040",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "white" }}>Message</Text>
          </View>
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
            <Feather
              name="chevron-down"
              style={{ color: "white", fontSize: 20 }}
            />
          </View>
        </View>
      )}
    </>
  );
};
