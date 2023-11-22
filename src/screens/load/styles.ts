import { StyleSheet, Platform } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputStyle:{
        width:'80%',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    logo: {
        position: 'absolute',
        width: 130,
        height: 100,
        tintColor: '#FFF',
        bottom: 10      
    },
    carregando: {
        position: 'absolute',
        width: 130,
        height: 100,
        tintColor: '#FFF',      
    },
    coluna: {
      flexDirection: 'column',
      alignItems: 'center',
     
    }
})