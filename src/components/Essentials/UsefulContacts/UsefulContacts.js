import React from 'react'
import { Text, View } from 'react-native';

import { ListItem, colors } from 'react-native-elements'


const UsefulContacts = () => {
    const list = [
        {
            title: 'Tourist Hotline',
            number: '987654321'
        },
        {
            title: 'Police',
            number: '100'
        },
        {
            title: 'Hospital',
            number: '9863472244'
        }
    ]

    return (
        <View>
            {
                list.map((l, i) => (
                    <ListItem
                        key={i}
                        title={l.title}
                        subtitle={l.number}
                        bottomDivider
                        containerStyle={{
                            backgroundColor: ''
                        }}
                        contentContainerStyle={{
                            paddingVertical: 10
                        }}
                        titleStyle={{
                            fontSize: 20,
                            paddingVertical: 5,
                            color: colors.primary
                        }}
                    />
                ))
            }
        </View>
    )
}

export default UsefulContacts;


