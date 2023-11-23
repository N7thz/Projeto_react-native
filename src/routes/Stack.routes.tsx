import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LoginScreen } from "../screens/Login";
import { useEffect, useState } from "react";
import Load from "../screens/load";
import Home from '../screens/Home/Home';
import InfoCampeao from "../screens/InfoCampeao/InfoCampeao";
import { TabNavigation } from "./Tab.routes";
import { Register } from "../screens/Register";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator<RootStack>();

export type RootStack = {

  Home: undefined;
  LoginScreen: undefined;
  TabNavigation: undefined;
  InfoCampeao: { championId: string };
  Register: undefined
}

export function StackNavigator() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStack>>()

  const [isLoading, setIsLoading] = useState(true);

  const isLogin = async () => {

    const response = await getData()

    console.log(response);
    
  }

  useEffect(() => {

    isLogin()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const getData = async () => {

    try {

      const value = await AsyncStorage.getItem('logado');
      
      if (value !== null) {


      } else {

      }
    } catch (e) {

    }
  };

  if (isLoading) {
    return <Load />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="InfoCampeao" component={InfoCampeao} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
    </Stack.Navigator>
  )
}       