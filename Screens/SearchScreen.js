import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Search from "../Componenets/SearchScreen/Search";
import BottomTabs from "../Componenets/Home/BottomTabs";
import { BottomTabIcons } from "../Componenets/Home/BottomTabs";

const SearchScreen = ({ navigation }) => {
  return (
    <View>
      <Search navigation={navigation} />
      {/* <BottomTabs icons={BottomTabIcons} navigation={navigation} /> */}
    </View>
  );
};

export default SearchScreen;
