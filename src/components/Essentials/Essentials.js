import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { colors } from '../../../constant/colors';
const Essentials = ({ icon, title }) => {
    return (
        <View>
            <View style={styles.container}>
                <Feather name={icon} size={32} color={colors.red} />
                <Text style={styles.text}>{title}</Text>
            </View>

        </View>
    )
}

export default Essentials;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.red,
        padding: 10,
        width: 150,
        height: 100,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',


    },
    Feather: {
        paddingVertical: 10
    },
    text: {
        textAlign: 'center',
        marginVertical: 10,
        color: colors.red,
        fontFamily: 'Montserrat-Medium'
    }
})
