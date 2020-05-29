import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Text, Divider } from 'react-native-elements';
import { colors } from '../../../constant/colors';
const MoreInfo = ({ phone, website }) => {
    return (
        <View>
            <Divider />
            <View>

                <Text style={styles.headerStyle}>More Information</Text>
                {phone && <Text style={styles.textStyle}>Phone: {phone}</Text>}
                {website && <Text style={styles.textStyle}>Website: {website}</Text>}
            </View>
        </View>
    )
}

MoreInfo.defaultProps = {
    phone: null,
    website: null
}

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 25,
        marginVertical: 10,
        fontFamily: 'Montserrat-SemiBold',
        color: colors.red
    },

    textStyle: {
        marginBottom: 10,
        fontFamily: 'Montserrat-Regular'
    }
})

export default MoreInfo
