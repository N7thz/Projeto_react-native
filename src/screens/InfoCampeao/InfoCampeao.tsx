import React, { useEffect, useState, useRef } from "react";
import { Text, View, Image, FlatList, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { styles } from "./istyles";
import { Skins } from "../../components/Skins/Skins";
import Skill from "../../components/Skill/Skill"
import Modal from 'react-native-modal';
import Load from "../load";
import { Video } from 'expo-av'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStack } from "../../routes/Stack.routes"

interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  lore: string;
  image: {
    full: "string"
  }
  skins: {
    id: string;
    num: number;
    name: string;
    chromas: boolean;
  }[];
  spells: [
    {
      id: string;
      name: string;
      image: {
        full: string;
      };
      description: string
    },
    {
      id: string;
      name: string;
      image: {
        full: string;
      };
      description: string
    },
    {
      id: string;
      name: string;
      image: {
        full: string;
      };
      description: string
    },
    {
      id: string;
      name: string;
      image: {
        full: string;
      };
      description: string
    }
  ];
  passive: {
    name: string;
    description: string;
    image: {
      full: string;
    };
  };
}

type RootStackParamList = {
  InfoCampeao: { championId: string };
};
export interface InfoCampeaoProps {
  route: {
    params: {
      championId: string;
    };
  };
}

const InfoCampeao: React.FC<InfoCampeaoProps> = ({ route }) => {
  const [championInfo, setChampionInfo] = useState<Champion | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedContent, setSelectedContent] = useState<string | null>(null);;
  const videoRef = useRef<Video>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://ddragon.leagueoflegends.com/cdn/13.22.1/data/pt_BR/champion/${route.params.championId}.json`
        );

        if (!response.ok) {
          throw new Error("Erro ao carregar dados da API");
        }

        const data = await response.json();
        const firstChampion = Object.values(data.data)[0] as Champion;
        setChampionInfo(firstChampion);

      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };

    fetchData();
  }, []);

  if (!championInfo) {
    return <Load/>;
  }

  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championInfo.id}_0.jpg`

  const imagePassive = `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/passive/${championInfo.passive.image.full}`

  const imageQ = `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/spell/${championInfo.spells[0].image.full}`

  const imageW = `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/spell/${championInfo.spells[1].image.full}`

  const imageE = `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/spell/${championInfo.spells[2].image.full}`

  const imageR = `https://ddragon.leagueoflegends.com/cdn/13.22.1/img/spell/${championInfo.spells[3].image.full}`

  const KeyFormatada = championInfo.key.padStart(3, '0');

  const VideoPassiva = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${KeyFormatada}/ability_0${KeyFormatada}_P1.mp4`

  const VideoQ = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${KeyFormatada}/ability_0${KeyFormatada}_Q1.webm`

  const VideoW = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${KeyFormatada}/ability_0${KeyFormatada}_W1.webm`

  const VideoE = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${KeyFormatada}/ability_0${KeyFormatada}_E1.webm`

  const VideoR = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0${KeyFormatada}/ability_0${KeyFormatada}_R1.webm`

  const skinsArray = championInfo.skins.map(skin => skin.num);

  const imagePathArray = skinsArray.map((num, index) => ({
    id: index.toString(),
    url: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championInfo.id}_${num}.jpg?t=${Date.now()}`
  }));

  const toggleModal = (content: string | null) => {
    setSelectedContent(content);
    setModalVisible(!isModalVisible);

    if (!isModalVisible && videoRef.current) {
      videoRef.current.pauseAsync();
      videoRef.current.unloadAsync()
    }
  };

  const renderContent = () => {
    switch (selectedContent) {
      case 'videoPassive':
        return (
          <Skill
            videoUri={VideoPassiva}
            name={championInfo.passive.name}
            description={championInfo.passive.description}
          />
        )

      case 'imagemQ':
        return (
          <Skill
            videoUri={VideoQ}
            name={championInfo.spells[0].name}
            description={championInfo.spells[0].description}
          />
        )
      case 'imagemW':
        return (
          <Skill
            videoUri={VideoW}
            name={championInfo.spells[1].name}
            description={championInfo.spells[1].description}
          />
        )
      case 'imagemE':
        return (
          <Skill
            videoUri={VideoE}
            name={championInfo.spells[2].name}
            description={championInfo.spells[2].description}
          />
        )
      case 'imagemR':
        return (
          <Skill
            videoUri={VideoR}
            name={championInfo.spells[3].name}
            description={championInfo.spells[3].description}
          />
        )

      default:
        return null;
    }
  };

  const navigation = useNavigation<NativeStackNavigationProp<RootStack>>();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />
      <Image source={require('../../assets/imgs/degrade.png')} style={styles.backgroundImage} />

      <TouchableOpacity style={styles.icon} onPress={() => {
        navigation.navigate('TabNavigation')
        setChampionInfo(null);
      }}>
        <AntDesign name="leftcircle" size={35} color="white" style={{ opacity: 0.3 }} />
      </TouchableOpacity>

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
            activeOpacity={0.5}
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

      <TouchableWithoutFeedback onPress={() => { setModalVisible(false) }}>
        <Modal isVisible={isModalVisible} style={styles.modal}>
          {renderContent()}
        </Modal>
      </TouchableWithoutFeedback>

    </View>
  );
};

export default InfoCampeao;