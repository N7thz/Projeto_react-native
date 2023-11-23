import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LoginScreen } from "../screens/Login" 
import { useEffect, useState } from "react" 
import Load from "../screens/load" 
import Home from '../screens/Home/Home' 
import InfoCampeao from "../screens/InfoCampeao/InfoCampeao" 
import { TabNavigation } from "./Tab.routes" 
import { Register } from "../screens/Register" 

import AsyncStorage from '@react-native-async-storage/async-storage' 

const Stack = createNativeStackNavigator<RootStack>() 

export type RootStack = {

  Home: undefined 
  LoginScreen: undefined 
  TabNavigation: undefined 
  Register: undefined 
  InfoCampeao: undefined 
  TabNavigationLog: undefined
  LoginScreenLog: undefined
}

export function StackNavigator() {

  const [isLoading, setIsLoading] = useState(true) 
  const [Logged, setLogged] = useState<boolean>(false)

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('logado') 
      if (value !== null) {
        setLogged(true)
      }
    } catch (e) {

      console.error('Erro ao efetuar o login') 
    }
  }

  useEffect(() => {

    getData()
    setTimeout(() => {

      setIsLoading(false) 
    }, 2000) 
  }, []) 

  if (isLoading) {
    return <Load /> 
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* {
        Logged ?
          <Stack.Screen name="TabNavigationLog" component={TabNavigation} />:
          <Stack.Screen name="LoginScreenLog" component={LoginScreen} />
      } */}

      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="InfoCampeao" component={InfoCampeao} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )
}       