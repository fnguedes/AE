import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        width: '90%',
        height: Dimensions.get('screen').height / 20,
        backgroundColor: "#5ED2E3",
        borderRadius: 40,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 30,
        flexDirection: 'row',
        
    },
    desenhoContainerTotal:{
        width:'80%',
        height:'95%',
        borderRadius:40,
        borderWidth:1,
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#0ff'
    },
    containerContainerSigla: {
        height: '125%',
        width: '20%',
        backgroundColor: "#181818",
        borderRadius: 500,
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    containerSigla: {
        width: '70%',
        height: '87%',
        backgroundColor: "#5ED2E3",
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    desenhoContainer: {
        width: "95%",
        height: '95%',
        borderRadius: 500,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtSigla: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    containerInfo: {
        width: '73%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: '2%',
    },
    txtLocal: {
        fontSize: 14,
        fontWeight:'500'
    },
    txtHora: {
        fontSize: 14,
    }
})