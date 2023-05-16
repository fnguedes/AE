import React from "react";
import { View, Text } from "react-native";
import style from './Style/styleMateria'
export default function Materia() {
    return (
        <View style={style.container}>
            
            <View style={style.containerLixo}>
                <View style={style.lixo}>
                    
                </View>
            </View>

            <View style={style.containerFoto} >
                <View style={style.foto} ></View>
            </View>
            
            <View style={style.containerTxt}>
                <Text style={style.txtMateria}>Engenharia de Software</Text>
                <Text style={style.txtProf}>Adicineia</Text>
            </View>
            
            <View style={style.containerMedia}>
                <Text style={style.txtMediaGeral} >MG: </Text>
                <Text style={style.txtValorMedia} >0,0</Text>
            </View>

        </View>
    )
}