import React, { useState, useEffect } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { View, Text, Image } from "react-native";
import { Locations } from "../../data/data";
import polyline from "@mapbox/polyline";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import axios from "axios";
const Maps = ({ navigation }) => {
  const [initialLocation, setInitialLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [currentlocation, setCurrentLocation] = useState(null);
  const [polyLine, setPolyLine] = useState([]);
  const [locationError, setLocationError] = useState(null);
  const _getLocation = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setLocationError("Please Turn on your Location...");
    }
    let {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    setCurrentLocation({ latitude, longitude });
  };

  const get_Directions = async () => {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${
        currentlocation.latitude
      },${
        currentlocation.longitude
      }&destination=${26.8117117},${87.2830999}&mode=walking&key=AIzaSyBQGpfX6mICXIjzAccjnKCvEpfze3FFYRI`
    );
    let array = polyline.decode(
      response.data.routes[0].overview_polyline.points
    );
    let myCoords = array.map((point) => ({
      latitude: point[0],
      longitude: point[1],
    }));
    setPolyLine(myCoords);
  };
  useEffect(() => {
    _getLocation();
  }, []);

  useEffect(() => {
    if (currentlocation !== null) {
      get_Directions();
    }
  }, [currentlocation]);

  if (currentlocation) {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#000",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: 100,
            position: "absolute",
            zIndex: 999,
            top: 0,
            left: 0,
            right: 0,
            padding: 20,
            width: "100%",
          }}
        >
          <AntDesign
            name="arrowleft"
            size={20}
            color="#fff"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={{ color: "#fff", fontSize: 24 }}>Map</Text>
          <View />
        </View>
        <MapView
          style={{ flex: 1 }}
          showsUserLocation
          initialRegion={initialLocation}
          region={{
            latitude: currentlocation.latitude,
            longitude: currentlocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={polyLine[polyLine.length - 1]}
            title="Destination"
          >
            <FontAwesome name="map-marker" color="red" size={35} />
          </Marker>
          <Polyline
            coordinates={polyLine}
            strokeWidth={4}
            strokeColor={"#000"}
          />
        </MapView>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#000",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 100,
          padding: 20,
          width: "100%",
        }}
      >
        <AntDesign
          name="arrowleft"
          size={20}
          color="#fff"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={{ color: "#fff", fontSize: 24 }}>Map</Text>
        <View />
      </View>
      {locationError && <Text>{locationError}</Text>}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18, color: "#000" }}>
          Loading, your Location...
        </Text>
      </View>
    </View>
  );
};

export default Maps;
// AIzaSyBEQIGEv0bbVoqX7ebRvejZjXhCg_jB_sY
// AIzaSyBEQIGEv0bbVoqX7ebRvejZjXhCg_jB_sY
//AIzaSyBQGpfX6mICXIjzAccjnKCvEpfze3FFYRI
