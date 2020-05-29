import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import List from '../../components/List/List'
import { useSelector } from 'react-redux';

const FoodsScreen = () => {
    const { Foods } = useSelector(state => state.foods)
    return <View>
        <List data={Foods} routeName="FoodDetails" />
    </View>
}

const styles = StyleSheet.create({});


export default FoodsScreen;