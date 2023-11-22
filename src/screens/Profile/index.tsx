import React, { useEffect, useState, useContext} from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, Image, FlatList, ScrollView } from 'react-native'
import axios from 'axios'
import { ApplicationContext } from '../../context/context'

import { styles } from './styles'

export const Profile = () => {

    const [nick, setNick] = useState<string>('')
    const [level, setLevel] = useState<string>('')
    const [puuId, setPuuId] = useState<string>('')
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

    const {email} = useContext (ApplicationContext)

    const key: string = 'RGAPI-363870e5-f8f4-4088-b44f-90384f7bac3b'
    const champion: string = 'Aatrox'
    const nickName: string = 'Xeraf'
    const image: any = `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/champion/${champion}.png`

    useEffect(() => {

        getUser()
    }, [nickName])

    useEffect(() => {

        getUser()
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

    const getUser = () => {

        axios
            .get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickName}?api_key=${key}`)
            .then((response) => {
                const responseData = response.data

                setNick(responseData.name)
                setLevel(responseData.summonerLevel)
                setPuuId(responseData.puuid)
                getMastery()
            })
            .catch((error) => {
                console.error('Erro ao obter usuário:', error.message)
            })
    }

    const getMastery = () => {

        axios
            .get(`https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuId}?api_key=${key}`)
            .then((response) => {
                const arrayResponse = Object.values(response.data)

                setTopChampions([arrayResponse[0], arrayResponse[1], arrayResponse[2]])

                filterChampions()
            })
            .catch((error) => {
                console.error('Erro ao obter maestria:', error.message)
            })
    }

    const filterChampions = async () => {

        try {
            const response: any = (await axios.get(`https://ddragon.leagueoflegends.com/cdn/13.22.1/data/pt_BR/champion.json`)).data.data

            const responseArray: any[] = Object.values(response)

            const arrayFilter = responseArray.filter((champion) => {

                return topChampions.some(topchampion => topchampion.championId.toString() === champion.key)
            })
            setTopChampionsObject(arrayFilter)

            getHistoryMatch()

        } catch (error) {
            console.error('Erro ao filtrar champions')
        }
    }

    const getHistoryMatch = () => {

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

                statusPlayer()
            })
            .catch((error) => {
                console.error('Erro ao obter histórico:', error.message)
            })
    }

    const statusPlayer = () => {

        participantes.map((participante) => {

            if (participante.summonerName.toUpperCase() === nickName.toUpperCase()) {

                setPlayer(participante)
                setAssists(player?.assists)
                setDeaths(player?.deaths)
                setKda(player?.challenges.kda)
                console.log(participante.challenges)
            }
        })
    }

    const ChampionItem: any = ({ item }: any) => {

        return (

            <View style={styles.champion}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text}>{item.tags}</Text>
            </View>
        )
    }

    const ChampionInfo: any = ({ item }: any) => {

        return (

            <View style={styles.champion}>
                <Text style={styles.text}>Nivel do campeão: {item.championLevel}</Text>
                <Text style={styles.text}>Pontos do campeão:{item.championPoints}</Text>
            </View>
        )
    }

    return (

        <ScrollView style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.box}>
                <Image source={{ uri: image }} style={styles.image} />
                <Text style={styles.title}>{nick}</Text>
                <Text style={[styles.title, { fontSize: 18 }]}>Level: {level}</Text>
                <Text style={styles.title}>{email}</Text>

                <View style={{ width: '100%' }}>

                    <FlatList
                        scrollEnabled={false}
                        data={topChampionsObject}
                        renderItem={({ item }: { item: TopChampionsObject }) => (
                            <ChampionItem item={item} />
                        )}
                        keyExtractor={(item) => item.key}
                    />

                    <FlatList
                        scrollEnabled={false}
                        data={topChampions}
                        renderItem={({ item }: { item: TopChampionsObject }) => (
                            <ChampionInfo item={item} />
                        )}
                        keyExtractor={(item) => item.key}
                    />
                </View>
            </View>

            <View style={styles.info}>
                <Text style={styles.title}>Última partida</Text>
                {
                    win ?
                        <Text style={styles.title}>Vitoria</Text> :
                        <Text style={[styles.text, { fontSize: 18 }]}>Derrota</Text>
                }
                <Text style={styles.text}>Duração: {duration / 60} minutos</Text>

                <Text style={styles.text}>Modo de jogo: {gameMode}</Text>

                <View style={{ backgroundColor: '#fff', width: '100%', padding: 10, justifyContent: 'center' }}>
                    <Text>Kda: {kills}/ {deaths} / {assists} / {kda}</Text>
                </View>

            </View>
        </ScrollView>
    )
}
