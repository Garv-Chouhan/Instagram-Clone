import { View, Text } from "react-native";
import React from "react";
import FriendProfile from "../Componenets/FriendProfileScreen/FriendProfile";

const FriendProfileScreen = ({ route, navigation }) => {
  return (
    <View>
      <FriendProfile route={route} navigation={navigation} />
    </View>
  );
};

export default FriendProfileScreen;
