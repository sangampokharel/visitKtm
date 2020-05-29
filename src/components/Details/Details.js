import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Animated } from 'react-native'
import { heightToDp, widthToDp } from '../../../utlis/Responsive';
import Cards from '../Cards/Cards';
const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const Details = () => {
    const [scrollY] = useState(new Animated.Value(0));
    const discoverDetails = [
        {
            id: '1',
            title: 'Foodies',
            description: 'Taste Something Different ',
            avatar: 'https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            id: '2',
            title: 'Explores',
            description: 'Discover Places in Cities',
            avatar: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            id: '3',
            title: 'socialisers',
            description: 'Come for atmoshere stay for company',
            avatar: 'https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
    ]


    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp',
    });


    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.ScrollViewContent}>
                    <Text>Hey</Text>
                </View>
            </View>
            <ScrollView style={styles.container}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }]
                )}
            >

                <View style={styles.ScrollViewContent} >

                    {
                        discoverDetails.map(({ title, description, id, avatar }) => (

                            <Cards
                                key={id}
                                name={title}
                                avatar={avatar}

                            />

                        ))
                    }

                </View>
            </ScrollView>

        </View>
    )
}

export default Details;


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
        width: '100%',
        backgroundColor: 'red',
    },
    ScrollViewContent: {
        marginTop: HEADER_MAX_HEIGHT
    }


})

// <Animated.View style={[styles.header, { height: headerHeight }]}>
// <View >
//     <Text>Title</Text>
// </View>
// </Animated.View>

// <View style={{ height: 200, backgroundColor: 'red' }}>
//                 <Image
//                     source={{ uri: 'https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }}
//                     style={{ width: widthToDp('100%'), height: heightToDp(50) }}
//                     resizeMode="cover"
//                 />
//             </View>
