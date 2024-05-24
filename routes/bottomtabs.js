import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import DetailScreen from '../screens/reviewDetails';
import AboutScreen from '../screens/about';
import { StyleSheet } from "react-native";
import Header from '../shared/header';
import LogoTitle from '../shared/logoTitle';
import { Button } from 'react-native-web';

const Tab = createBottomTabNavigator();

export default function BottomTab (){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={HomeScreen}/>
                <Tab.Screen name='About' component={AboutScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}