import React from "react"
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import  InfoCampeao  from '../../screens/InfoCampeao/InfoCampeao'

type RootStackParamList = {
  InfoCampeao: { championId: string };
  // ... outros nomes de páginas
};

interface PersonagensProps {
  champion: {
    id: string;
    name: string;
  };
}

type InfoCampeaoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'InfoCampeao'>;

export const Personagens: React.FC<PersonagensProps> = ({ champion }) => {
  const { id, name } = champion;
  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/champion/${id}.png`;

const navigation = useNavigation<InfoCampeaoScreenNavigationProp>();

const handlePress = () => {
  // Navegue para a outra página com o id como parâmetro
  navigation.navigate('InfoCampeao', { championId: id });
};


  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
        />
        <Text style={styles.titulo}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};