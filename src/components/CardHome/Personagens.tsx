import React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList, Platform } from 'react-native';
import { styles } from './styles'
import FastImage from 'react-native-fast-image';



export const Personagens = ({ champion }: any) => {
  const { id, key, name } = champion;
  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/champion/${id}.png`;

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={styles.titulo}>{name}</Text>

    </View>
  );
};