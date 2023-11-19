import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import  background  from '../../assets/imgs/background-profile.png'
import  fotoPerfil  from '../../assets/imgs/foto-perfil.jpeg'

import { useFonts } from 'expo-font'

export function Profile() {

    const [fontsLoaded] = useFonts({

        'LolFont': require('../../assets/fonts/Spiegel_TT_Regular.ttf')
    })

    return (

        <ImageBackground source={background} style={styles.background}>
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


