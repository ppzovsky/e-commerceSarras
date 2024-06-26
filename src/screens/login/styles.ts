import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainerLogin: {
    flex: 1,
    backgroundColor: '#151515',
    height: 825,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEntry: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  formContainer: {
    width: '85%',
    height: 400,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  label: {
    color: 'white',
    marginTop: 20,
    marginBottom: 1,
    fontSize: 15
  },
  inputArea: {
    backgroundColor: 'white',
    width: '100%',
    height: 60,
    borderRadius: 5,
    fontSize: 17,
    color: 'black',
    padding: 15,
  },
  buttons: {
    marginTop: '15%',
    gap: 15
  },
  buttonLogin: {
    width: '100%',
    height: 70,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCB11'
  },
  buttonLoginText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowRadius: 10,
    textShadowOffset: {
      width: 1,
      height: 3,
    }
  }
});

export default styles;