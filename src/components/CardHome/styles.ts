import { StyleSheet, Platform } from "react-native"

export const styles = StyleSheet.create({
  image: {
    width: 105,
    height: 105,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'left'
  },
  textClaro: {
    color: '#a0a2a3',
    fontSize: 12,
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
  },
  coluna: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  container: {
    //backgroundColor: '#191a1c',
    borderRadius: 20,
    padding: 5, 
    alignItems: "center"
  },
  divisao: {
    backgroundColor: '#a0a2a3',
    borderBottomWidth: 1,
    marginVertical: 10,
    marginTop: 15
  }
})