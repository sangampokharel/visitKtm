import React from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import AdvancedCard from "../AdvancedCard/AdvancedCard";
import PlacesCard from "../Cards/PlacesCard";
const List = ({ data, routeName, navigation }) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (
            routeName === "AttractionDetails" ||
            routeName === "MallsDetails" ||
            routeName === "FoodDetails" ||
            routeName === "HotelDetails"
          ) {
            return (
              <PlacesCard
                name={item.title}
                avatar={item.avatar}
                nextScreen={() =>
                  navigation.navigate(routeName, {
                    id: item.id,
                  })
                }
              />
            );
          } else {
            <AdvancedCard
              name={item.title}
              avatar={item.avatar}
              nextScreen={() =>
                navigation.navigate(routeName, {
                  id: item.id,
                })
              }
            />;
          }
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default List;
