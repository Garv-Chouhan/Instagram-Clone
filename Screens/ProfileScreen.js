import { View, Text } from "react-native";
import React from "react";
import Profile from "../Componenets/ProfileScreen/Profile";

const ProfileScreen = ({ route, navigation }) => {
  return (
    <View>
      <Profile
        name="Mr. Nobody"
        accountName="mr. nobody"
        postImage="https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        route={route}
        navigation={navigation}
      />
    </View>
  );
};

export default ProfileScreen;
