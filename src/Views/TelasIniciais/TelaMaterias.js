import { View, Text } from 'react-native'
import React from 'react'
import style from './Style/styleTelaMateria'
import Materia from '../../Components/Materia'
import Header from '../../Components/Header'
import Filtro from '../../Components/Filtro'

export default function TelaMaterias() {
  return (
    <View style={style.container}>
      <Header>Matéria</Header>
      <Filtro/>
      <View style={style.materias}>

      <Materia/>
      <Materia/>
      <Materia/>
      </View>
    </View>
  )
}