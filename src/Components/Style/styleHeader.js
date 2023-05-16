import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#181818",
        width:'100%',
        height:'8%',
        borderBottomWidth:1,
        borderColor:'#fff'
    },
    containerDias: {
        backgroundColor: "#0f0",
        width: '100%',
        height: '25%',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    containerTitulo:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:15
    },
    txtTitulo:{
        fontSize:24,
        color:'#fff'
    }
})