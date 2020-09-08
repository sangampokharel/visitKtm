import React, { useState, useEffect } from 'react'
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { View, Text, } from 'react-native';
import { Locations } from '../../data/data'
const Maps = () => {

    const [currentlocation, setCurrentLocation] = useState(null);
    // const [locations, setLocations] = useState(Locations)

    //ask perssion which gives popup
    const _getLocation = async () => {
        try {
            const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
            if (status !== 'granted') {
                alert('Your app Permission is off...')
            }
            let location = await Location.getCurrentPositionAsync();
            setCurrentLocation(location);
        } catch (error) {
            alert('Your Settings Location may be off....')
        }

    }



    useEffect(() => {
        _getLocation();
    }, []);

    if (currentlocation) {

        return (
            <MapView
                style={{ flex: 1 }}
                showsUserLocation
                initialRegion={{
                    latitude: currentlocation.coords.latitude,
                    longitude: currentlocation.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >

                <Polyline
                    coordinates={locations.map(location => location.coords)}
                    strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeColors={[
                        '#7F0000',
                        '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                        '#B24112',
                        '#E5845C',
                        '#238C23',
                        '#7F0000'
                    ]}
                    strokeWidth={1}

                />

            </MapView>
        )
    }

    return (
        <View>
            <Text>Waiting...</Text>
        </View>
    )


}

export default Maps
// AIzaSyBEQIGEv0bbVoqX7ebRvejZjXhCg_jB_sY
// AIzaSyBEQIGEv0bbVoqX7ebRvejZjXhCg_jB_sY