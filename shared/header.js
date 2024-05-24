import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";
import { globalstyles } from "../styles/global";
import MaterialIcons from '@expo/vector-icons';

export default function Header(){
    const OpenMenu = () =>{
        //navigation.openDrawer()
    }
    return(
        <View>
            <MaterialIcons name="menu" size={24} color="black" onPress={OpenMenu}/>
            <View>
                <Text style={styles.headerText}>SkyMax Reviews App</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',

    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1,

    },
    icon:{
        position:'absolute',
        left:16,
    }
})