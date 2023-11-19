import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, StatusBar } from 'react-native';

import background from './src/assets/imgs/background-profile.png'
import fotoPerfil from './src/assets/imgs/foto-perfil.jpeg'

import { useFonts }  from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './src/routes'
import { TabNavigation } from './src/routes/Tab.routes';


export default function App() {

  const [ fontsLoaded ] = useFonts({

    'LolFont': require('./src/assets/fonts/Spiegel_TT_Regular.ttf')
})

  return (
       
      <Routes/>
      
    

  ) 
}




