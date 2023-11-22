import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { LoginScreen } from "../screens/Login";
import { useEffect, useState } from "react";
import Load from "../screens/load";
import Home from '../screens/Home/Home';
import InfoCampeao from "../screens/InfoCampeao/InfoCampeao";
import { TabNavigation } from "./Tab.routes";

const Stack = createNativeStackNavigator<RootStack>();

export type RootStack = {
    Home: undefined;
    LoginScreen: undefined;
    TabNavigation: undefined;
    InfoCampeao: { championId: string };
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
            <Stack.Screen name="InfoCampeao" component={InfoCampeao} />
            <Stack.Screen name="TabNavigation" component={TabNavigation}/>
        </Stack.Navigator>
    )
}       