import React, { useContext, useState } from 'react'

import { 
    View, TextInput, ImageBackground, TouchableOpacity, Text 
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { RootStack } from '../../routes/Stack.routes';

import { getUser } from '../../service/api';
import { postUser } from '../../service/api';

import { styles } from './styles';

import axios from 'axios'

import { ApplicationContext } from '../../context/context';

import { AntDesign } from '@expo/vector-icons';

import background from '../../assets/imgs/background-cadastro.png'

export function Register() {

    const [nickLol, setNickLol] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

    const { key } = useContext(ApplicationContext)

    const navigation = useNavigation<NativeStackNavigationProp<RootStack>>()

    const obterJogador = (nickName: string, key: string) => {
        axios
            .get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickName}?api_key=${key}`)
            .then((response) => {

                const dados = response.data
                postUser(email, senha, dados)
            })
            .catch((erro) => {
                console.error('Erro ao obter usuário:', erro.message);
            });
    };

    const Cadastrar = async () => {

        const response = await getUser(email, senha)

        if (response.data.length == 1) {

            alert('Esse usuário já existe! Tente novamente.')
        } else if (email == '' || senha == '' || nickLol == '') {

            alert('Os campos não foram preenchidos corretamente.')
        } else {

            obterJogador(nickLol, key)
            alert('Cadastro efetuado com sucesso')
            navigation.navigate('LoginScreen')
        }

        setNickLol('')
        setEmail('')
        setSenha('')
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

                    <AntDesign name="swapleft" size={36} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('LoginScreen')}>
                    <Text>Já possui conta? Faça login</Text>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    )
}
