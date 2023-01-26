import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { firebase } from "../../firebase";
import SearchContent from "../SearchScreen/SearchContent";

export const handleSignOut = async () => {
  try {
    firebase.auth().signOut();
    console.log("Signed Out Sucessfully");
  } catch (error) {
    console.log(error.message);
  }
};

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignOut}>
        <Image
          style={styles.logo}
          source={require("../../assets/images.png")}
        />
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
          <Image
            source={require("../../assets/instagram-3814084_1280-removebg-preview.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>1</Text>
          </View>
          <Image
            source={require("../../assets/9ae3b9d93a639d0e0198be65d4c84bdd-removebg-preview.png")}
            style={styles.icon2}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    // marginTop: 40,
    flexDirection: "row",
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  logo: {
    // marginTop: 43,
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  icon: {
    width: 45,
    height: 45,
    marginLeft: 10,
    resizeMode: "contain",
  },
  icon2: {
    marginTop: 5,
    width: 35,
    height: 35,
    marginLeft: 10,
    resizeMode: "contain",
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 30,
    bottom: 25,
    width: 18,
    height: 18,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
    paddingBottom: 4.5,
  },
});
export default Header;
