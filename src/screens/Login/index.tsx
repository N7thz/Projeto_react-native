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
import { Ionicons } from '@expo/vector-icons';


export const LoginScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStack>>()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { setNick } = useContext(ApplicationContext)

  const storeData = async (value: string) => {

    try {

      await AsyncStorage.setItem('NickName', value);

    } catch (e) {

      console.error('não foi possivel salvar as informações');
    }
  }

  const Logar = async () => {

    const response = await getUser(email, password)

    if (response.data.length == 1) {

      const dados: [any] = response.data

      dados.map((item) => {

        storeData(item.dados.name)
        setNick(item.dados.name)
      })

      navigation.navigate('TabNavigation')
    } else {

      alert('Erro ao efetuar o login')
    }

    setEmail('')
    setPassword('')
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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

        <View >
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={!showPassword}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIconContainer}>
            {showPassword ? <Ionicons name="eye-outline" size={16} color="black" /> : <Ionicons name="eye-off-outline" size={16} color="black" />}
          </TouchableOpacity>
        </View>

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