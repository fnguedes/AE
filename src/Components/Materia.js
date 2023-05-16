import React from "react";
import { View, Text } from "react-native";
import style from './Style/styleMateria'
export default function Materia() {
    return (
        <View style={style.container}>
            <View style={style.containerLixo}>
                <View style={style.lixo}></View>
            </View>
            <View style={style.foto} ></View>
            <View style={style.containerTxt}>
                <Text style={style.txt}></Text>
                <Text style={style.txt}></Text>
            </View>
            <View style={style.media}></View>
        </View>
    )
}