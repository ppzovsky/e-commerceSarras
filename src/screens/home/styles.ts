import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainHomeContainer: {
    flex: 1,
    backgroundColor: '#151515',
    alignItems: 'center',
  },
  introTextContainer: {
    marginTop: '5%',
    width: '90%'
  },
  welcomeText: {
    color: 'white',
    fontSize: 25
  },
  boldUser: {
    fontWeight: 'bold',
    color: '#FFCB11'
  },
  textOperation: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: '2%',
    alignSelf: 'center'
  }, 
  containerCrudButtons: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    justifyContent: 'center',
    alignContent: 'center',
    elevation: 10,
  },
  crudButtons: {
    width: '45%',
    height: '75%',
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
    flex: 1,
    width: '100%',
    backgroundColor: '#151515',
    paddingVertical: 15,
    gap: 10,
  }
})

export default styles;