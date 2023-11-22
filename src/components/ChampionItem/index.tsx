import React from 'react'
import { View, Text, Image } from 'react-native'

import { styles } from './styles'

export const ChampionItem = ({ item }: any) => {

    const image: any = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${item.name}_0.jpg`
    // const image: any = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${item.name}_0.jpg`

    return (

        <View style={styles.champion}>

            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.texts}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.text}>{item.title}</Text>
            </View>
        </View>
    )
}
