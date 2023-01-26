import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import React from "react";

const SearchBox = () => {
  return (
    <View style={styles.SearchCom}>
      <Image
        source={{
          uri: "https://img.icons8.com/ios-glyphs/30/FFFFFF/search--v1.png",
        }}
        style={{
          height: 20,
          width: 20,
          marginLeft: 15,
        }}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#909090"
        style={styles.SearchText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SearchText: {
    fontSize: 15,
    padding: 5,
    paddingLeft: 15,
    color: "white",
    width: "90%",
  },
  SearchCom: {
    marginTop: 20,
    marginLeft: 15,
    flexDirection: "row",
    backgroundColor: "#303030",
    alignItems: "center",
    width: "90%",
    borderRadius: 10,
  },
});
export default SearchBox;
