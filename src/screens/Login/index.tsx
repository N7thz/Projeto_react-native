import React, { useState } from 'react'
import { View, Text, TextInput, ImageBackground, TouchableOpacity, Alert } from 'react-native'

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack'

import { styles } from './styles';

import { getUser } from '../../service/api';

import background from '../../assets/imgs/background-inicio.png'

import { RootStack } from '../../routes/Stack.routes';

export const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nickName = 'teste dos guri'

  const navigation = useNavigation<NativeStackNavigationProp<RootStack>>()

  const Logar = async () => {

    const response = await getUser( email, password )

    if (response.data.length == 1) {

      alert('Login efetuado com sucesso')
      navigation.navigate('TabNavigation')
    } else {

      alert('Erro ao efetuar o login')
      setEmail('')
      setPassword('')
    }
  }

  return (

    <ImageBackground source={background} style={styles.backgroundImage}>
      <View style={styles.container}>
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
        <TouchableOpacity style={styles.button} activeOpacity={.7} onPress={Logar}>
          <Text style={styles.textButton} >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Não possui conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}
