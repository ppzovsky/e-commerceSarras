import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#151515',
    },
    box: {
      width: '90%',
      padding: 20,
      borderRadius: 10,
      backgroundColor: '#1F1F22',
      shadowColor: '#020202',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 10,
      position: 'relative',
    },
    imagePicker: {
      position: 'absolute',
      top: -70,
      left: '47%',
      transform: [{ translateX: -30 }],
      width: 120,
      height: 120,
      borderRadius: 90,
      backgroundColor: '#ccc',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      borderColor: '#151515',
      borderWidth: 4
    },
    imagePickerText: {
      fontSize: 18,
      color: '#fff',
      textAlign: 'center',
      textAlignVertical: 'center'
    },
    form: {
      marginTop: 20,
    },
    inputContainer: {
      marginBottom: 1,
    },
    label: {
      fontWeight: 'bold',
      color: '#fff',
      top: 9
    },
    input: {
      borderBottomWidth: 1,
      borderBottomColor: '#fff',
      paddingVertical: 5,
      color: '#fff',
    },
    inputError: {
        borderBottomColor: 'red',
      },
    verificarText: {
    color: 'yellow',
    fontSize: 12,
    marginTop: 5,
    },
    errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    cadastro: {
      width: 150,
      marginTop: 20,
      paddingVertical: 10,
      backgroundColor: '#FFCB11',
      borderRadius: 17,
      alignItems: 'center',
      alignSelf: 'center'
    },
    cadastroText: {
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  export default styles;