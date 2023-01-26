import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import Status from "../Componenets/StatusScreen/Status";

const StatusScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <StatusBar backgroundColor="black" barStyle="default" animated={false} />
      <Status route={route} navigation={navigation} />
    </SafeAreaView>
  );
};

export default StatusScreen;
