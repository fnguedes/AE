import React from "react";
import { View, Text } from "react-native";
import style from './Style/stylePostIt'

export default function PostIt() {
    return (
        <View style={style.container}>
                <View style={style.containerContainerSigla}>
                    <View style={style.containerSigla} >
                        <View style={style.desenhoContainer}>
                            <Text style={style.txtSigla}>ES2</Text>
                        </View>
                    </View>
                </View>
            {/* <View style={style.desenhoContainerTotal}>

            </View> */}
                <View style={style.containerInfo}>
                    <Text style={style.txtLocal}>Didática fodasse</Text>
                    <Text style={style.txtHora}>12:00 - 15:00</Text>
                </View>
        </View>
    )
}