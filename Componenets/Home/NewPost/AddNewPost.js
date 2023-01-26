import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import FormikPostUploader from "./FormikPostUploader";

const AddNewPost = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <FormikPostUploader navigation={navigation} />
    </View>
  );
};

const Header = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={{ uri: "https://img.icons8.com/ios/50/FFFFFF/multiply.png" }}
        style={{ width: 45, height: 45 }}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>New Post</Text>
    <Text></Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },

  headerContainer: {
    // marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
    marginRight: 27.5,
  },
});
export default AddNewPost;
