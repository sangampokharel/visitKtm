import React from "react";
import { View, Text, StyleSheet } from "react-native";
import List from "../../components/List/List";
import { useSelector } from "react-redux";

const FoodsScreen = ({ navigation }) => {
  // const { Foods } = useSelector(state => state.foods)
  const Foods = [
    {
      id: "1",
      title: "Momo",
      avatar:
        "https://www.holidify.com/images/cmsuploads/compressed/Momo_ring_20190717185705.jpg",
    },
    {
      id: "2",
      title: "Chatamari",
      avatar:
        "https://www.holidify.com/images/cmsuploads/compressed/800px-Meat_Chatamari_20190717190111.jpg",
    },
    {
      id: "3",
      title: "Choila",
      avatar:
        "https://www.holidify.com/images/cmsuploads/compressed/Chhwela_20190717190400.jpg",
    },
    {
      id: "4",
      title: "Maas ko Bara",
      avatar:
        "https://www.holidify.com/images/cmsuploads/compressed/Wo_28Newari_Lentil_Pancakes29_20190717190934.jpg",
    },
    {
      id: "5",
      title: "Sekuwa",
      avatar:
        "https://www.holidify.com/images/cmsuploads/compressed/Wildboar_sekuwa_KF_20190717191157.JPG",
    },
    {
      id: "6",
      title: "Thukpa-Tebetian Comfort",
      avatar:
        "https://www.holidify.com/images/cmsuploads/compressed/A_bowl_of_Thukpa_20190717191750.jpg",
    },
  ];
  return (
    <View>
      <List data={Foods} routeName="FoodDetails" navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default FoodsScreen;
