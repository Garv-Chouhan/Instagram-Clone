import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../Componenets/Home/Header";
import Stories from "../Componenets/Home/Stories";
import Post from "../Componenets/Home/Post";
import { POSTS } from "../data/posts";
import BottomTabs, { BottomTabIcons } from "../Componenets/Home/BottomTabs";
import { db } from "../firebase";
import { allreadyPost } from "../data/posts";

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collectionGroup("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((post) => ({ id: post.id, ...post.data() }))
        );
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="default" animated={false} />
      <Header navigation={navigation} />
      <ScrollView>
        <Stories navigation={navigation} />
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
        {allreadyPost.map((postimg, index) => (
          <Post post={postimg} key={index} />
        ))}
      </ScrollView>
      {/* <BottomTabs icons={BottomTabIcons} navigation={navigation} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
export default HomeScreen;
