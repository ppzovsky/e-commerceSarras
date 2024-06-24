import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainHomeContainer: {
    backgroundColor: '#151515',
    alignItems: 'center',
  },
  introTextContainer: {
    marginTop: '20%',
    width: '90%'
  },
  welcomeText: {
    color: 'white',
    fontSize: 25
  },
  boldUser: {
    fontWeight: 'bold'
  },
  textOperation: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '5%',
    alignSelf: 'center'
  }, 
  containerCrudButtons: {
    width: '100%',
    height: 170,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    justifyContent: 'center',
    alignContent: 'center',
    elevation: 10
  },
  crudButtons: {
    width: '45%',
    height: '45%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCB11',
  },
  textCrudButton: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    fontWeight: '900',
    flexWrap: 'wrap'
  },
  list:{
    width: '100%',
    backgroundColor: '#151515',
    paddingVertical: 15,
    gap: 15
  }
})

export default styles;