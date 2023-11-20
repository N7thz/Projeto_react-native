import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#09111A',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {

        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
    },

    subtitle: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 7,
    },

    text: {
        color: '#fff',
        fontSize: 12,
        padding: 8,
        paddingTop: 20,
        textAlign: 'justify',
    },

    image: {

        flex: 1,
    },

    info: {

        flex: 1,
    },

    box: {

        width: '90%',
        height: '70%',
        margin: 20,
        flexDirection: 'row',
    },

    skins: {
        flexDirection: 'row',
        gap: 10,
    },

    skin: {
        width: 75,
        height: 100,
    },

    button: {

        backgroundColor: '#7f66cb',
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        width: '50%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        marginTop: 20,
    },

    container404: {

        flex: 1,
        backgroundColor: '#09111A',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    title404: {

        color: '#fff',
        fontSize: 32,
        textAlign: 'center',
    },

    stats: {

        padding: 12
    },

    statsText: {

        fontSize: 18,
        color: '#fff'
    }
})