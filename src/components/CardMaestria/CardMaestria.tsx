import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import maestria1 from "../../assets/imgs/maestria1.png"
import maestria2 from "../../assets/imgs/maestria2.png"
import maestria3 from "../../assets/imgs/maestria3.png"
import maestria4 from "../../assets/imgs/maestria4.png"
import maestria5 from "../../assets/imgs/maestria5.png"
import maestria6 from "../../assets/imgs/maestria6.png"
import maestria7 from "../../assets/imgs/maestria7.png"
import fundoMaestria from "../../assets/imgs/fundoMaestria.png"
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'

type RootStackParamList = {
    InfoCampeao: { championId: string };
  };

  type InfoCampeaoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'InfoCampeao'>;

interface Champion {
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
}

interface Props {
    campeao: {
    puuid: string;
    campeãoId: number;
    campeãoLevel: number;
    pontoscampeão: number;
    últimoPlayTime: number;
    championPointsSinceLastLevel: number;
    championPointsUntilNextLevel: number;
    peitoconcedido: boolean;
    tokensganhos: number;
    summonerId: string;
    }
  }

  export const CardMaestria: React.FC<Props> = ({ campeao }: Props) => {
      const { puuid,
        campeãoId,
        campeãoLevel,
        pontoscampeão,
        últimoPlayTime,
        championPointsSinceLastLevel,
        championPointsUntilNextLevel,
        peitoconcedido,
        tokensganhos,
        summonerId, } = campeao;
        const [championData, setChampionData] = useState<Champion[]>([]);
        
        
        
        
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch(
                        "https://ddragon.leagueoflegends.com/cdn/13.22.1/data/pt_BR/champion.json"
                        );
                        if (!response.ok) {
                            throw new Error("Erro ao carregar dados da API");
                        }
                        const data = await response.json();
                        setChampionData(Object.values(data.data));
                    } catch (error) {
                        console.error("Erro na requisição:", error);
                    }
                };
                
                fetchData();
            }, []);
            
            
            const campeaoCorrespondente = championData.find(champion => parseInt(champion.key) == campeãoId);
            
            const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${campeaoCorrespondente?.id}_0.jpg`;
            
            console.log("Conteúdo de championData:", campeaoCorrespondente?.id);
            
            
            const navigation = useNavigation<InfoCampeaoScreenNavigationProp>();
            
             const handlePress = () => {
                if (campeaoCorrespondente) {
                    console.log("entrei")
                    navigation.navigate('InfoCampeao', { championId: campeaoCorrespondente.id });
                  }
                };
                
    let maestriaImage;

    switch (campeãoLevel) {
        case 1:
            maestriaImage = maestria1;
            break;
        case 2:
            maestriaImage = maestria2;
            break;
        case 3:
            maestriaImage = maestria3;
            break;
        case 4:
            maestriaImage = maestria4;
            break;
        case 5:
            maestriaImage = maestria5;
            break;
        case 6:
            maestriaImage = maestria6;
            break;
        default:
            maestriaImage = maestria7;
            break;
    }

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity  onPress={handlePress}>
                    {/* onPress={handlePress} */}
                    <Image
                        source={{ uri: imageUrl }}
                        style={styles.image}
                    />
                </TouchableOpacity>
                <View style={styles.containerMaestria}>
                    <Image source={fundoMaestria} style={styles.fundoMaestria} />
                    <View style={styles.ladoALado}>
                        <Image source={maestriaImage} style={styles.maestria0} />
                        <Text style={styles.textClaro}>{pontoscampeão}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};