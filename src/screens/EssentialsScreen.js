import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { widthToDp, heightToDp } from '../../utlis/Responsive'
import Essentials from '../components/Essentials/Essentials';
import { colors } from '../../constant/colors';


const EssentialsScreen = ({ navigation }) => {


    showModal = (type) => {

        navigation.navigate('EssentialDetails', {
            type
        })
    }
    return (
        <View style={{ flex: 1 }}>

            <View style={styles.mainContainer}>

                <View style={styles.container}>
                    <TouchableOpacity onPress={() => showModal('Currency')}>
                        <Essentials icon="credit-card" title="Currency Convertor" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => showModal('Handy')}>
                        <Essentials icon="folder" title="Handy Tips" />
                    </TouchableOpacity>

                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => showModal('Useful')}>
                        <Essentials icon="phone-call" title="Useful Contacts" />

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => showModal('About')}>
                        <Essentials icon="info" title="About" />

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default EssentialsScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff'
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: heightToDp(3),

    }
})
