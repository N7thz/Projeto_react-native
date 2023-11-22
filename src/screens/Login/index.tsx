import React, { useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image, ImageBackground} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack'

import { ApplicationContext } from '../../Context/ApplicationContext';

import { RootStack } from '../../routes/Stack.routes';
import  background  from '../../assets/imgs/background-profile.png'

import axios from 'axios';

export const LoginScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStack>>()

  const { email, setEmail, password, setPassword } = useContext(ApplicationContext)

  const user = {

    email: email,
    password: password
  }

  const teste = async () => {

    navigation.navigate('TabNavigation')
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
        <TouchableOpacity style={styles.button} activeOpacity={.7} onPress={teste}>            
            <Text style={styles.textButton} >
                Login
            </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}
