import { StyleSheet, Platform } from "react-native"

export const styles = StyleSheet.create({
  text: {
    color: '#a0a2a3',
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'LolFont-Text',
    margin: '3%'
  },
  tituloSkills: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'LolFont-Bold',
    marginTop: -15
  },
  containerVideo: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    objectFit: 'contain', 
    overflow: 'hidden', 
    bottom: 200 
  },
})