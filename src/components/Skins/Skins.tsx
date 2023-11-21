import React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList, Platform } from 'react-native';
import { styles } from './styles'
import FastImage from 'react-native-fast-image';



export const Skins = ({ img }: any) => {
  const { id, url } = img;
  

  return (
    <View style={styles.container}>
         <Image
        source={{ uri: url }}
        style={styles.image}
      />
      

    </View>
  );
};