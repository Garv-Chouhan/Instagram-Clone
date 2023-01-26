import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import AddNewPost from "../Componenets/Home/NewPost/AddNewPost";
const NewPostScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <StatusBar backgroundColor="black" barStyle="default" animated={false} />
      <AddNewPost navigation={navigation} />
    </SafeAreaView>
  );
};

export default NewPostScreen;
