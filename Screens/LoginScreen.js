import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import LoginForm from "../Componenets/loginScreen/LoginForm";

const instagramLogo =
  "https://www.iconfinder.com/icons/5296765/download/png/512";

const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image source={{ uri: instagramLogo, height: 100, width: 100 }} />
    </View>
    <LoginForm navigation={navigation} />
  </View>
);

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

export default LoginScreen;
