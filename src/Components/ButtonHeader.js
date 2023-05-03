import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import style from '../Style/styleHeader'

export default function Header(props) {
    return (

            <TouchableOpacity>
                <Text>{props.children}</Text>
            </TouchableOpacity>
        
    )
}