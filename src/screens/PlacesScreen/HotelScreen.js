import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import List from "../../components/List/List";
const HotelScreen = ({ navigation }) => {
  // const { Hotels } = useSelector(state => state.hotels);
  const Hotels = [
    {
      id: "1",
      title: "Emkay Apartment",
      avatar:
        "https://q-cf.bstatic.com/images/hotel/max1024x768/239/239035414.jpg",
    },
    {
      id: "2",
      title: "Spot On 42 Miracle",
      avatar:
        "https://q-cf.bstatic.com/images/hotel/max1024x768/210/210516036.jpg",
    },
    {
      id: "3",
      title: "Organic Home",
      avatar:
        "https://q-cf.bstatic.com/images/hotel/max1024x768/208/208105699.jpg",
    },
    {
      id: "4",
      title: "Fat Farm Hostel & Kitchen",
      avatar:
        "https://r-cf.bstatic.com/images/hotel/max1024x768/240/240096119.jpg",
    },
    {
      id: "5",
      title: "Hotel Sweet Home",
      avatar:
        "https://r-cf.bstatic.com/images/hotel/max1024x768/186/186208578.jpg",
    },
  ];

  return (
    <View>
      <List data={Hotels} routeName="HotelDetails" navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HotelScreen;
