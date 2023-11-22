import React, { useEffect, useState, useContext } from 'react'
import { Text, View, Image, FlatList, ScrollView, ImageBackground } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { LinearGradient } from 'expo-linear-gradient'

import axios from 'axios'
import { ApplicationContext } from '../../context/context'

import { styles } from './styles'

import { ChampionItem } from '../../components/ChampionItem'
import { ChampionInfo } from '../../components/ChampionInfo'

import { getUserData } from '../../service/api'

import Background from '../../assets/imgs/background-profile.jpg'
import Faixa from '../../assets/imgs/faixa-lol.png'

// import { ApplicationContext } from '../../Context/ApplicationContext'

export const Profile = () => {

    const [nick, setNick] = useState<string>('')
    const [level, setLevel] = useState<string>('')
    const [puuId, setPuuId] = useState<string>('')
    const [icon, setIcon] = useState<number>(0)
    const [topChampions, setTopChampions] = useState<any[]>([])
    const [topChampionsObject, setTopChampionsObject] = useState<any[]>([])
    const [history, setHistory] = useState<string>()
    const [partidas, setPartidas] = useState<any[]>()
    const [gameMode, setGameMode] = useState<string>()
    const [participantes, setParticipantes] = useState<any[]>([])
    const [player, setPlayer] = useState<Player>()
    const [duration, setDuration] = useState<number>(0)
    const [kills, setKills] = useState<number>(0)
    const [deaths, setDeaths] = useState<number>(0)
    const [kda, setKda] = useState<number>(0)
    const [assists, setAssists] = useState<number>(0)
    const [win, setWin] = useState<boolean>(false)

    const key: string = 'RGAPI-d7260307-05a9-4be3-98e8-156b7e68075e'
    const nickName: string = 'Xeraf'
    const image: any = `https://ddragon.leagueoflegends.com/cdn/13.23.1/img/profileicon/${icon}.png`

    useEffect(() => {

        getUser(nickName, key)
    }, [])

    interface Player {

        deaths: any
        assists: any
        challenges: {
            kda: any
        }
    }

    interface TopChampionsObject {
        key: string
    }

    interface RootObject {

        deathsByEnemyChamps: number
        kda: number
        killAfterHiddenWithAlly: number
        killingSprees: number
        killsNearEnemyTurret: number
        killsOnRecentlyHealedByAramPack: number
        killsUnderOwnTurret: number
        knockEnemyIntoTeamAndKill: number
        multikills: number
        outnumberedKills: number
        pickKillWithAlly: number
        skillshotsDodged: number
        skillshotsHit: number
        snowballsHit: number
        soloKills: number
    }

    const getUser = (nickName: string, key: string) => {

        axios
            .get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickName}?api_key=${key}`)
            .then((response) => {

                const responseData = response.data
                const puuId = responseData.puuid

                setNick(responseData.name)
                setLevel(responseData.summonerLevel)
                setPuuId(responseData.puuid)
                setIcon(responseData.profileIconId)

                getMastery(puuId, key)
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

            console.log(topChampionsObject);

            getHistoryMatch(puuId, key)

        } catch (error) {
            console.error('Erro ao filtrar champions')
        }
    }

    const getHistoryMatch = (puuId: string, key: string) => {

        axios
            .get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuId}/ids?start=0&count=20&api_key=${key}`)
            .then((response) => {

                const matchId = response.data[0]

                setHistory(matchId)

                return axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${key}`)
            })
            .then((infoPartida) => {

                const partidaData = infoPartida.data.info

                setParticipantes(partidaData.participants)
                setDuration(partidaData.gameDuration)
                setGameMode(partidaData.gameMode)
                setWin(partidaData.teams[1].win)

                const participantes = partidaData.participants

                statusPlayer(participantes)
            })
            .catch((error) => {
                console.error('Erro ao obter histórico:', error.message)
            })
    }

    const statusPlayer = (participantes: any[]) => {

        participantes.map((participante) => {

            if (participante.summonerName.toUpperCase() === nickName.toUpperCase()) {

                setPlayer(participante)
                setAssists(participante.assists)
                setDeaths(participante.deaths)
                setKda(participante.challenges.kda)
                setKills(participante.kills)
            }
        })
    }

    return (
        <>
            <StatusBar style='light' />
            <ImageBackground source={Background} style={styles.background}>
                <ScrollView style={{ margin: 'auto', width: '100%' }}>

                    <View style={{ width: '100%' }}>

                        <ImageBackground source={Faixa} style={styles.principal}>
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
                                <Text style={styles.title}>{nick}</Text>
                            </View>
                        </ImageBackground>
                        <View style={styles.box}>

                            <Text style={styles.subtitle}>Principais Campeões</Text>
                            <FlatList
                                scrollEnabled={false}
                                data={topChampionsObject}
                                renderItem={({ item }: { item: TopChampionsObject }) => (<ChampionItem item={item} />)}
                                keyExtractor={(item) => item.key}
                            />
                            {/* <FlatList
                                scrollEnabled={false}
                                data={topChampions}
                                renderItem={({ item }: { item: TopChampionsObject }) => (<ChampionInfo item={item} />)}
                                keyExtractor={(item) => item.key}
                            /> */}
                        </View>

                        <View style={styles.info}>

                            <Text style={styles.title}>
                                Última partida
                            </Text>

                            {
                                win ?
                                    <Text style={[styles.result, { color: 'blue' }]}>
                                        - Vitória -
                                    </Text> :
                                    <Text style={[styles.result, { color: 'red' }]}>
                                        - Derrota -
                                    </Text>
                            }

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
                                Kda: {(kda).toFixed(2)}
                            </Text>
                        </View>
                    </View>
                </ScrollView >
            </ImageBackground>
        </>
    )
}
