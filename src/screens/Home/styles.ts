import { StyleSheet, Platform } from "react-native"

export const styles = StyleSheet.create({
  image: {
    width: 165,
    height: 165,
    borderRadius: 10,
    margin: 5
  },
  text: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center'
  },
  textClaro: {
    color: '#a0a2a3',
    fontSize: 12,
    textAlign: 'left'
  },
  titulo: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 8,
    marginTop: 8
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
    backgroundColor: '#09111A',
    marginTop: 15,
    width: '100%',
    alignItems: 'center'
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
    marginBottom: '5%'
}
})