import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'
import List from '../../components/List/List';
const MallsScreen = () => {
    const { malls } = useSelector(state => state.malls);


    return <View><List data={malls} routeName="MallsDetails" /></View>

}

const styles = StyleSheet.create({});

export default MallsScreen

