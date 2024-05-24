import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home";
import AboutScreen from "../screens/about";
import DetailScreen from "../screens/reviewDetails";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HomeStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={DrawerNavigation}/>
            <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>
    )
}

function AboutStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="About" component={AboutScreen}/>
        </Stack.Navigator>
    )
}

function DrawerNavigation(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
    )
}

export default function Navigations(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={DrawerNavigation} options={{headerShown:false}}/>
                <Drawer.Screen name="About" component={AboutStack} options={{headerShown:false}}/>
                <Stack.Screen name="Details" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}