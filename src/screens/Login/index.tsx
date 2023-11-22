import React, { useState, useEffect, useContext} from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image, ImageBackground} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage';


<<<<<<< HEAD
import  Home  from '../Home/Home';
=======
import  Home  from '../Home/Home'
>>>>>>> andre/feature/context/add
import { TabNavigation } from '../../routes/Tab.routes';
import { RootStack } from '../../routes/Stack.routes';
import { ApplicationContext } from '../../context/context'

<<<<<<< HEAD
import  background  from '../../assets/imgs/background-inicio.png'
=======
import  background  from '../../assets/imgs/background-profile.png'
import { api } from '../../api/api';



>>>>>>> andre/feature/context/add

export const LoginScreen = () => {

  
  const [token, setToken] = useState (null )
  const [user, setUser] = useState ('')
  

  const navigation = useNavigation<NativeStackNavigationProp<RootStack>>()

  const {usuario, setUsuario, usuarioLogado, setUsuarioLogado,email, setEmail,password,setPassword} = useContext (ApplicationContext)

  const getUser = async () => {
    const response = await api.get ('/users', {params: {email, password}})
    setUser (response.data)
    
  }

  // const storeData = async (value) => {
  //   try {
  //     const jsonValue = JSON.stringify(value);
  //     await AsyncStorage.setItem('my-key', jsonValue);
  //     alert('funciona!!')
  //   } catch (e) {
  //     // saving error
  //   }
  // };


  return (

    <ImageBackground source={background} style={styles.backgroundImage}>
      <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            onChangeText={setPassword}
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
