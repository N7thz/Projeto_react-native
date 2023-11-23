import { StyleSheet, Platform } from "react-native"

export const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 225,
    borderRadius: 10,
    margin: 2.5
  },
  maestria0: {
    width: 40,
    height: 40,
    marginRight: 10
  } ,
  fundoMaestria: {
    width: 120,
    height: 60,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius:10
  },
  text: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'left'
  },
  textClaro: {
    color: '#a0a2a3',
    fontSize: 12,
    fontFamily: 'LolFont-Medium',
    textAlign: 'left'
  },
  titulo: {
    color: '#9f9b8d',
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 3,
    marginTop: 3
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5, 
    position: 'absolute',
  },
  coluna: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  container: {
    alignItems: 'center',
    margin: 2
  },
  containerMaestria: {
    justifyContent: "center",
    alignItems: "center",
    width:'100%',
    bottom: 0,
    position: "absolute"
  },
  divisao: {
    backgroundColor: '#a0a2a3',
    borderBottomWidth: 1,
    marginVertical: 10,
    marginTop: 15
  }
})