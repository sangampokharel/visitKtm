import React from "react";
import { View } from "react-native";

const HandyTips = () => {
  const list = [
    {
      title: "Currency Used In Nepal",
      description: "Currency used in Nepal are said as rupees where you",
    },
    {
      title: "Currency Used In Nepal",
      description: "Currency used in Nepal are said as rupees where you",
    },
    {
      title: "Currency Used In Nepal",
      description: "Currency used in Nepal are said as rupees where you",
    },
  ];

  return (
    <View>
      <Text style={{ textAlign: "center", marginVertical: 20, fontSize: 25 }}>
        Handy Tips
      </Text>
    </View>
  );
};

export default HandyTips;
