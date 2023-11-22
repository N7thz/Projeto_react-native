import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import InfoCampeao from '../../screens/InfoCampeao/InfoCampeao'
import maestria1 from "../../assets/imgs/maestria1.png"
import maestria2 from "../../assets/imgs/maestria2.png"
import maestria3 from "../../assets/imgs/maestria3.png"
import maestria4 from "../../assets/imgs/maestria4.png"
import maestria5 from "../../assets/imgs/maestria5.png"
import maestria6 from "../../assets/imgs/maestria6.png"
import maestria7 from "../../assets/imgs/maestria7.png"
import fundoMaestria from "../../assets/imgs/fundoMaestria.png"

interface Champion {
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string
  }

export const CardMaestria = ({ campeao }: any) => {
    const { pontoscampeão, campeãoLevel, campeãoId } = campeao;
    const [championData, setChampionData] = useState<Champion[]>([]);

    useEffect(() => {

        const fetchData = async () => {
          try {
            // Faça a requisição para a API
            const response = await fetch(
              "https://ddragon.leagueoflegends.com/cdn/13.22.1/data/pt_BR/champion.json"
            );
            // Verifique se a resposta foi bem-sucedida (código de status 200)
            if (!response.ok) {
              throw new Error("Erro ao carregar dados da API");
            }
            // Parseie a resposta para JSON
            const data = await response.json();
            // Defina os dados no estado
            setChampionData(data.data); // Use data.data, pois os campeões estão aninhados sob a chave "data"
          } catch (error) {
            console.error("Erro na requisição:", error);
          }
        };
    
        // Chame a função fetchData quando o componente montar
        fetchData();
      }, []);

      const campeaoCorrespondente = championData.find(champion => champion.key === campeãoId);


    const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Mordekaiser_0.jpg`;

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
                <TouchableOpacity >
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
    )
};