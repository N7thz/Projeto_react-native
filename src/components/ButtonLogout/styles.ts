import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    button: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        height: 42,
        backgroundColor: '#020a13',
        margin: 24,
        borderWidth: 1,
        borderColor: '#C09D53',
        borderTopLeftRadius: 999,
        borderBottomLeftRadius: 999,
    },

    x: {

        height: 25,
        width: 25,
        marginLeft: 7,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#C09D53',
        backgroundColor: '#1e2328',
        overflow: 'hidden',
        borderRadius: 999,
    },

    textBox: {

        height: 25,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 7,
        backgroundColor: '#1e2328',
        borderWidth: 1,
        borderColor: '#04869f',
    },

    text: {

        textTransform: 'uppercase',
        textAlign: 'center',
        fontFamily: 'LolFont-Bold-Button',
        fontSize: 14,
        color: '#a1c5c5',
    }
})