import React, { useState } from 'react'
import { View, TextInput, ImageBackground, Touchable, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStack } from '../../routes/Stack.routes';
import { getUser } from '../../service/api';
import { postUser } from '../../service/api';
import axios from 'axios'
import { styles } from './styles';

import background from '../../assets/imgs/background-cadastro.png'

export function Register() {

    const [nickLol, setNickLol] = useState<string>('');
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [dadosLol, setDadosLol] = useState<Array<any>>([]);
    const [nick, setNick] = useState<string>('')
    const [level, setLevel] = useState<string>('')
    const [puuId, setPuuId] = useState<string>('')
    const [icon, setIcon] = useState<number>(0)

    const navigation = useNavigation<NativeStackNavigationProp<RootStack>>()

    interface UserProfile {
        id: string
        accountId: string
        puuid: string
        name: string
        profileIconId: number
        revisionDate: number
        summonerLevel: number
    }

    const Cadastrar = async () => {
        const response = await getUser(email, senha)

        if (response.data.length == 1) {

            alert('Esse usuário já existe! Tente novamente.')
            setNickLol('')
            setNome('')
            setEmail('')
            setSenha('')
        } else {

            postUser(nome, email, senha, dadosLol)
            alert('Cadastro efetuado com sucesso!')
        }
    }

    return (
        <ImageBackground source={background} style={styles.background}>
            <View style={styles.container}>

                <Text style={styles.title}>Cadastro</Text>

                <TextInput
                    style={styles.input}
                    placeholder='Nick'
                    onChangeText={text => setNickLol(text)}
                    value={nickLol}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Nome'
                    onChangeText={text => setNome(text)}
                    value={nome}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    onChangeText={text => setEmail(text)}
                    value={email}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    onChangeText={text => setSenha(text)}
                    value={senha}
                />

                <TouchableOpacity style={styles.button} onPress={Cadastrar}>
                    <Text style={{ fontSize: 18 }}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('LoginScreen')}>
                    <Text>Já possui conta? Faça login</Text>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    )
}
