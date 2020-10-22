import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import MoreInfo from "../../../components/MoreInfo/MoreInfo";
import Description from "../../../components/Description/Description";
import HeaderImage from "../../../components/HeaderImage/HeaderImage";
import { useSelector } from "react-redux";
const AttractionDetailsScreen = ({ navigation }) => {
  // const { Attraction } = useSelector(state => state.attractions);
  const item = navigation.getParam("item");

  // const newAttraction = Attraction.find(attr => attr.id === id)

  return (
    <View style={{ flex: 1 }}>
      <HeaderImage avatar={item.avatar} navigation={navigation} />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Description description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32" />
        <MoreInfo phone="98765432" website="http://www.gooogle.com" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
});

export default AttractionDetailsScreen;
