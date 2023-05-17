import { StyleSheet ,Dimensions} from "react-native";

const largura=Dimensions.get('screen').width

export default StyleSheet.create({
  container:{
    width:'100%',
    height:largura/6,
    marginTop:'2%',
    paddingLeft:'2%',
    paddingRight:'4%',
    flexDirection:'row',
  }
})