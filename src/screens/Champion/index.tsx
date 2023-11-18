import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'

import axios from 'axios'
import { styles } from './styles'

import Pag404 from './assets/404.jpg'

export const Champion = () => {

    const [exist, setExist] = useState<boolean>(true)
    const [nome, setNome] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [lore, setLore] = useState<string>('')
    const [ataque, setAtaque] = useState<string>('')
    const [defesa, setDefesa] = useState<string>('')
    const [magica, setMagica] = useState<string>('')
    const [dificuldade, setDificuldade] = useState<string>('')
    const [image, setImage] = useState<any>()

    const champion = 'Aatrox'
    const indexSkin = 0

    useEffect(() => {
        getPersonagem(champion)
    }, [champion])

    const imageAtual = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_${indexSkin}.jpg`
    const nextImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_${indexSkin + 1}.jpg`
    const proxtImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_${indexSkin + 2}.jpg`

    const getPersonagem = async (champion: string) => {

        const response = await axios.get(`https://ddragon.leagueoflegends.com/cdn/13.22.1/data/pt_BR/champion/${champion}.json`)

        const championData = response.data.data[champion]

        setNome(championData.id)
        setTitle(championData.title)
        setLore(championData.lore)
        setImage(imageAtual)
        setAtaque(championData.info.attack)
        setDefesa(championData.info.defense)
        setMagica(championData.info.magic)
        setDificuldade(championData.info.difficulty)
    }

    if (exist) {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <ImageBackground
                        resizeMode="cover"
                        borderTopRightRadius={24}
                        source={{ uri: image }}
                        style={styles.image} />

                    <View style={styles.info}>

                        <Text style={styles.subtitle}>{title}</Text>
                        <Text style={styles.title}>{nome}</Text>
                        <Text style={styles.text}>{lore}</Text>

                        <View style={styles.stats}>
                            <Text style={styles.subtitle}>Status</Text>
                            <Text style={styles.statsText}>Ataque: {ataque}</Text>
                            <Text style={styles.statsText}>Defesa: {defesa}</Text>
                            <Text style={styles.statsText}>magia: {magica}</Text>
                            <Text style={styles.statsText}>Dificuldade: {dificuldade}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.skins}>
                    <ImageBackground
                        resizeMode="contain"
                        source={{ uri: imageAtual }}
                        style={styles.skin}
                    />
                    <ImageBackground
                        resizeMode="contain"
                        source={{ uri: nextImage }}
                        style={styles.skin}
                    />
                    <ImageBackground
                        resizeMode="contain"
                        source={{ uri: proxtImage }}
                        style={styles.skin}
                    />
                </View>
            </View>
        )
    } else {

        return (

            <ImageBackground source={Pag404} style={styles.container404}>
                <Text style={styles.title404}>Campeão não encontrado</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.subtitle}>Voltar a Home</Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}