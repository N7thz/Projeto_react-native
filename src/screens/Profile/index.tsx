import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import backgroung from './src/assets/imgs/background-profile.png'
import fotoPerfil from './src/assets/imgs/foto-perfil.jpeg'

import { useFonts } from 'expo-font'

export default function App() {

    const [fontsLoaded] = useFonts({

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


