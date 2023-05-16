import React from 'react'
import { View, Text } from 'react-native'
import style from './Style/styleTarefa'
export default function Tarefa() {
    return (
        <View style={style.container} >
            <View style={style.containerTop} >
                <View style={style.containerSigla} >
                    <View style={style.borda}>
                        <Text style={style.sigla}>ES2</Text>
                    </View>
                </View>
                <View style={style.espace} >
                </View>
                <View style={style.lixo} ></View>
            </View>

            <View style={style.containerTitulo}>
                <Text style={style.txtTitulo}>Abacatar</Text>
            </View>

            <View style={style.containerDescricao}>
                <View style={style.descricao} >
                    <Text style={style.txtDescricao}>
                    Eu abacato, tu abacatas, então vamos todos abacatar.
                    </Text>
                </View>
            </View>

            <View style={style.containerData} >
                <Text style={style.txtData}>20-04-2000</Text>
            </View>
        </View>
    )
}