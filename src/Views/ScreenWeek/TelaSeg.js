import React from 'react';
import { View } from 'react-native';
import PostIt from '../../Components/MateriaPostIt';
import style from '../../Style/styleWeek'

export default function Segunda(){
    return(
    <View style={style.container}>
        <PostIt/>
    </View>
    )
}