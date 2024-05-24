import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/home';
import DetailScreen from '../screens/reviewDetails';
import AboutScreen from '../screens/about';
import { StyleSheet } from "react-native";
import Header from '../shared/header';
import LogoTitle from '../shared/logoTitle';
import { Button } from 'react-native-web';

const Drawer = createDrawerNavigator();

export default function DrawerStack (){
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={HomeScreen}/>
                <Drawer.Screen name='About' component={AboutScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}