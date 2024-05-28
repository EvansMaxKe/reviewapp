import React from "react";
import { StyleSheet, View, Text, TouchableOpacity,Button, Image, ScrollView } from "react-native";
import { globalstyles } from "../styles/global";
import MaterialIcons from '@expo/vector-icons';

export default function DetailScreen({route, navigation}){
    const {title,rating, body} =route.params
    return(
        <ScrollView>
            <View style={globalstyles.container}>
            <Text  style={globalstyles.titleText}>{title}</Text>
            <View style={styles.textdetailsbox}>
                <Text style={styles.textdetails}>Title: {title}</Text>
                <Text style={styles.textdetails}>Body : {body}</Text>
                <Text style={styles.textdetails}>Rating: {rating}</Text>
                <View>
                    <View >
                        <Image source={require('../assets/favicon.png')}/>
                    </View>
                </View>
            </View>
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
                        title="Go Back.."
                        onPress={()=>navigation.goBack()}
                        style={globalstyles.btn}
                    />
                </View>
            </View>
        </View>
        </ScrollView>
        
    );
}

const styles=StyleSheet.create({
    textdetailsbox:{
        borderBlockColor:'black',
        borderWidth:2,
        borderRadius:15,
        padding:15,
        shadowColor:'white',
        shadowRadius:5,

    },
    textdetails:{
        fontWeight:'bold',
        marginVertical:5,
        fontSize:15
    },
    onestar:{

    }
});