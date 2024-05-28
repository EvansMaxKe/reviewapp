import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home";
import AboutScreen from "../screens/about";
import DetailScreen from "../screens/reviewDetails";
import SettingScreen from "../screens/setting";
import ProfileScreen from "../screens/profile";
import { StyleSheet } from "react-native-web";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function AboutStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="About" component={AboutScreen}/>
        </Stack.Navigator>
    )
}
function Setting(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Setting" component={SettingScreen}/>
        </Stack.Navigator>
    )
}

function Profile(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen}/>
        </Stack.Navigator>
    )
}

function DrawerNavigation(){
    return(
        <Drawer.Navigator
        screenOptions={{
            headerStyle:styles.headerstyle,
          headerTintColor:'#444',
          headerTitleStyle:{
            fontWeight:'bold',
          },
            headerTitleAlign:'center',
            drawerContentContainerStyle: {backgroundColor:'black', flex:1, color:'red'},
            drawerActiveBackgroundColor:'lightblue', 
            drawerType:'front',
            drawerActiveTintColor:'red',
            drawerInactiveTintColor:'lightblue',
            drawerLabelStyle:{fontWeight:'bold'}
        }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} backgroundColor='black'/>
            <Drawer.Screen name="About" component={AboutScreen} />
            <Drawer.Screen name="Setting" component={Setting} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    )
}

export default function Navigations(){
    return(
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerStyle:styles.headerstyle
            }}
            >
                <Stack.Screen name="Home" component={DrawerNavigation} options={{headerShown:false}}/>
                <Drawer.Screen name="About" component={AboutStack} options={{headerShown:false}}/>
                <Stack.Screen name="Details" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles=StyleSheet.create({
    headerstyle:{
      backgroundColor:'lightblue',
      fontWeight:'bold',
      alignItems:'center',
      textAlign:'center'
    }
  })