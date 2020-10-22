import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Maps from "../components/Maps/Maps";

const MapScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Maps navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MapScreen;
