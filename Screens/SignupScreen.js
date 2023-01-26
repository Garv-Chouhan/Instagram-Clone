import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import SignupForm from "../Componenets/SignupScreen/SignupForm";

const instagramLogo =
  "https://www.iconfinder.com/icons/5296765/download/png/512";
const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: instagramLogo, height: 100, width: 100 }} />
      </View>
      <SignupForm navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
});

export default SignupScreen;
