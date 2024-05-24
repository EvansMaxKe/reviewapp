import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button, FlatList } from "react-native";
import { globalstyles } from "../styles/global";

export default function HomeScreen({navigation}){
    const [reviews, setReviews] = useState([
        {title: 'web', rating: 5, body: 'learn web development', key:'1'},
        {title: 'app', rating: 4, body: 'learn app development', key:'2'},
        {title: 'database', rating: 3, body: 'learn database development', key:'3'},
    ])
    return(
        <View style={globalstyles.container}>
            <FlatList 
                data={reviews}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('Details',item)}>
                        <Text style={globalstyles.titleTextList}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
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
                        title="Go To Details"
                        onPress={()=>navigation.navigate('Details', {
                            itemId:1,
                            otherInfo:"more details here..."
                        })}
                        style={globalstyles.btn}
                    />
                </View>
            </View>
        </View>
    );
}
