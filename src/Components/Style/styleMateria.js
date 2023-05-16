import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: '35%',
    height: Dimensions.get('screen').height/4.5,
    backgroundColor: '#5ED2E3',
    borderRadius:20,
    marginBottom:20,
    marginRight:'7%',
    marginLeft:'7%',
    
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
    backgroundColor:'#f00'
  },
  containerFoto:{
    width:'100%',
    height:'60%',
    alignItems:'center',
    justifyContent:'center',

  },
  foto:{
    width:'65%',
    height:'75%',
    borderRadius:50,
    backgroundColor:'#fff'
  },
  containerTxt: {
    width:'100%',
    height:'30%',
    alignItems:'center'
  },
  txtMateria: {
    fontSize:11,
    fontWeight:'500',
    marginBottom:'4%',
    marginTop:'2%'
  },
  txtProf:{
    fontSize:11
  },
  containerMedia: {
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:15
  },
  txtMediaGeral:{
    fontSize:11,
    fontWeight:'500'
  },
  txtValorMedia:{
    fontSize:11
  }
})
