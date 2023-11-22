import React, { useContext } from 'react';
import 'react-native-gesture-handler'
import InfoCampeao from "./src/screens/InfoCampeao/InfoCampeao";
import { useFonts } from 'expo-font';

import { Home } from './src/screens/Home';
import { ApplicationProvider } from './src/Context/ApplicationContext';

import { Routes } from './src/routes';

export default function App() {

  // const [fontsLoaded, error] = useFonts({

  //   'LolFont-Medium': require('./src/Fontes/Fonts_Package/BeaufortForLoL-OTF/BeaufortforLOL-MediumItalic.otf'),

  //   'LolFont-Bold': require('./src/Fontes/Fonts_Package/BeaufortForLoL-OTF/BeaufortforLOL-HeavyItalic.otf'),

  //   'LolFont-Text': require('./src/Fontes/Fonts_Package/Spiegel-OTF/Spiegel-Regular.otf'),
  // });

  // if (error) {
  //   console.error("Erro ao carregar fontes:", error);
  // }

  return (

    <ApplicationProvider>
      <Routes />
    </ApplicationProvider>
  )
}




