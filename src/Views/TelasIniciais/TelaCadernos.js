import { View, Text } from 'react-native'
import React from 'react'
import style from './Style/styleTelaCadernos'
import Header from '../../Components/Header'

export default function TelaCaderno() {
  return (
    <View style={style.container}>
      <Header>Cadernos</Header>
      <Text>TelaCaderno</Text>
    </View>
  )
}