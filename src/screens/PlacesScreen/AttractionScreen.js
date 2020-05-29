import React from 'react'
import { View } from 'react-native';
import List from '../../components/List/List';
import { heightToDp, widthToDp } from '../../../utlis/Responsive'
import { useSelector } from 'react-redux'
const AttractionScreen = ({ navigation }) => {

    const { Attraction } = useSelector(state => state.attractions)
    return (
        <View>
            <List data={Attraction} routeName="AttractionDetails" />
        </View>
    )
}

export default AttractionScreen
