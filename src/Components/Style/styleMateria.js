import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: '35%',
    height: Dimensions.get('screen').height/4.5,
    backgroundColor: '#fff',
    borderRadius:20,
    marginBottom:20
  },
  containerLixo:{
    width:'108%',
    height:1,
    alignItems:'flex-end',
    justifyContent:'center',
  },
  lixo: {
    width:Dimensions.get('screen').width/16,
    height:Dimensions.get('screen').width/16,
    borderRadius:50,
    backgroundColor:'#f0f'
  },
  containerTxt: {

  },
  txt: {

  },
  media: {

  }
})
