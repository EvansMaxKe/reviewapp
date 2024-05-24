import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Navigator from "./routes/navigation";
import BottomTab from "./routes/bottomtabs";

export default function App(){
  return(
      //<BottomTab/>
      <Navigator/>
  );
}