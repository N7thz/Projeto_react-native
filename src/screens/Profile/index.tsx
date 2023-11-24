import React, { useEffect, useState, useContext } from 'react'
import {
    Text, View, Image, FlatList, ScrollView, ImageBackground, TouchableOpacity
} from 'react-native'

import axios from 'axios'

import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'

import { ApplicationContext } from '../../context/context'

import { CardMaestria } from '../../components/CardMaestria/CardMaestria'
import { ButtonLogout } from '../../components/ButtonLogout'

import Background from '../../assets/imgs/background-profile.jpg'
import Faixa from '../../assets/imgs/faixa-lol.png'

import { styles } from './styles'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStack } from '../../routes/Stack.routes'
import Load from '../load'


export const Profile = () => {

    const [nickName, setNickName] = useState<string>('')
    const [level, setLevel] = useState<string>('')
    const [puuId, setPuuId] = useState<string>('')
    const [icon, setIcon] = useState<number>(0)
    const [topChampions, setTopChampions] = useState<any[] | null>(null)
    const [topChampionsObject, setTopChampionsObject] = useState<any[]>([])
    const [gameMode, setGameMode] = useState<string>()
    const [participantes, setParticipantes] = useState<any[]>([])
    const [player, setPlayer] = useState<Player>()
    const [duration, setDuration] = useState<number>(0)
    const [kills, setKills] = useState<number>(0)
    const [deaths, setDeaths] = useState<number>(0)
    const [kda, setKda] = useState<number>(0)
    const [assists, setAssists] = useState<number>(0)
    const [win, setWin] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState(true)

    const navigation = useNavigation<NativeStackNavigationProp<RootStack>>()

    const { key, nick } = useContext(ApplicationContext)

    const getData = async () => {

        try {

            if (nick !== '') {

                await getUser(nick, key)
            }

        } catch (e) {

            console.error('Erro ao efetuar o login')
        }
    }

    const image: any = `https://ddragon.leagueoflegends.com/cdn/13.23.1/img/profileicon/${icon}.png`

    useEffect(() => {

        getData()
    }, [])

    interface Player {

        deaths: any
        assists: any
        challenges: {
            kda: any
        }
    }

    const getUser = (nickName: string, key: string) => {

        axios
            .get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickName}?api_key=${key}`)
            .then((response) => {

                const responseData = response.data
                const puuId = responseData.puuid

                setNickName(responseData.name)
                setLevel(responseData.summonerLevel)
                setPuuId(responseData.puuid)
                setIcon(responseData.profileIconId)

                getMastery(puuId, key)
                getHistoryMatch(puuId)
            })
            .catch((error) => {
                console.error('Erro ao obter usuário:', error.message)
            })
    }

    const getMastery = (puuId: string, key: string) => {

        axios
            .get(`https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuId}?api_key=${key}`)
            .then((response) => {

                const arrayResponse = Object.values(response.data)

                setTopChampions([arrayResponse[0], arrayResponse[1], arrayResponse[2]])

                const topChampions: any[] = [arrayResponse[0], arrayResponse[1], arrayResponse[2]]

                filterChampions(topChampions)
            })
            .catch((error) => {
                console.error('Erro ao obter maestria:', error.message)
            })
    }

    const filterChampions = async (topChampions: any[]) => {
        try {

            const response: any = (await axios.get(`https://ddragon.leagueoflegends.com/cdn/13.22.1/data/pt_BR/champion.json`)).data.data

            const responseArray: any[] = Object.values(response)

            const arrayFilter = responseArray.filter((champion) => {

                const arrayTest = topChampions.some(topchampion => topchampion.championId.toString() === champion.key)

                return arrayTest
            })

            setTopChampionsObject(arrayFilter.sort())
        } catch (error) {
            console.error('Erro ao filtrar champions')
        }
    }

    const getHistoryMatch = (puuId: string) => {

        axios
            .get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuId}/ids?start=0&count=20&api_key=${key}`)
            .then((response) => {

                const matchId = response.data[0]

                getPartida(matchId)
            })
            .catch((error) => {
                console.error('Erro ao obter histórico:', error.message)
            })
    }

    const getPartida = (matchId: string) => {

        axios
            .get(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${key}`)
            .then((infoPartida) => {

                const partidaData = infoPartida.data.info

                setParticipantes(partidaData.participants)
                setDuration(partidaData.gameDuration)
                setGameMode(partidaData.gameMode)
                setWin(partidaData.teams[1].win)
                console.log('Valor de win:', partidaData.teams[1].win);
                const participantes = partidaData.participants

                statusPlayer(participantes)
            })
            .catch((error) => {
                console.error('Erro ao obter dados da partida:', error.message)
            })
    }


    
    const statusPlayer = (participantes: any[]) => {

        let newPlayer: any
        let newKills: any
        let newAssists: any
        let newDeaths: any
        let newKda: any


        participantes.map((participante) => {

            if (participante.summonerName.toUpperCase() === nick.toUpperCase()) {

                newPlayer = participante
                newKills = participante.kills
                newAssists = participante.assists
                newDeaths = participante.deaths
                newKda = participante.challenges.kda
            }
        })

        setPlayer(newPlayer)
        setKills(newKills)
        setAssists(newAssists)
        setDeaths(newDeaths)
        setKda(newKda)

    }

    const clearAll = async () => {
        try {

            await AsyncStorage.clear();

            navigation.navigate('LoginScreen')

        } catch (error) {
            console.error(`Erro ao tentar limpar todos os dados do AsyncStorage`);
        }
    }

    if (!topChampions) {
        return <Load />
    }

    return (
        <>
            <StatusBar style='light' />

            <ImageBackground source={Background} style={styles.background}>

                <View style={styles.principal}>

                    <ScrollView>
                        <View style={styles.playerStatus}>
                            <LinearGradient
                                colors={['#C09D53', '#e9a51174']}
                                style={styles.circle}
                            >
                                <Image source={{ uri: image }} style={styles.image} />
                                <View style={styles.levelBox}>
                                    <Text style={styles.level}>{level}</Text>
                                </View>
                            </LinearGradient>
                            <Text style={styles.title}>{nickName}</Text>
                        </View>

                        <View style={styles.box}>

                            <Text style={styles.subtitle}>Principais Campeões</Text>

                            <FlatList
                                data={topChampions}
                                keyExtractor={(item) => item.championId.toString()}
                                renderItem={({ item }) => (
                                    <CardMaestria campeao={item} />
                                )}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>

                        <View style={styles.info}>

                            <Text
                                style={
                                    [styles.title, { fontFamily: 'LolFont-Medium' }
                                    ]
                                }>
                                Última partida
                            </Text>
                            <View style={styles.imageContainer}>
                                {
                                    win ?
                                        <Image source={require('../../assets/imgs/derrota.png')} style={styles.vitoriaDerrota} /> :
                                        <Image source={require('../../assets/imgs/vitoria.png')} style={styles.vitoriaDerrota} /> 
                                        
                                }
                            </View>
                            <Text style={styles.resultText}>
                                Duração:  {(duration / 60).toFixed(0)} minutos
                            </Text>
                            <Text style={styles.resultText}>
                                Modo de jogo:  {gameMode}
                            </Text>
                            <Text style={styles.resultText}>
                                Status: {kills} / {deaths} / {assists}
                            </Text>
                            <Text style={styles.resultText}>
                                Kda: {kda.toFixed(2)}
                            </Text>
                        </View>

                        <TouchableOpacity
                            style={styles.logout}
                            onPress={clearAll}
                        >
                            <ButtonLogout />
                        </TouchableOpacity>

                    </ScrollView >
                </View>
            </ImageBackground>
        </>
    )
}
