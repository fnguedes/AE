import React from "react";
import { View,Text } from "react-native";
import style from './Style/styleCaderno'
export default function Caderno() {
  return (
    <View style={style.container} >

      <View style={style.containerLixo}>
        <View style={style.lixo} ></View>
      </View>

      <View style={style.containerTop} >
        <View style={style.sigla} >
          <Text style={style.txtSigla}>ES2</Text>
        </View>
        <View style={style.titulo} >
          <Text style={style.txtTitulo}>Diagramas</Text>
        </View>
      </View>

      <View style={style.descricao} >
          <Text style={style.txtDescricao}>Como fazer os diagramas de caso de uso, de pacotes e entidade-relacionamento.</Text>
        
      </View>

    </View>
  )
}