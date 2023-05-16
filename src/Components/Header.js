import { View ,Text, SafeAreaView} from 'react-native'
import React from 'react'
import style from './Style/styleHeader'
import BtHeader from './ButtonHeader'

export default function Header({children}) {
  return (

    <SafeAreaView style={style.container}>
      <View style={style.containerTitulo} >
        <Text style={style.txtTitulo}>{children}</Text>
      </View>
    </SafeAreaView>
    
  )
}