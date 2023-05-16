import { View, Text } from 'react-native'
import React from 'react'
import style from './Style/styleTelaPerfil'
import Header from '../../Components/Header'

export default function TelaPerfil() {
  return (
    <View style={style.container}>
      <Header>Perfil</Header>
      <Text>TelaPerfil</Text>
    </View>
  )
}