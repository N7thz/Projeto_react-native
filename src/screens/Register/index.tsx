import React, { useState } from 'react'
import { View, TextInput, ImageBackground, Touchable, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStack } from '../../routes/Stack.routes';
import { getUser } from '../../service/api';
import { postUser } from '../../service/api';
import { styles } from './styles';

import { AntDesign } from '@expo/vector-icons';

import background from '../../assets/imgs/background-cadastro.png'

export function Register() {

    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

    const navigation = useNavigation<NativeStackNavigationProp<RootStack>>()

    const Cadastrar = async () => {
        const response = await getUser(email, senha)

        if (response.data.length == 1) {

            alert('Esse usuário já existe! Tente novamente.')
            setEmail('')
            setSenha('')
        } else {

            postUser(email, senha)
            alert('Cadastro efetuado com sucesso!')
        }
    }

    return (
        
        <ImageBackground 
            source={background} 
            style={styles.background}
        >
            <View style={styles.container}>

                <Text style={styles.title}>
                    Cadastro
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    keyboardType="email-address"
                    onChangeText={text => setEmail(text)}
                    value={email}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    keyboardType="email-address"
                    onChangeText={text => setSenha(text)}
                    value={senha}
                />

                <TouchableOpacity 
                    style={styles.button} onPress={Cadastrar}
                >
                    <AntDesign name="swapleft" size={36} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('LoginScreen')}>
                    <Text>
                        Já possui conta? Faça login
                    </Text>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    )
}