import InfoCampeao from "./src/screens/InfoCampeao/InfoCampeao";
import Home from "./src/screens/Home/Home";
import React, { useEffect } from "react";
import { useFonts } from 'expo-font';

export default function App() {
  // Desestruture a tupla retornada por useFonts
  const [fontsLoaded, error] = useFonts({
    'LolFont-Medium': require('../../mobile/Projeto_react-native/src/Fontes/Fonts_Package/BeaufortForLoL-OTF/BeaufortforLOL-MediumItalic.otf'),
    'LolFont-Bold': require('../../mobile/Projeto_react-native/src/Fontes/Fonts_Package/BeaufortForLoL-OTF/BeaufortforLOL-HeavyItalic.otf'),
    'LolFont-Text': require('../../mobile/Projeto_react-native/src/Fontes/Fonts_Package/Spiegel-OTF/Spiegel-Regular.otf'),
  });
  
  if (error) {
    console.error("Erro ao carregar fontes:", error);
  }

  return <InfoCampeao/>;
}