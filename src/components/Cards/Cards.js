import React from 'react'
import { View, Image } from 'react-native'
import { Card, Text, Avatar } from 'react-native-elements';

const Cards = ({ name, avatar }) => {


    return (

        <Card
            containerStyle={{ borderRadius: 20, width: 300 }}
            featuredTitle="Attractions"
            featuredSubtitle="Garden of Dreams"
            featuredTitleStyle={{
                color: '#fff',
                fontSize: 20,


            }}

            featuredSubtitleStyle={{
                color: '#fff',

            }}

            image={{ uri: avatar }}
            imageProps={{
                resizeMode: "cover",
            }}

            imageStyle={{
                padding: 0,
                backgroundColor: 'rgba(0,0,0,0.2)'
            }}

        >


            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                    <Avatar
                        rounded
                        source={{
                            uri: avatar,
                        }}
                    />
                    <Text style={{ marginLeft: 10 }}>{name}</Text>
                </View>
            </View>


        </Card>

    )
}

export default Cards
