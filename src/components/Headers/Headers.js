
import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../../../constant/colors'
const Headers = ({ title }) => {
    return <View style={styles.headerContainer}>
        <View style={styles.headerBorder}>
            <Text style={styles.textStyle}>{title}</Text>
        </View>
    </View>
}

export default Headers
const styles = StyleSheet.create({
    headerContainer: {
        marginHorizontal: 16,
        paddingVertical: 2,


    },
    textStyle: {
        fontSize: 25,
        fontFamily: 'Montserrat-SemiBold',
        color: colors.red,

    },

})
