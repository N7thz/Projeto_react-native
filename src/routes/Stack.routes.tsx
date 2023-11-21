import {createNativeStackNavigator} from "@react-navigation/native-stack"

import { LoginScreen } from "../screens/login";


import { useEffect, useState } from "react";
import Load from "../screens/load";
import { Home } from "../screens/home";
import { TabNavigation } from "./Tab.routes";
const Stack = createNativeStackNavigator<RootStack>();

export type RootStack = {
    Home: undefined;
    LoginScreen: undefined;
    TabNavigation: undefined;
}

export function StackNavigator(){
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false); 
      }, 2000); 
    }, []);
  
    if (isLoading) {
      return <Load />;
    }

    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen name="LoginScreen" component={LoginScreen}/> 
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="TabNavigation" component={TabNavigation}/>



        </Stack.Navigator>
    )
}       