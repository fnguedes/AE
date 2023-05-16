import React from "react";
import { View } from "react-native";

export default function Caderno() {
  return (
    <View style={style.container} >
      <View style={style.containerTop} >
        <View style={style.sigla} ></View>
        <View style={style.titulo} ></View>
        <View style={style.lixo} ></View>
      </View>
      <View style={style.containerDescricao} >
        <View style={style.descricao}></View>
      </View>
    </View>
  )
}