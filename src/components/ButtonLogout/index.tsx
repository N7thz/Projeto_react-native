import React from 'react'

import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

import { Feather } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const ButtonLogout = () => {

    return (

        <View style={styles.button}>
            <View style={styles.x}>
                <Feather name="x" size={18} color="#C09D53" />
            </View>
            <View style={styles.textBox}>
                <Text style={styles.text}>Logout</Text>
            </View>
        </View>
    )
}
