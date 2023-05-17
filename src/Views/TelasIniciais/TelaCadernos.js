import { View, Text } from 'react-native'
import React from 'react'
import style from './Style/styleTelaCadernos'
import Header from '../../Components/Header'
import Caderno from '../../Components/Caderno'

export default function TelaCaderno() {
  return (
    <View style={style.container}>
      <Header>Cadernos</Header>

      <View style={style.cadernos}>
        <Caderno/>
        <Caderno/>
        <Caderno/>
      </View>
    </View>
  )
}