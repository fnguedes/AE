import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import style from './Style/styleTelaInicial'
import { TouchableOpacity } from 'react-native'
import Header from '../../Components/Header'
import TopTab from '../../Components/TopTabButtons'
export default function TelaInicial() {
  return (
    <View style={style.container}>
      <StatusBar hidden={false}/>
      <Header/>
      <TopTab/>
      
    </View>
  )
}