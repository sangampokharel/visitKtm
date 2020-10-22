import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../constant/colors";

const HeaderImage = ({ avatar, navigation }) => {
  return (
    <View>
      <ImageBackground
        source={{ uri: avatar }}
        style={[styles.container, { width: "100%", height: 200 }]}
      >
        <View style={{ backgroundColor: "rgba(0,0,0,0.4)", flex: 1 }}>
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => navigation.pop()}
          >
            <Ionicons
              style={styles.iconStyle}
              name="md-arrow-back"
              color={colors.white}
              size={30}
              style={{ paddingTop: 40 }}
            />
          </TouchableOpacity>
          <View style={styles.buttonStyle}>
            <TouchableOpacity
              style={{ backgroundColor: colors.red, padding: 10 }}
              onPress={() => navigation.navigate("MapScreen")}
            >
              <Text style={{ color: "#fff", fontFamily: "Montserrat-Bold" }}>
                Go to Directions
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  textStyle: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#888",
  },
  iconStyle: {
    marginTop: 20,
  },
  buttonStyle: {
    width: "100%",
    justifyContent: "flex-end",
    flex: 1,
    alignItems: "flex-end",
    marginVertical: 4,
    marginRight: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
export default HeaderImage;
