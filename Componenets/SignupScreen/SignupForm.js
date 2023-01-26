import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { validate } from "email-validator";
import { firebase, db } from "../../firebase";
import { async } from "@firebase/util";

const SignupForm = ({ navigation }) => {
  const SignupFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    username: Yup.string().required().min(2, "An username is required"),
    password: Yup.string()
      .required()
      .min(6, "Your password has to have at least 6 characters"),
  });

  const getRandomProfilePicture = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data.results[0].picture.large;
  };
  const onSignUp = async (email, password, username) => {
    try {
      const authUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log("Firebase Created Sucessfully", email, password);

      db.collection("users")
        .doc(authUser.user.email)
        .set({
          owner_name: authUser.user.uid,
          username: username,
          email: authUser.user.email,
          profile_picture: await getRandomProfilePicture(),
        });
    } catch (error) {
      Alert.alert("Dear User...", error.message);
    }
  };
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={(values) => {
          onSignUp(values.email, values.password, values.username);
        }}
        validationSchema={SignupFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || validate(values.email)
                      ? "black"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Phone number , username or email"
                autoCapitalize="none"
                keyboardType="email-address"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>

            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.username.length || values.username.length >= 2
                      ? "black"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholder="Username"
                placeholderTextColor="#444"
                autoCapitalize="none"
                textContentType="username"
                onChangeText={handleChange("username")}
                onBlur={handleBlur("email")}
                value={values.username}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 6
                      ? "black"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholder="Password"
                placeholderTextColor="#444"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}
              // disabled={!isValid}
            >
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
                Sign Up
              </Text>
            </Pressable>

            <View style={styles.LoginConatiner}>
              <Text style={{ fontWeight: "600" }}>
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: "#0096F6" }}> Log In</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 60,
  },
  inputField: {
    borderRadius: 2,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 0.15,
  },
  button: (isValid) => ({
    marginTop: 50,
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  }),
  LoginConatiner: {
    marginTop: 50,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
});
export default SignupForm;
