import React, { useEffect, useState } from "react";
import { FlatList, Text, View, TextInput } from "react-native";
import { Personagens } from "../../components/CardHome/Personagens";
import { styles } from "./styles";
interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string
}
const Home = () => {
  const [championData, setChampionData] = useState<Champion[]>([]);
  const [searchText, setSearchText] = useState("");


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

    fetchData();
  }, []); 

  
  const championArray = Object.values(championData);

  const filteredChampions = championArray.filter((champion: any) =>
    champion.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderPersonagem = ({ item }: any) => <Personagens champion={item} />;



  return (
    <View style={styles.container}>
      <TextInput
        style={styles.containerText}
        placeholder="Procurar um champion"
        placeholderTextColor='#a0a2a3'
        onChangeText={(text) => setSearchText(text)}
      />
      <View style={styles.containerConteudo}>
      <FlatList
        data={filteredChampions}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={renderPersonagem}
      />
      </View>
    </View>
  );
};

export default Home;