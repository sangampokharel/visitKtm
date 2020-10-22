import React from "react";
import { View } from "react-native";
import List from "../../components/List/List";
import { heightToDp, widthToDp } from "../../../utlis/Responsive";
import { useSelector } from "react-redux";
const AttractionScreen = ({ navigation }) => {
  // const { Attraction } = useSelector(state => state.attractions)
  const Attraction = [
    {
      id: "1",
      title: "Nagarkot ",
      description: "Taste Something Different ",
      avatar:
        "http://volunteerworknepal.com/wp-content/uploads/2018/11/Nagarkot-Valley.jpg",
      phone: "986745",
      website: "https://www.google.com",
    },
    {
      id: "2",
      title: "Pashupatinath",
      description: "Discover Places in Cities",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/108_Night_View_Of_Pasupatinath_Temple.jpg/1920px-108_Night_View_Of_Pasupatinath_Temple.jpg",
    },
    {
      id: "3",
      title: "Swayambhunath",
      description: "Come for atmoshere stay for company",
      avatar:
        "http://ttnotes.com/images/swayambhunath-stupa-swayambhunath-2.jpg",
    },
    {
      id: "4",
      title: "Bhaktapur",
      description: "Chase the excitment and thrilles",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Bhaktapur_Taumadhi_Tol.JPG/640px-Bhaktapur_Taumadhi_Tol.JPG",
    },
    {
      id: "5",
      title: "Chandragiri",
      description: "Experience in Arts and Culture",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Panorama_view_of_Kathmandu.jpg/1920px-Panorama_view_of_Kathmandu.jpg",
    },
  ];
  return (
    <View>
      <List
        data={Attraction}
        navigation={navigation}
        routeName="AttractionDetails"
      />
    </View>
  );
};

export default AttractionScreen;
