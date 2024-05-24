import React from "react";
import { StyleSheet, View, Text, TouchableOpacity,Button } from "react-native";
import { globalstyles } from "../styles/global";

export default function DetailScreen({route, navigation}){
    const {title,rating, body} =route.params
    return(
        <View style={globalstyles.container}>
            <Text  style={globalstyles.titleText}>This is the Review Details Screen</Text>
            <Text>Title: {title}</Text>
            <Text>Rating: {rating}</Text>
            <Text>Body : {body}</Text>
            <View style={globalstyles.btngroup}>
                <View style={globalstyles.btncontent}>
                    <Button 
                        title="Go To About"
                        onPress={()=>navigation.navigate('About')}
                        style={globalstyles.btn}
                    />
                </View>
                <View style={globalstyles.btncontent}>
                    <Button 
                        title="Go To Details .... Again.."
                        onPress={()=>navigation.push('Details',{
                            itemId: Math.floor(Math.random() * 100)
                        })}
                        style={globalstyles.btn}
                    />
                </View>
            </View>
        </View>
        
    );
}

const styles=StyleSheet.create({

});