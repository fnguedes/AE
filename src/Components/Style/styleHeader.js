import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#181818",
        width:'100%',
        height:'9%',
    },
    containerTitulo:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:18,
        borderBottomWidth:1,
        borderColor:'#fff'
    },
    txtTitulo:{
        fontSize:24,
        color:'#fff'
    },
    linha:{
        width:'100%',
        height:'1%',
        marginTop:'1%',
        borderBottomWidth:1,
        borderColor:'#fff'
    }
})