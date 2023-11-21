import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';

import backgroung from './src/assets/imgs/background-profile.png'
import fotoPerfil from './src/assets/imgs/foto-perfil.jpeg'

import { useFonts }  from 'expo-font'

export default function App() {

  const [ fontsLoaded ] = useFonts({

    'LolFont': require('./src/assets/fonts/Spiegel_TT_Regular.ttf')
})

  return (

    <ImageBackground source={backgroung} style={styles.background}>
      <View style={styles.iconBox}>
        <Image source={fotoPerfil} style={styles.iconImage} />
        <View style={styles.texts}>
          <Text style={styles.name}>Rorivaldo da Silva</Text>
          <Text style={styles.nickName}>rorirori021</Text>
        </View>
      </View>
      <TouchableOpacity activeOpacity={.7} style={styles.button}>
        <Text style={styles.textButton}>
          Sair
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  background: {

    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  iconBox: {

    width: '100%',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconImage: {

    width: 100,
    height: 100,
    borderRadius: 999
  },

  texts: {

    padding: 15,
  },

  name: {

    fontSize: 24,
    color: 'white',
    fontFamily: 'LolFont'
  },

  nickName: {

    fontSize: 18,
    color: 'white',
    fontFamily: 'LolFont'
  },

  button: {

    backgroundColor: '#C09D53',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: '50%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },

  textButton: {

    fontSize: 32,
    color: 'white',
    fontFamily: 'LolFont'
  },
});

