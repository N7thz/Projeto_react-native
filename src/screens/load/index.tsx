import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { styles } from "./styles";

import load from '../../assets/imgs/background-loading.png'

const Load = () => {
  return (
  
    <ImageBackground source={load} style={styles.backgroundImage}>
      <View style={styles.coluna}>     
        <ActivityIndicator style={styles.carregando}/>
      </View>  
    </ImageBackground>
  )
}
export default Load