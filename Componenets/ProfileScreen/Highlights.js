import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { USERS } from "../../data/users";
import Entypo from "react-native-vector-icons/Entypo";
import { Highlight } from "../../data/Highlight";

const Highlights = () => {
  return (
    <View>
      <View
        style={{
          marginBottom: 15,
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 100,
                borderWidth: 1,
                borderColor: "white",
                marginHorizontal: 5,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 15,
              }}
            >
              <Entypo name="plus" style={{ fontSize: 40, color: "white" }} />
            </View>
          </TouchableOpacity>

          {Highlight.map((story, index) => (
            <View key={index} style={{ alignItems: "center", marginLeft: 15 }}>
              <TouchableOpacity key={index}>
                <Image
                  source={{ uri: story.image }}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 100,
                    backgroundColor: "#404040",
                  }}
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Highlights;
