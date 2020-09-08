import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../../../constant/colors";
const Description = ({ description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}>Description</Text>
      <Text style={styles.textStyle}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  headerStyle: {
    fontSize: 25,
    marginVertical: 5,
    fontFamily: "Montserrat-SemiBold",
    color: colors.red,
  },
  textStyle: {
    lineHeight: 20,
    marginVertical: 5,
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
  },
});
Description.defaultProps = {
  description: null,
};

export default Description;
