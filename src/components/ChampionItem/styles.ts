import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    champion: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C09D53',
        borderTopRightRadius: 24,
        borderRadius: 4,
        margin: 20,
        borderColor: '#3b3855',
        borderWidth: 2
    },

    image: {

        width: '100%',
        height: 100,
        borderTopRightRadius: 24,
    },

    texts: {

        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 4,
    },
    
    title: {

        fontSize: 24,
        color: '#fff',
        fontFamily: 'LolFont-Bold'
    },

    text: {

        fontSize: 16,
        color: '#fff',
    },
})