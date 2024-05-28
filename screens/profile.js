import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";
import { globalstyles } from "../styles/global";

export default function ProfileScreen({navigation}){
    
    return(
        <View style={globalstyles.container}>
            <Text  style={globalstyles.titleText}>This is the Profile Screen</Text>
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