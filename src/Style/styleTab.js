import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
  containerAtivo:{
    borderRadius:50,
    width: Dimensions.get('window').width/7 + (Dimensions.get('window').width/6)*0.2,
    height: Dimensions.get('window').width/7 + (Dimensions.get('window').width/6)*0.2,
    backgroundColor:"#181818",
    alignItems:'center',
    justifyContent:'center',
    marginBottom:40
  },
  containerInativo:{
    borderRadius:50,
    width: Dimensions.get('window').width/7 + (Dimensions.get('window').width/6)*0.2,
    height: Dimensions.get('window').width/7 + (Dimensions.get('window').width/6)*0.2,
    backgroundColor:"#312F2F",
    alignItems:'center',
    justifyContent:'center',
    marginBottom:40
  },
  ButtonTab:{
    borderRadius:50,
    width: Dimensions.get('window').width/7,
    height: Dimensions.get('window').width/7,
    backgroundColor:"#181818",
    alignItems:'center',
    justifyContent:'center',
  },
  containerCentralAtivo:{
    borderRadius:50,
    width: Dimensions.get('window').width/7 + (Dimensions.get('window').width/6)*0.4,
    height: Dimensions.get('window').width/7 + (Dimensions.get('window').width/6)*0.4,
    backgroundColor:"#181818",
    alignItems:'center',
    justifyContent:'center',
    marginBottom:50
  },
  containerCentralInativo:{
    borderRadius:50,
    width: Dimensions.get('window').width/7 + (Dimensions.get('window').width/6)*0.4,
    height: Dimensions.get('window').width/7 + (Dimensions.get('window').width/6)*0.4,
    backgroundColor:"#312F2F",
    alignItems:'center',
    justifyContent:'center',
    marginBottom:50
  },
  ButtonTabCentral:{
    borderRadius:50,
    width: Dimensions.get('window').width/6,
    height: Dimensions.get('window').width/6,
    backgroundColor:"#181818",
    alignItems:'center',
    justifyContent:'center',
    paddingBottom:5
  }
})