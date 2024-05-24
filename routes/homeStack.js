import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import DetailScreen from '../screens/reviewDetails';
import { StyleSheet } from "react-native";
import DrawerNavigation from './drawer';
const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          headerStyle:styles.headerstyle,
          headerTintColor:'#444',
          headerTitleStyle:{
            fontWeight:'bold',
          },
          headerTitleAlign:'center',
          headerShown:true
        }}>
          
          <Stack.Screen name="Home" component={DrawerNavigation} />
          <Stack.Screen name="Details" component={DetailScreen}  initialParams={{ itemId: 42, otherInfo:"more info coming" }} options={{headerShown:true}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  const styles=StyleSheet.create({
    headerstyle:{
      backgroundColor:'lightblue',
      fontWeight:'bold',
      alignItems:'center',
      textAlign:'center'
    }
  })
