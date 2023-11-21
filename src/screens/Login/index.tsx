import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import imagemLogin from '../../assets/imgs/background-inicio.png'
import { styles } from './styles' 

export function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <ImageBackground
      source={imagemLogin} 
      style={styles.backgroundImage}
    >
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
      <Button title="Login" onPress={handleLogin} />
    </View>
    </ImageBackground>
  );
}