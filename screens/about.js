import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";
import { globalstyles } from "../styles/global";

export default function AboutScreen({navigation}){
    
    return(
        <View style={globalstyles.container}>
            <Text  style={globalstyles.titleText}>This is the About Screen</Text>
            <View style={globalstyles.btncontent}>
                <Button 
                    title="Go To Details"
                    onPress={()=>navigation.navigate('Details')}
                    style={globalstyles.btn}
                />
            </View>
            <View style={globalstyles.btncontent}>
                <Button 
                    title="Go Back"
                    onPress={()=>navigation.goBack()}
                    style={globalstyles.btn}
                />
            </View>
        </View>
    );
}

const styles=StyleSheet.create({

});