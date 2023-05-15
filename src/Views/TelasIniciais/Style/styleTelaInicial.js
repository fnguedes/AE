import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
  container:{
    backgroundColor:"#181818",
    flex:1
  },
  header:{
    width:'100%',
    height:Dimensions.get('window').height/14,
    borderColor:"#fff",
    borderBottomWidth:1,
    alignItems:"center",
    justifyContent:"flex-end",
    flexDirection:'row'
  },
  traco:{
    width:"100%",
    height:Dimensions.get('window').height/160,
    borderColor:"#fff",
    borderBottomWidth:1
  },
  perfil:{
    width:(Dimensions.get("window").width/8.5),
    height:"80%",
    backgroundColor:"#fff",
    borderRadius:100,
    marginRight:10
  
  }
})