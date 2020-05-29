import React, { useState, useEffect } from 'react'
import { View, Platform, Animated, Image, ImageBackground, Text, StyleSheet, } from 'react-native';
import { widthToDp, heightToDp } from '../../../utlis/Responsive';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { colors } from '../../../constant/colors';
const AdvancedCard = ({ name, width, titleFontSize, descFontSize, description, avatar, height, nextScreen }) => {

    const [fadeAnimation] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(fadeAnimation, {
            toValue: 1,
            duration: 2000
        }).start();
    }, [])
    return (


        <TouchableWithoutFeedback onPress={nextScreen} style={{
            flexDirection: 'row',
            borderRadius: 10,
            ...Platform.select({
                'android': {
                    elevation: 10,
                },
                'ios': {
                    shadowColor: '#000',
                    shadowOffset: { width: 2, },
                    shadowOpacity: 0.4,
                    // shadowRadius: 10
                }
            }),
            width: 300,
            margin: 10,
            marginVertical: 20
        }}>
            <View >
                <Image source={{ uri: avatar }} resizeMode="cover" style={{ width: 130, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, marginLeft: 3, height: 200 }} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textHeaderStyle}>{name}</Text>
                <Text style={styles.textSubtitleStyle}>{description}</Text>
            </View>


        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({

    textContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'column',
        flexShrink: 1,
    },
    textHeaderStyle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 30,
        color: colors.red,

    },
    textSubtitleStyle: {
        fontSize: 12,
        color: colors.extraDark,
        fontFamily: 'Montserrat-Medium',
        marginTop: 20,
        textAlign: 'left'

    }
})

export default AdvancedCard
