import React, { useEffect, useState } from "react";
import { Text, View} from 'react-native';
import { useFonts } from 'expo-font'



export const Personagens = ({ champion }: any) => {
    const [Medium] = useFonts({

        'LolFont-Mediun': require('../../Fontes/Fonts_Package/BeaufortForLoL-OTF/BeaufortforLOL-Medium.otf'),
        'LolFont-Bold': require('../../Fontes/Fonts_Package/BeaufortForLoL-OTF/BeaufortforLOL-Bold.otf'),
    })

  return (
    <View>

    </View>
  );
}

