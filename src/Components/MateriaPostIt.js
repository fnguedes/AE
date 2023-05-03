import React from "react";
import { View, Text } from "react-native";
import style from '../Style/stylePostIt'

export default function PostIt() {
    return (
        <View style={style.container}>
            <View style={style.containerSigla} >
                <Text style={style.txtSigla}>ES2</Text>
            </View>
        </View>
    )
}