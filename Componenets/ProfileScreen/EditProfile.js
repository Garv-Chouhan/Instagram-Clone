import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import Ionic from "react-native-vector-icons/Ionicons";

const EditProfile = ({ route, navigation }) => {
  const { name, accountName, postImage } = route.params;
  const ToastMessage = () => {
    ToastAndroid.show("Edited Sucessfully", ToastAndroid.SHORT);
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "black",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="close-outline" style={{ fontSize: 42 }} color="white" />
        </TouchableOpacity>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          Edit Profile
        </Text>
        <TouchableOpacity
          onPress={() => {
            ToastMessage();
            navigation.goBack();
          }}
        >
          <Ionic name="checkmark" style={{ fontSize: 38 }} color="#3493D9" />
        </TouchableOpacity>
      </View>
      <View style={{ padding: 20, alignItems: "center" }}>
        <Image
          source={{ uri: postImage }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 100,
          }}
        />
        <Text
          style={{
            color: "#3493D9",
            fontSize: 20,
            marginTop: 10,
          }}
        >
          Change profile photo
        </Text>
      </View>
      <View style={{ padding: 15 }}>
        <View>
          <Text style={{ color: "#808080", marginBottom: 5 }}>Name</Text>
          <TextInput
            placeholder="name"
            defaultValue={name}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: "#CDCDCD",
              color: "white",
            }}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Text style={{ color: "#808080", marginBottom: 5 }}>Username</Text>
          <TextInput
            placeholder="accountname"
            defaultValue={accountName}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: "#CDCDCD",
              color: "white",
            }}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <TextInput
            defaultValue="Bio"
            style={{
              color: "#808080",
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: "#CDCDCD",
            }}
          />
        </View>
        <Text style={{ color: "white", fontSize: 16, marginVertical: 5 }}>
          Add link
        </Text>
      </View>
      <View>
        <Text
          style={{
            padding: 15,
            // marginVertical: 10,
            color: "#3493D9",
            borderTopWidth: 0.2,
            // borderBottomWidth: 0.2,
            borderColor: "#909090",
            fontSize: 16,
          }}
        >
          Switch to Professional account
        </Text>
        <Text
          style={{
            padding: 15,
            // marginVertical: 10,
            color: "#3493D9",
            borderTopWidth: 0.2,
            // borderBottomWidth: 0.2,
            borderColor: "#909090",
            fontSize: 16,
          }}
        >
          Create Avatar
        </Text>
        <Text
          style={{
            padding: 15,
            // marginVertical: 10,
            color: "#3493D9",
            borderTopWidth: 0.2,
            borderBottomWidth: 0.2,
            borderColor: "#909090",
            fontSize: 16,
          }}
        >
          Personal information settings
        </Text>
      </View>
    </View>
  );
};

export default EditProfile;
