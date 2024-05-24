import { StyleSheet } from "react-native";

export const globalstyles=StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'lightcyan'
    },
    titleText:{
        fontSize:18,
        fontWeight:'bold',
        color:'#333',
        paddingVertical:15,
        paddingHorizontal:10,
    },
    titleTextList:{
        fontSize:18,
        fontWeight:'bold',
        color:'#333',
        flex:1,
        padding:20,
        paddingHorizontal:10,
        backgroundColor:'lightgray',
        margin:5,
        borderRadius:10,
    },
    paragraph:{
        marginVertical:10,
        lineHeight:20,
    },
    btngroup:{
        flexDirection:'row',
        justifyContent:'space-around'
     },
    btncontent:{
        margin:15
    },
    btn:{
        padding:10,
    }
})