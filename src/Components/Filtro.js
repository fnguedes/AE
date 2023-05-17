import { View, Text, FlatList } from 'react-native'
import React from 'react'
import style from './Style/styleFiltro'
import OptionsFiltro from './OptionsFiltro'

const data = [
  { id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }, { id: '7' }, { id: '8' }
];

export default function Filtro() {
  return (
    <View style={style.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{}}
        horizontal={true}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <OptionsFiltro data={item} />}
      />
    </View>
  )
}