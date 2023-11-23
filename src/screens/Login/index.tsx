import React, { useContext, useState } from 'react'
import { View, Text, TextInput, ImageBackground, TouchableOpacity } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { styles } from './styles';

import { getUser } from '../../service/api';

import background from '../../assets/imgs/background-inicio.png'

import { RootStack } from '../../routes/Stack.routes';

import { AntDesign } from '@expo/vector-icons';

import { ApplicationContext } from '../../context/context';

export const LoginScreen = () => {

  const { nick, setNick } = useContext(ApplicationContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<NativeStackNavigationProp<RootStack>>()

  const Logar = async () => {

    const storeData = async (value: string) => {
      try {

        await AsyncStorage.setItem('logado', value);

      } catch (e) {

        console.error('não foi possivel salvar as informações');
      }
    }

    const response = await getUser(email, password)

    if (response.data.length == 1) {

      const dados: [any] = response.data

      console.log(dados);


      dados.map((item) => {

        setNick(item.dados.name)
      })

      storeData('true')

      alert('Login efetuado com sucesso')

      navigation.navigate('TabNavigation')
    } else {

      alert('Erro ao efetuar o login')
      setEmail('')
      setPassword('')
    }
  }

  return (

    <ImageBackground
      source={background}
      style={styles.background}
    >
      <View style={styles.container}>

        <Text style={styles.title}>
          Login
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <TouchableOpacity
          style={styles.button} activeOpacity={.7}
          onPress={Logar}
        >
          <AntDesign name="swapright" size={36} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.link}
          onPress={() => navigation.navigate('Register')}>
          <Text>Não possui conta? Cadastre-se</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  )
}