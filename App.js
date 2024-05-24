import React from "react";
import Navigator from './routes/homeStack';
import DrawerNavigation from "./routes/drawer";
import BottomTab from "./routes/bottomtabs";

export default function App(){
  return(
    <Navigator /> 
    //<DrawerNavigation />
  );
}