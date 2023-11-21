import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image, ImageBackground} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack'


import { Home } from '../home';
import { TabNavigation } from '../../routes/Tab.routes';
import { RootStack } from '../../routes/Stack.routes';

import  background  from '../../assets/imgs/background-profile.png'

export const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<NativeStackNavigationProp<RootStack>>()

 
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
        <TouchableOpacity style={styles.button} activeOpacity={.7} onPress={()=> navigation.navigate('TabNavigation')}>            
            <Text style={styles.textButton} >
                Login
            </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}
