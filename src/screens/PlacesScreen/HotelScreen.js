import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'
import List from '../../components/List/List';
const HotelScreen = () => {
    const { Hotels } = useSelector(state => state.hotels);


    return <View><List data={Hotels} routeName="HotelDetails" /></View>

}

const styles = StyleSheet.create({});

export default HotelScreen

