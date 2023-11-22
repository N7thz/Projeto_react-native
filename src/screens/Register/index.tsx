import React, { useState } from 'react'
import { View, TextInput, ImageBackground, Touchable, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

import background from '../../assets/imgs/background-cadastro.png'

export function Register() {

    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

    const handlePress = () => { 
    //     fetch('http://localhost:8080/users', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //           email: email,
    //           senha: senha,
    //         }),
    //       })
    //         .then((response) => response.json())
    //         .then((data) => {
    //           console.log('Dados enviados com sucesso:', data);
    //           // Lógica adicional após a requisição ser bem-sucedida
    //         })
    //         .catch((error) => {
    //           console.error('Erro ao enviar dados:', error);
    //           // Lógica de tratamento de erro
    //         });
    }
    
    return(
        <ImageBackground source={background} style={styles.background}>
            <View style={styles.container}>

                <Text style={styles.title}>Cadastro</Text>

                <TextInput 
                    style={styles.input} 
                    placeholder='Email'
                    onChangeText={text=>setEmail(text)}
                />

                <TextInput
                    style={styles.input}   
                    placeholder='Senha' 
                    onChangeText={text=>setSenha(text)}
                />

                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={{ fontSize: 18 }}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.link}>
                    <Text>Já possui conta? Faça login</Text>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    )
}
