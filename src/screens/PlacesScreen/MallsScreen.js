import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import List from "../../components/List/List";
const MallsScreen = ({ navigation }) => {
  // const { malls } = useSelector(state => state.malls);
  const malls = [
    {
      id: "1",
      avatar:
        "https://www.holidify.com/images/cmsuploads/compressed/6284914459_5cc7e27902_b_20190613190258.jpg",
      title: "Civil Mahal",
    },
    {
      id: "2",
      avatar:
        "https://www.holidify.com/images/cmsuploads/compressed/ctc_20190613190649.jpg",
      title: "Civil Trade Centre (CTC) Mall",
    },
    {
      id: "3",
      avatar:
        "https://www.holidify.com/images/cmsuploads/compressed/532357_4468104195072_270196297_n_20190613191153.jpg",
      title: "K L Tower and Multicomplex",
    },
    {
      id: "4",
      avatar:
        "https://www.holidify.com/images/cmsuploads/compressed/11424320864_9fd16d3c90_b_20190613191426.jpg",
      title: "Civil Mall",
    },
  ];
  return (
    <View>
      <List data={malls} routeName="MallsDetails" navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MallsScreen;
