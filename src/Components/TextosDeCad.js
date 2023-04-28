import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'

export default function TextosDeCad(props) {

  const [text, onChangeText] = useState('')

  return (
    <View style={{ height: '8%', width: "100%", alignItems: 'center', justifyContent: 'center',marginBottom:'1%' }}>

      <Text style={{ alignSelf: 'flex-start',justifyContent:'flex-end', marginLeft: "10%", color: '#258F45' }} >{props.nome}</Text>
      <TextInput
        style={{
          backgroundColor: '#fff',
          borderColor: "#258F45",
          width: "80%",
          height: 40,
          margin: 2,
          borderWidth: 1,
          padding: 10,
          borderRadius: 10
        }}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  )
}