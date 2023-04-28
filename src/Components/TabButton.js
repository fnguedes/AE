import { View, Text } from 'react-native'
import React from 'react'
import style from '../Style/styleTab'
import IH from '../../assets/IconeHome.svg'
import IHA from '../../assets/IconeHomeAtivo.svg'
import IM from '../../assets/IconeMateria.svg'
import IMA from '../../assets/IconeMateriaAtivo.svg'
import IC from '../../assets/IconeCaderno.svg'
import ICA from '../../assets/IconeCadernoAtivo.svg'
import IT from '../../assets/IconeTarefas.svg'
import ITA from '../../assets/IconeTarefasAtivo.svg'

export function TabButtonHome(props) {
  return (
    <View style={props.ativo ? style.containerAtivo : style.containerInativo}>
      <View style={style.ButtonTab}>
        {props.ativo?<IHA width={35} height={35} />:<IH width={35} height={35} />}
      </View>
    </View>
  )
}
export function TabButtonMateria(props) {
  return (
    <View style={props.ativo ? style.containerAtivo : style.containerInativo}>
      <View style={style.ButtonTab}>
        {props.ativo?<IMA width={35} height={35} />:<IM width={35} height={35} />}
      </View>
    </View>
  )
}
export function TabButtonCaderno(props) {
  return (
    <View style={props.ativo ? style.containerAtivo : style.containerInativo}>
      <View style={style.ButtonTab}>
        {props.ativo?<ICA width={32} height={32} />:<IC width={32} height={32} />}
      </View>
    </View>
  )
}
export function TabButtonTarefa(props) {
  return (
    <View style={props.ativo ? style.containerAtivo : style.containerInativo}>
      <View style={style.ButtonTab}>
        {props.ativo?<ITA width={30} height={30} />:<IT width={30} height={30} />}
      </View>
    </View>
  )
}