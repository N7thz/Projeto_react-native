import React, { useEffect, useState, useRef } from "react";
import { Text, View, Image, FlatList, TouchableOpacity, Button, Platform } from "react-native";
import { styles } from "./istyles";
import { Skins } from "../../components/Skins/Skins";
import Modal from 'react-native-modal';
import { Video } from 'expo-av'


interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  lore: string;
  spells: [];
  skins: {
    id: string;
    num: number;
    name: string;
    chromas: boolean;
  }[];
}

const InfoCampeao = () => {
  const [championInfo, setChampionInfo] = useState<Champion | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedContent, setSelectedContent] = useState<string | null>(null);;
  const videoRef = useRef<Video>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ddragon.leagueoflegends.com/cdn/13.22.1/data/pt_BR/champion/Aatrox.json"
        );

        if (!response.ok) {
          throw new Error("Erro ao carregar dados da API");
        }

        const data = await response.json();
        // Use Object.values para obter os valores do objeto e pegar o primeiro (no caso, único) campeão
        const firstChampion = Object.values(data.data)[0] as Champion;
        setChampionInfo(firstChampion);

      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };

    fetchData();
  }, []);

  if (!championInfo) {
    return <Text>Carregando dados...</Text>;
  }

  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg`

  const imagePassive = `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/passive/Aatrox_Passive.png`

  const imageQ = `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/spell/AatroxQ.png`

  const imageW = `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/spell/AatroxW.png`

  const imageE = `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/spell/AatroxE.png`

  const imageR = `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/spell/AatroxR.png`

  const skinsArray = championInfo.skins.map(skin => skin.num);


  const imagePathArray = skinsArray.map((num, index) => ({
    id: index.toString(),
    url: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_${num}.jpg?t=${Date.now()}`
  }));

  const toggleModal = (content: string | null) => {
    setSelectedContent(content);
    setModalVisible(!isModalVisible);

    // Pausa o vídeo ao fechar o modal
    if (!isModalVisible && videoRef.current) {
      videoRef.current.pauseAsync();
    }
  };

  const renderContent = () => {
    switch (selectedContent) {
      case 'videoPassive':
        return (
          <View style={styles.containerVideo}>
            <Video
              ref={videoRef}
              style={styles.video}
              source={{ uri: 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_P1.mp4' }}
              resizeMode="contan"
              shouldPlay={true}
              isMuted={false}
              isLooping={true}
            />
          </View>
        )

      case 'imagemQ':
        return (
          <View style={styles.containerVideo}>
            <Video
              ref={videoRef}
              style={styles.video}
              source={{ uri: 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_Q1.mp4' }}
              resizeMode={'center'}
              shouldPlay={true}
              isMuted={false}
              isLooping={true}
            />
          </View>
        )
      case 'imagemW':
        return (<View style={styles.containerVideo}>
          <Video
            ref={videoRef}
            style={styles.video}
            source={{ uri: 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_W1.mp4' }}
         resizeMode= "contain"
            shouldPlay={true}
            isMuted={false}
            isLooping={true}
          />
        </View>)
      case 'imagemE':
        return (
          <View style={styles.containerVideo}>
            <Video
              ref={videoRef}
              style={styles.video}
              source={{ uri: 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_E1.mp4' }}
              resizeMode={ResizeMode.CONTAIN}
              // resizeMode= "contain"
              shouldPlay={true}
              isMuted={false}
              isLooping={true}
            />
          </View>
        )
      case 'imagemR':
        return (
          <View style={styles.containerVideo}>
            <Video
              ref={videoRef}
              style={styles.video}
              source={{ uri: 'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_R1.mp4' }}
              resizeMode={ResizeMode.CONTAIN}
              // resizeMode= "contain"
              shouldPlay={true}
              isMuted={false}
              isLooping={true}
            />
          </View>
        )

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />
      <Image source={require('../../assets/imgs/degrade.png')} style={styles.backgroundImage} />
      <View style={styles.degrade}>

        <Text style={styles.subTitulo}>{championInfo.title}</Text>
        <Text style={styles.titulo}>{championInfo.id}</Text>


        <View style={styles.containerLore}>
          <Text style={styles.text}>{championInfo.lore}</Text>
        </View>

        <View style={styles.ladoALado}>

          <TouchableOpacity
            style={styles.imageSkillsOp}
            onPress={() => toggleModal('videoPassive')}
          >
            <Image
              source={{ uri: imagePassive }}
              style={styles.imageSkills}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.imageSkillsOp}
            onPress={() => toggleModal('imagemQ')}
          >
            <Image
              source={{ uri: imageQ }}
              style={styles.imageSkills}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.imageSkillsOp}
            onPress={() => toggleModal('imagemW')}
          >
            <Image
              source={{ uri: imageW }}
              style={styles.imageSkills}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.imageSkillsOp}
            onPress={() => toggleModal('imagemE')}
          >
            <Image
              source={{ uri: imageE }}
              style={styles.imageSkills}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.imageSkillsOp}
            onPress={() => toggleModal('imagemR')}
          >
            <Image
              source={{ uri: imageR }}
              style={styles.imageSkills}
            />
          </TouchableOpacity>

        </View>


        <View style={styles.containerConteudo}>
          <FlatList
            data={imagePathArray}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Skins img={item} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}

          />

        </View>
      </View>

      <Modal isVisible={isModalVisible} style={styles.modal}>
        {renderContent()}
      </Modal>

    </View>


  );
};

export default InfoCampeao;