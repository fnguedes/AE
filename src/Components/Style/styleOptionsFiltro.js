import {StyleSheet,Dimensions} from 'react-native'

const largura=Dimensions.get('screen').width

export default StyleSheet.create({
  container:{
    width:largura/6,
    height:largura/6,
    borderRadius:50,
    backgroundColor:'#fff',
    marginRight:5,
  }
})