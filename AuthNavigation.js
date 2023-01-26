import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SignedInStack, SignedOutStack } from "./navigation";
import { firebase } from "./firebase";

const AuthNavigation = () => {
  const [currentUser, setcurrentUser] = useState(null);

  const useHandler = (user) =>
    user ? setcurrentUser(user) : setcurrentUser(null);

  useEffect(
    () => firebase.auth().onAuthStateChanged((user) => useHandler(user)),
    []
  );

  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>;

  // use can use 2 , 3 ways to return something ->

  // 1. const unsubscribe = firebase.auth().onAuthStateChanged(user => useGestureHandlerRef(user))
  // return unsubscribe

  // 2. return firebase.auth().onAuthStateChanged(user => useGestureHandlerRef(user))

  // 3. useEffect(  this is called implicit return
  //     () =>
  //     firebase.auth().onAuthStateChanged(user => useGestureHandlerRef(user))
  //     []
  // )
};

export default AuthNavigation;
