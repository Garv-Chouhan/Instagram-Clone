import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { useState } from "react";
import { handleSignOut } from "./Header";

export const BottomTabIcons = [
  {
    name: "Home",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/FFFFFF/home.png",
    active: "https://img.icons8.com/fluency-systems-filled/48/FFFFFF/home.png",
  },
  {
    name: "Search",
    inactive: "https://img.icons8.com/ios-glyphs/30/FFFFFF/search--v1.png",
    active:
      "https://img.icons8.com/fluency-systems-filled/144/FFFFFF/search.png",
  },
  {
    name: "Reels",
    inactive: "https://img.icons8.com/ios/50/FFFFFF/instagram-reel.png",
    active: "https://img.icons8.com/ios-filled/50/FFFFFF/instagram-reel.png",
  },
  {
    name: "like",
    inactive:
      "https://img.icons8.com/material-outlined/24/FFFFFF/filled-like.png",
    active:
      "https://img.icons8.com/external-anggara-glyph-anggara-putra/32/FFFFFF/external-like-interface-anggara-glyph-anggara-putra.png",
  },
  {
    name: "Profile",
    inactive:
      "https://scontent.cdninstagram.com/v/t51.2885-19/281132933_114287984477337_7765943691409368260_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=QyDv0sh0twYAX_nZYfE&edm=APs17CUBAAAA&ccb=7-5&oh=00_AT8icwLWiRg8O2fXa2jQZ5wECbuCC1Ifp3Ynuw7Lzr-70A&oe=632C3EFA&_nc_sid=978cb9",
    active:
      "https://scontent.cdninstagram.com/v/t51.2885-19/281132933_114287984477337_7765943691409368260_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=109&_nc_ohc=QyDv0sh0twYAX_nZYfE&edm=APs17CUBAAAA&ccb=7-5&oh=00_AT8icwLWiRg8O2fXa2jQZ5wECbuCC1Ifp3Ynuw7Lzr-70A&oe=632C3EFA&_nc_sid=978cb9",
  },
];
const BottomTabs = ({ icons, navigation }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon, navigation }) => (
    <TouchableOpacity
      onPress={() => {
        icon.name === "Search" ? navigation.push("SearchScreen") : icon.name;
        setActiveTab(icon.name);
        icon.name === "Reels" ? navigation.push("ReelScreen") : icon.name;
        setActiveTab(icon.name);
        icon.name === "Home" ? navigation.goBack() : icon.name;
        // } else {
        //   icon.name;
        // }
        // if (icon.name === "Home") {
        //   navigation.goBack();
        //   setActiveTab(icon.name);
        // } else {
        //   icon.name;
        // }
      }}
    >
      <Image
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
        style={[
          styles.icon,
          icon.name === "Profile" ? styles.profile_pic() : null,
          activeTab === "Profile" && icon.name === activeTab
            ? styles.profile_pic(activeTab)
            : null,
        ]}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <Divider orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} navigation={navigation} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: "0%",
    zIndex: 999,
    backgroundColor: "#000",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 65,
    paddingTop: 10,
  },
  icon: {
    width: 28,
    height: 28,
  },

  profile_pic: (activeTab = "") => ({
    borderRadius: 50,
    borderWidth: activeTab === "Profile" ? 2 : 0,
    borderColor: "#fff",
  }),
});
export default BottomTabs;
