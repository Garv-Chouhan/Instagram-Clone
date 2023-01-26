import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import { React, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { validate } from "email-validator";
import { firebase } from "../../firebase";
import { async } from "@firebase/util";

const LoginForm = ({ navigation }) => {
  const loginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    password: Yup.string()
      .required()
      .min(6, "Your password has to have at least 6 characters"),
  });

  const onLogin = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log("Firebase Login sucessful", email, password);
    } catch (error) {
      Alert.alert(
        "Dear User....",
        error.message + "\n\n... What would you like to do next!?",
        [
          {
            text: "OK",
            onPress: () => console.log("OK"),
            style: "cancel",
            borderWidth: 4,
            borderColor: "red",
          },
          {
            text: "Sign Up",
            onPress: () => navigation.push("SignupScreen"),
          },
        ]
      );
    }
  };
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          onLogin(values.email, values.password);
        }}
        validationSchema={loginFormSchema}
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
                textContentType="email-address"
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
                    1 > values.password.length || values.password.length >= 6
                      ? "black"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
              <Text style={{ color: "#0096F6" }}>Forget password?</Text>
            </View>

            <Pressable
              titleSize={40}
              style={styles.button(isValid)}
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
                Log In
              </Text>
            </Pressable>

            <View style={styles.SignUpConatiner}>
              <Text style={{ fontWeight: "600" }}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.push("SignupScreen")}>
                <Text style={{ color: "#0096F6" }}> Sign Up</Text>
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
    marginTop: 80,
  },
  inputField: {
    borderRadius: 2,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 0.15,
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  }),
  SignUpConatiner: {
    marginTop: 50,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
});
export default LoginForm;
