import { StyleSheet, Platform } from "react-native"

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    
  },
  skins: {
    width: '90%',
    height: 210,
  },
  imageSkills: {
    width: 52,
    height: 52,
  },
  imageSkillsOp: {
    margin: '2.5%'
  },
  text: {
    color: '#a0a2a3',
    fontSize: 12,
    textAlign: 'left',
    fontFamily: 'LolFont-Text',
    margin: '3%'
  },
  subTitulo: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
    fontFamily: 'LolFont-Medium',
    textTransform: 'uppercase',
  },
  titulo: {
    color: '#fff',
    fontSize: 50,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'LolFont-Bold',
    marginTop: -15
  },
  icone: {
    width: 20,
    height: 20,

  },
  iconeGrande: {
    width: 60,
    height: 60,
    tintColor: "white",
  },
  ladoALado: {
    flexDirection: 'row',
    marginVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coluna: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  container: {
    backgroundColor: '#0d0d1c',
    width: '100%',
    height: '100%',
    
  },
  containerVideo: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    objectFit: 'contain', 
    overflow: 'hidden', 
  
  },
  video: {
    aspectRatio: 16 / 9,
    position: 'relative',
  },
  containerLore: {
    margin: '5%',
    width: '90%',
    borderWidth: 2,
    borderColor: '#3a3d3e',
  },
  divisao: {
    backgroundColor: '#a0a2a3',
    borderBottomWidth: 1,
    marginVertical: 10,
    marginTop: 15
  },
  containerText: {
    height: 40,
    width: '60%',
    paddingHorizontal: 15,
    color: '#a0a2a3',
    backgroundColor: '#1e1f23',
    borderRadius: 50,
    marginHorizontal: '5%',
    marginTop: '8%',
    marginBottom: '5%',
  },
  carouselImage: {
    width: 200,
    height: 150,
    margin: 10,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  carouselImageContainer: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  containerConteudo: {
    paddingHorizontal: '5%',
    marginBottom: 20,
    justifyContent: 'flex-start'
  },
  degrade: {
    marginTop: -55,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    marginTop: -50,
    tintColor: '#09111A'
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
    height: '90%',
  },
})