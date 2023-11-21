import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, StatusBar } from 'react-native';

import background from './src/assets/imgs/background-profile.png'
import fotoPerfil from './src/assets/imgs/foto-perfil.jpeg'

import { useFonts }  from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './src/routes'
import { TabNavigation } from './src/routes/Tab.routes';
import { LoginScreen } from './src/screens/Login';
import { Champion } from './src/screens/Champion';


export default function App() {

  return (
       
      <LoginScreen/>
      
    

  ) 
}




