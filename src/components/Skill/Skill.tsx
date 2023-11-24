import React from 'react';
import { View, Text, Image } from 'react-native';
import { Video } from 'expo-av';
import { styles } from './style'; 
import { Dimensions } from 'react-native';


const screenWidth = Dimensions.get('window').width;

interface SkillProps {
  videoUri: string;
  name: string;
  description: string;
}

const Skill: React.FC<SkillProps> = ({ videoUri, name, description }) => (
  <View style={styles.containerVideo}>
    <Video
      style={{ width: screenWidth, aspectRatio: 16 / 9 }}
      source={{ uri: videoUri }}
      resizeMode={'contain' as any}
      shouldPlay={true}
      isMuted={false}
      isLooping={true}
    />
    <Text style={styles.tituloSkills}>{name}</Text>
    <Text style={styles.text}>{description}</Text>
  </View>
);

export default Skill;