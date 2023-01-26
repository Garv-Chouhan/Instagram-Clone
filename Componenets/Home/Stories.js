import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { USERS } from "../../data/users";

const Stories = ({ navigation }) => {
  return (
    <View
      style={{
        marginBottom: 15,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View
            key={index}
            style={{
              alignItems: "center",
              marginLeft: 15,
            }}
          >
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.push("StatusScreen", {
                  name: story.user,
                  image: story.image,
                })
              }
            >
              <Image source={{ uri: story.image }} style={styles.story} />
            </TouchableOpacity>
            <Text
              style={{
                color: "white",
                fontSize: 12,
                marginTop: 4,
                marginBottom: 8,
              }}
            >
              {story.user.length > 11
                ? story.user.slice(0, 9).toLowerCase() + "..."
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 65,
    height: 65,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
});
export default Stories;
