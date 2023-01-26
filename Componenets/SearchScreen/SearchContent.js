import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { date } from "yup";

const SearchContent = (props) => {
  const searchData = [
    {
      id: 0,
      images: [
        require("../../storage/images/part1.jpg"),
        require("../../storage/images/part2.jpg"),
        require("../../storage/images/part3.jpg"),
        require("../../storage/images/part4.jpg"),
        require("../../storage/images/part5.jpg"),
        require("../../storage/images/part6.jpg"),
      ],
    },
    {
      id: 1,
      images: [
        require("../../storage/images/part7.jpg"),
        require("../../storage/images/part8.jpg"),
        require("../../storage/images/part9.jpg"),
        require("../../storage/images/part10.jpg"),
        require("../../storage/images/part11.jpg"),
        require("../../storage/images/part12.jpg"),
      ],
    },
    {
      id: 2,
      images: [
        require("../../storage/images/part13.jpg"),
        require("../../storage/images/part14.jpg"),
        require("../../storage/images/part15.jpg"),
      ],
    },
  ];
  return (
    <View style={{ marginTop: 10 }}>
      {searchData.map((data, index) => {
        return (
          <>
            {data.id === 0 ? (
              <View
                key={index}
                style={{
                  //   flex: 1,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  //   justifyContent: "space-between",
                }}
              >
                {data.images.map((imgData, imgIndex) => {
                  return (
                    <TouchableOpacity
                      onLongPress={() => props.data(imgData)}
                      onPressOut={() => props.data(null)}
                      key={imgIndex}
                    >
                      <Image
                        source={imgData}
                        style={{ width: 116, height: 150, margin: 2 }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
            {data.id === 1 ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  //   flexWrap: "wrap",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: 243,
                    // margin: 2,
                    // justifyContent: "space-between",
                  }}
                >
                  {data.images.slice(0, 4).map((imgData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        onLongPress={() => props.data(imgData)}
                        onPressOut={() => props.data(null)}
                        key={imgIndex}
                      >
                        <Image
                          source={imgData}
                          style={{ width: 116, height: 150, margin: 2 }}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity
                  onLongPress={() => props.data(data.images[5])}
                  onPressOut={() => props.data(null)}
                >
                  <Image
                    source={data.images[5]}
                    style={{ width: 185, height: 303, marginTop: 2 }}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
            {data.id === 2 ? (
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onLongPress={() => props.data(data.images[2])}
                  onPressOut={() => props.data(null)}
                >
                  <Image
                    source={data.images[2]}
                    style={{ width: 237, height: 250, margin: 2 }}
                  />
                </TouchableOpacity>
                <View>
                  {data.images.slice(0, 2).map((imgData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        onLongPress={() => props.data(imgData)}
                        onPressOut={() => props.data(null)}
                        key={imgIndex}
                      >
                        <Image
                          source={imgData}
                          style={{ width: 117, height: 123, margin: 2 }}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </>
        );
      })}
    </View>
  );
};

export default SearchContent;
