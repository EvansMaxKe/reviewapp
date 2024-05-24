import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import DetailScreen from '../screens/reviewDetails';
import AboutScreen from '../screens/about';
import { StyleSheet } from "react-native";
import LogoTitle from '../shared/logoTitle';
import { Button } from 'react-native-web';

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
          headerTitleAlign:'center'
        }}>
          <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title:'SkyMax Reviews App',
            headerTitle:(prop)=> <LogoTitle {...prop}/>,
            headerRight:() =>(
              <Button 
                title="Info"
                color="green"
                onPress={()=>alert('No Notifications Yet!')}
              />
            )
            }} />
          {/* <Stack.Screen name={()=><Header/>} component={HomeScreen} style={styles.headerstyle}/> */}
          <Stack.Screen name="About" component={AboutScreen}  />
          <Stack.Screen name="Details" component={DetailScreen}  initialParams={{ itemId: 42, otherInfo:"more info coming" }}/>
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
