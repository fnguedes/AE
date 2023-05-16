import { View, Text } from 'react-native'
import React from 'react'
import style from './Style/styleTelaTarefa'
import Header from '../../Components/Header'
import Tarefa from '../../Components/Tarefa'
export default function TelaTarefa() {
  return (
    <View style={style.container}>
      <Header>Tarefas</Header>

      <View style={style.tarefas}>
        <Tarefa />
        <Tarefa />
        <Tarefa />
      </View>

    </View>
  )
}