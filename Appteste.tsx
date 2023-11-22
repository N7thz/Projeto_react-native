import Routes from './src/routes';
import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react';
import InfoCampeao from "./src/screens/InfoCampeao/InfoCampeao";
import { useFonts } from 'expo-font';
import Home from './src/screens/Home/Home';
import { CardMaestria } from './src/components/CardMaestria/CardMaestria';
import { View, FlatList } from 'react-native';
import { styles } from './src/components/CardMaestria/styles'


export default function App() {
    const [maestria, setMaestria] = useState([
        {
            puuid: "qKj-X3Z1Gt-y9dm3MYm21LtnQfS_aKie6DdD1ucjUGa7Kp59BSpt35NFxfSHBhxc0BgUGNsOSseOgw",
            campeãoId: 82,
            campeãoLevel: 6,
            pontoscampeão: 68632,
            últimoPlayTime: 1700462236000,
            championPointsSinceLastLevel: 47032,
            championPointsUntilNextLevel: 0,
            peitoconcedido: true,
            tokensganhos: 0,
            summonerId: "LzNwwCoroCkToY0Ss2tfP6h833LW4GkaI4sJ1AxiSoJFP2sbETZK72pATg"
        },
        {
            puuid: "qKj-X3Z1Gt-y9dm3MYm21LtnQfS_aKie6DdD1ucjUGa7Kp59BSpt35NFxfSHBhxc0BgUGNsOSseOgw",
            campeãoId: 875,
            campeãoLevel: 4,
            pontoscampeão: 18373,
            últimoPlayTime: 1700358960000,
            championPointsSinceLastLevel: 5773,
            championPointsUntilNextLevel: 3227,
            peitoconcedido: true,
            tokensganhos: 0,
            summonerId: "LzNwwCoroCkToY0Ss2tfP6h833LW4GkaI4sJ1AxiSoJFP2sbETZK72pATg"
        },
        {
            puuid: "qKj-X3Z1Gt-y9dm3MYm21LtnQfS_aKie6DdD1ucjUGa7Kp59BSpt35NFxfSHBhxc0BgUGNsOSseOgw",
            campeãoId: 240,
            campeãoLevel: 3,
            pontoscampeão: 6048,
            últimoPlayTime: 1699380547000,
            championPointsSinceLastLevel: 48,
            championPointsUntilNextLevel: 6552,
            peitoconcedido: true,
            tokensganhos: 0,
            summonerId: "LzNwwCoroCkToY0Ss2tfP6h833LW4GkaI4sJ1AxiSoJFP2sbETZK72pATg"
        },
    ])
    // Desestruture a tupla retornada por useFonts
    const [fontsLoaded, error] = useFonts({
        'LolFont-Medium': require('./src/Fontes/Fonts_Package/BeaufortForLoL-OTF/BeaufortforLOL-MediumItalic.otf'),
        'LolFont-Bold': require('./src/Fontes/Fonts_Package/BeaufortForLoL-OTF/BeaufortforLOL-HeavyItalic.otf'),
        'LolFont-Text': require('./src/Fontes/Fonts_Package/Spiegel-OTF/Spiegel-Regular.otf'),
    });

    if (error) {
        console.error("Erro ao carregar fontes:", error);
    }

    return (
        <View style={{flexDirection: 'row'}}>

            {maestria.map((item) => (
                <CardMaestria key={item.puuid} campeao={item} />
            ))}
        </View>





    )
}