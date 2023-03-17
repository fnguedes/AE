import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import hollow from "../../assets/1254807.jpg"
import IconeCaderno from '../../assets/IconeMateria.svg'
import IconeCadernoAtivo from '../../assets/IconeMateriaAtivo.svg'
import { Path, Svg } from 'react-native-svg'

export default function TelaInicial() {
  return (
    <View>
      <Text>TelaInicial</Text>
      <StatusBar />
        <IconeCaderno fill={"#000"} width={60} height={60}  />
        <IconeCadernoAtivo  width={60} height={60}  />
      

    </View>
  )
}