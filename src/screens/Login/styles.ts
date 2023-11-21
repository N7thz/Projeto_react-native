import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    input: {
      height: 40,
      width: '100%',
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
    button: {

      backgroundColor: '#C09D53',
      shadowColor: '#171717',
      shadowOffset: { width: -2, height: 4 },
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
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      width: '100%',
      height: '100%',
      position: 'absolute',
  }
})