import { View, Text, Image, TextInput, Button } from "react-native";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useState } from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";
import validUrl from "valid-url";
import { db, firebase } from "../../../firebase";

const PlaceHolderImage =
  "https://trirama.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png";
const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL IS REQUIRED"),
  caption: Yup.string().max(2200, "Caption has reached the maximum character"),
});
const FormikPostUploader = ({ navigation }) => {
  const [thumbnailUrl, setthumbnailUrl] = useState(PlaceHolderImage);

  const [currentLoggedInUser, setcurrentLoggedInUser] = useState(null);

  const getUserName = () => {
    const user = firebase.auth().currentUser;
    const unsubscribe = db
      .collection("users")
      .where("owner_name", "==", user.uid)
      .limit(1)
      .onSnapshot((snapshot) =>
        snapshot.docs.map((doc) => {
          setcurrentLoggedInUser({
            username: doc.data().username,
            profilePicture: doc.data().profile_picture,
          });
        })
      );
    return unsubscribe;
  };

  useEffect(() => {
    getUserName();
  }, []);

  const uploadPostToFirebase = (imageUrl, caption) => {
    const unsubscribe = db
      .collection("users")
      .doc(firebase.auth().currentUser.email)
      .collection("posts")
      .add({
        imageUrl: imageUrl,
        user: currentLoggedInUser.username,
        profile_picture: currentLoggedInUser.profilePicture,
        owner_uid: firebase.auth().currentUser.uid,
        owner_email: firebase.auth().currentUser.email,
        caption: caption,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        likes_by_users: [],
        comments: [],
      })
      .then(() => navigation.goBack());
    return unsubscribe;
  };
  return (
    {
      /* <Formik is a from used for when we upload post in the form which is caption and an image or url  */
    },
    (
      <Formik
        initialValues={{ caption: "", imageUrl: "" }}
        onSubmit={(values) => {
          uploadPostToFirebase(values.imageUrl, values.caption);
        }}
        validationSchema={uploadPostSchema}
        validateOnMount={true}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View
              style={{
                marginTop: 20,
                marginBottom: 20,
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Image
                source={{
                  uri: validUrl.isUri(thumbnailUrl)
                    ? thumbnailUrl
                    : PlaceHolderImage,
                }}
                style={{ width: 100, height: 100 }}
              />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <TextInput
                  style={{ color: "white", fontSize: 20, marginLeft: 10 }}
                  placeholder="Write a Caption"
                  placeholderTextColor="gray"
                  multiline={true}
                  onChangeText={handleChange("caption")}
                  onBlur={handleBlur("caption")}
                  value={values.caption}
                />
              </View>
            </View>
            <Divider width={0.2} orientation="vertical" />
            <TextInput
              onChange={(e) => setthumbnailUrl(e.nativeEvent.text)}
              style={{ color: "white", fontSize: 18, marginTop: 10 }}
              placeholder="Enter Image Url"
              placeholderTextColor="grey"
              onChangeText={handleChange("imageUrl")}
              onBlur={handleBlur("imageUrl")}
              value={values.imageUrl}
            />
            {errors.imageUrl && (
              <Text
                style={{
                  fontSize: 10,
                  color: "red",
                  // marginTop: 2,
                  // marginBottom: 18,
                }}
              >
                {errors.imageUrl}
              </Text>
            )}
            <View
              style={{
                color: "black",
                backgroundColor: "black",
                marginTop: 10,
              }}
            >
              <Button
                onPress={handleSubmit}
                title="Share"
                disabled={!isValid}
              />
            </View>
          </>
        )}
      </Formik>
    )
  );
};

export default FormikPostUploader;
