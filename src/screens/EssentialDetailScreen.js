import React from 'react'
import { View, Text } from 'react-native'
import Currency from '../components/Essentials/Currency/Currency';
import HandyTips from '../components/Essentials/HandyTips/HandyTips';
import UsefulContacts from '../components/Essentials/UsefulContacts/UsefulContacts';
import About from '../components/Essentials/About/About';

const EssentialDetailScreen = ({ route }) => {
    const { type } = route.params;


    switch (type) {
        case 'Currency':
            return (
                <View>
                    <Currency />

                </View>
            )
            break;
        case 'Handy':
            return (
                <View>
                    <HandyTips />
                </View>
            )
            break;

        case 'Useful':
            return (
                <View>
                    <UsefulContacts />
                </View>
            )
            break;

        case 'About':
            return (
                <View>
                    <About />
                </View>
            )
            break;
        default:
            return (
                <View>
                    <Text>Default State</Text>
                </View>
            )
    }

}

export default EssentialDetailScreen
