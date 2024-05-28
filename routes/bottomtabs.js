import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import AboutScreen from '../screens/about';

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