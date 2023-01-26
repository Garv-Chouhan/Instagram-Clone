import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { firebase, db } from "../../firebase";

export const postFooterIcons = [
  {
    name: "Like",
    imageUrl:
      "https://img.icons8.com/material-outlined/24/FFFFFF/filled-like.png",
    likedImageUrl:
      "https://img.icons8.com/fluency-systems-filled/48/ff0000/like.png",
  },
  {
    name: "Comment",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/48/FFFFFF/speech-bubble--v1.png",
  },
  {
    name: "Share",
    imageUrl: "https://img.icons8.com/ios/50/FFFFFF/sent.png",
  },
  {
    name: "Save",
    imageUrl:
      "https://img.icons8.com/windows/32/FFFFFF/bookmark-ribbon--v1.png",
  },
];
const Post = ({ post }) => {
  const handleLike = (post) => {
    const currentLikeStatus = !post.likes_by_users.includes(
      firebase.auth().currentUser.email
    );

    db.collection("users")
      .doc(post.owner_email)
      .collection("posts")
      .doc(post.id)
      .update({
        likes_by_users: currentLikeStatus
          ? firebase.firestore.FieldValue.arrayUnion(
              firebase.auth().currentUser.email
            )
          : firebase.firestore.FieldValue.arrayRemove(
              firebase.auth().currentUser.email
            ),
      })
      .then(() => {
        console.log("Document successfully updated");
      })
      .catch((error) => {
        console.log("Error updating document :", error);
      });
  };
  return (
    <View style={{ marginBottom: 10 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <PostFooter post={post} handleLike={handleLike} />
        <Likes post={post} />
        <Caption post={post} />
        <CommnetsSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 5,
      marginBottom: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text
        style={{
          color: "white",
          marginLeft: 15,
          fontWeight: "700",
          marginTop: 5,
        }}
      >
        {post.user}
      </Text>
    </View>
    <Text
      style={{
        color: "white",
        fontWeight: "900",
        fontSize: 20,
        marginRight: 10,
      }}
    >
      ...
    </Text>
  </View>
);

export const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450, marginTop: 10 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = ({ handleLike, post, navigation }) => (
  <View style={{ flexDirection: "row" }}>
    <View style={styles.leftFooterIcons}>
      <TouchableOpacity onPress={() => handleLike(post)}>
        <Image
          style={styles.footerIcon1}
          source={{
            uri: post.likes_by_users.includes(firebase.auth().currentUser.email)
              ? postFooterIcons[0].likedImageUrl
              : postFooterIcons[0].imageUrl,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.footerIcon2}
          source={{ uri: postFooterIcons[1].imageUrl }}
        />
      </TouchableOpacity>
      <Icon
        imgStyle={styles.footerIcon3}
        imgUrl={postFooterIcons[2].imageUrl}
      />
    </View>
    <View style={{ flex: 1, alignItems: "flex-end" }}>
      <Icon
        imgStyle={styles.footerIcon4}
        imgUrl={postFooterIcons[3].imageUrl}
      />
    </View>
  </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4, marginLeft: 8 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes_by_users.length} Likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 2, marginLeft: 8 }}>
    <Text style={{ color: "white", marginLeft: 1 }}>
      <Text style={{ fontWeight: "600" }}>{post.user} </Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

const CommnetsSection = ({ post }) => (
  <View style={{ marginTop: 5, marginLeft: 5 }}>
    {!!post.comments.length && (
      <Text style={{ color: "gray" }}>
        View {post.comments.length > 1 ? "all" : ""} {post.comments.length}{" "}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View
        key={index}
        style={{ flexDirection: "row", marginTop: 5, marginHorizontal: 5 }}
      >
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "600" }}>{comment.user} </Text>
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);
const styles = StyleSheet.create({
  story: {
    marginLeft: 15,
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1.6,
    borderColor: "#ff8501",
    marginTop: 10,
  },

  footerIcon1: {
    width: 28,
    height: 28,
    marginLeft: 5,
  },
  footerIcon2: {
    width: 25,
    height: 25,
    marginHorizontal: 17,
  },
  footerIcon3: {
    width: 25,
    height: 25,
  },
  footerIcon4: {
    width: 32,
    height: 32,
  },

  leftFooterIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Post;
