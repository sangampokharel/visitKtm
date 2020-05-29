import React from 'react'
import { View } from 'react-native';

import { ListItem, Text } from 'react-native-elements'

const HandyTips = () => {
    const list = [
        {
            title: 'Currency Used In Nepal',
            description: "Currency used in Nepal are said as rupees where you"

        },
        {
            title: 'Currency Used In Nepal',
            description: "Currency used in Nepal are said as rupees where you"

        },
        {
            title: 'Currency Used In Nepal',
            description: "Currency used in Nepal are said as rupees where you"

        }
    ]

    return (
        <View>
            <Text style={{ textAlign: 'center', marginVertical: 20, fontSize: 25 }}>Handy Tips</Text>

            {
                list.map((item, i) => (

                    <ListItem
                        key={i}
                        title={item.title}
                        bottomDivider
                        containerStyle={{ backgroundColor: '', marginVertical: 10 }}
                    />

                ))
            }

        </View>
    )
}

export default HandyTips
