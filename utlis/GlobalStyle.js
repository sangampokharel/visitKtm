import { StyleSheet, Platform, } from 'react-native';
import { widthToDp } from './Responsive'

export default StyleSheet.create({
    androidFontSize: {
        ...Platform.select({
            android: {
                fontSize: widthToDp(10)
            }
        })
    }
})

