import React from 'react'
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../../../constant/colors'
const PlacesCard = ({ name, avatar, nextScreen }) => {
    return (
        <TouchableOpacity onPress={nextScreen} activeOpacity={0.75} style={{ marginHorizontal: 16, marginVertical: 10, elevation: 5, borderRadius: 20 }}>
            <ImageBackground source={{ uri: avatar }} resizeMode="cover" style={{ width: '100%', height: 150, borderRadius: 20 }}>
                <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flexShrink: 1, justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <Text style={styles.textStyle}>{name}</Text>
                </View>

            </ImageBackground>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'Montserrat-Medium',
        color: '#fff',
        fontSize: 24,
        textAlign: 'center'
    }
})
export default PlacesCard
