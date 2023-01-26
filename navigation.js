// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeScreen from "./Screens/HomeScreen";
// import NewPostScreen from "./Screens/NewPostScreen";
// import "react-native-gesture-handler";
// import LoginScreen from "./Screens/LoginScreen";
// import SignupScreen from "./Screens/SignupScreen";
// import StatusScreen from "./Screens/StatusScreen";
// import SearchScreen from "./Screens/SearchScreen";
// import ReelScreen from "./Screens/ReelScreen";
// import ProfileScreen from "./Screens/ProfileScreen";
// import ActivityScreen from "./Screens/ActivityScreen";
// import { View } from "react-native";
// import BottomTabs from "./Componenets/Home/BottomTabs";
// import { BottomTabIcons } from "./Componenets/Home/BottomTabs";

// const Stack = createStackNavigator();

// export const SignedInStack = ({ navigation }) => {
//   return (
//     <NavigationContainer>
//       {/* if user is logged in -> then user can only be able to acesss HomeScreen and NewPostScreen */}
//       <Stack.Navigator
//         initialRouteName="HomeScreen"
//         screenOptions={screenOptions}
//       >
//         <Stack.Screen name="HomeScreen" component={HomeScreen} />
//         <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
//         <Stack.Screen name="StatusScreen" component={StatusScreen} />
//         <Stack.Screen name="SearchScreen" component={SearchScreen} />
//         <Stack.Screen name="ReelScreen" component={ReelScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//     // if user is not logged in -> then user can only be able to acesss LoginScreen and SignupScreen
//   );
// };

import React from "react";
import { Image, TouchableOpacity, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";
import Ionic from "react-native-vector-icons/Ionicons";
import HomeScreen from "./Screens/HomeScreen";
import SearchScreen from "./Screens/SearchScreen";
import ReelScreen from "./Screens/ReelScreen";
import ActivityScreen from "./Screens/ActivityScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import StatusScreen from "./Screens/StatusScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignupScreen from "./Screens/SignupScreen";
import NewPostScreen from "./Screens/NewPostScreen";
import FriendProfileScreen from "./Screens/FriendProfileScreen";
import EditProfile from "./Componenets/ProfileScreen/EditProfile";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
export const SignedInStack = ({ navigation }) => {
  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 60,
            backgroundColor: "black",
          },
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
          gestureEnabled: true,
          animationEnabled: true,
          gestureDirection: "horizontal",
          gestureResponseDistance: 50,

          tabBarIcon: ({ focused, size, colour }) => {
            let iconName;
            if (route.name === "HomeScreen") {
              iconName = focused ? "home-sharp" : "home-outline";
              size = focused ? size + 2 : size + 4;
              colour = focused ? "white" : "white";
            } else if (route.name === "SearchScreen") {
              iconName = focused ? "search" : "ios-search-outline";
              size = focused ? size + 2 : size + 4;
              colour = focused ? "white" : "white";
            } else if (route.name === "ReelScreen") {
              iconName = focused
                ? "caret-forward-circle"
                : "caret-forward-circle-outline";
              size = focused ? size + 2 : size + 4;
              colour = focused ? "white" : "white";
            } else if (route.name === "ActivityScreen") {
              iconName = focused ? "ios-heart" : "ios-heart-outline";
              size = focused ? size + 2 : size + 4;
              colour = focused ? "white" : "white";
            } else if (route.name === "ProfileScreen") {
              iconName = focused ? "ios-person-circle" : "ios-person-outline";
              size = focused ? size + 5 : size + 1;
              colour = focused ? "white" : "white";
            }
            return <Ionic name={iconName} size={size} color={colour} />;
          },
        })}
      >
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="SearchScreen" component={SearchScreen} />
        <Tab.Screen name="ReelScreen" component={ReelScreen} />
        <Tab.Screen name="ActivityScreen" component={ActivityScreen} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
          gestureEnabled: true,
          animationEnabled: true,
          gestureDirection: "horizontal",
          gestureResponseDistance: 50,
        }}
      >
        <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} />
        <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
        <Stack.Screen name="StatusScreen" component={StatusScreen} />
        <Stack.Screen
          name="FriendProfileScreen"
          component={FriendProfileScreen}
        />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const screenOptions = {
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
  gestureEnabled: true,
  animationEnabled: true,
  gestureDirection: "horizontal",
  gestureResponseDistance: 50,
};
export const SignedOutStack = () => (
  <NavigationContainer>
    {/* if user is logged in -> then user can only be able to acesss HomeScreen and NewPostScreen */}
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  </NavigationContainer>

  // if user is not logged in -> then user can only be able to acesss LoginScreen and SignupScreen
);
