import Routes from './src/routes';
import'react-native-gesture-handler'
import React from 'react';
import InfoCampeao from "./src/screens/InfoCampeao/InfoCampeao";
import { useFonts } from 'expo-font';
import Home from './src/screens/Home/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ApplicationProvider } from './src/context/context';


export default function App() {
  // Desestruture a tupla retornada por useFonts
  const [fontsLoaded, error] = useFonts({
    'LolFont-Medium': require('./src/Fontes/Fonts_Package/BeaufortForLoL-OTF/BeaufortforLOL-MediumItalic.otf'),
    'LolFont-Bold': require('./src/Fontes/Fonts_Package/BeaufortForLoL-OTF/BeaufortforLOL-HeavyItalic.otf'),
    'LolFont-Text': require('./src/Fontes/Fonts_Package/Spiegel-OTF/Spiegel-Regular.otf'),
<<<<<<< HEAD
=======
    
>>>>>>> andre/feature/context/add
  });
  
  if (error) {
    console.error("Erro ao carregar fontes:", error);
  }

  return  (          
    
<<<<<<< HEAD
    <Routes/>                
=======
    <ApplicationProvider>
        <Routes/> 
    </ApplicationProvider>
                      
>>>>>>> andre/feature/context/add
  
  ) 
}

