import React, { useState } from 'react'

import { Text, View, StyleSheet, Platform, Animated, ScrollView, } from 'react-native';
import { heightToDp } from '../../../utlis/Responsive'
const ScrollableHeader = () => {

    return (
        <View>
            <View>
                {/**Header  */}
                <View>

                </View>
                <ScrollView style={{ marginTop: heightToDp(5) }}>
                    <View>
                        <Text>1</Text>
                    </View>
                    <View>
                        <Text>1</Text>
                    </View>
                    <View>
                        <Text>1</Text>
                    </View>
                    <View>
                        <Text>1</Text>
                    </View>
                    <View>
                        <Text>1</Text>
                    </View>
                    <View>
                        <Text>1</Text>
                    </View>
                    <View>
                        <Text>1</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default ScrollableHeader;


const styles = StyleSheet.create({


})
