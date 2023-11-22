import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'

export const ChampionInfo = ({ item }: any) => {

    return (

        <View style={styles.champion}>
            <Text style={styles.text}>
                Nivel do campeão: {item.championLevel}
            </Text>
            <Text style={styles.text}>
                Pontos do campeão:{item.championPoints}
            </Text>
        </View>
    )
}
