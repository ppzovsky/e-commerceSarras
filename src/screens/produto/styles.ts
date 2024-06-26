import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#151515',
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      width: '100%',
      padding: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    nome: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#fff',
      flex: 1,
      top: 22
    },
    buttonContainer: {
      flexDirection: 'row',
      marginLeft: 10,
      top: 36,
    },
    editButton: {
      alignItems: 'center',
      marginRight: 10,
    },
    deleteButton: {
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      marginTop: 5,
    },
    avaliacaoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      top: 7
    },
    starsContainer: {
      flexDirection: 'row',
      marginRight: 10,
    },
    avaliacaoNumero: {
      fontSize: 15,
      color: '#fff',
      right: 5,
      bottom: 1
    },
    imageContainer: {
      width: '110%',
      height: '45%',
      marginBottom: 20,
      overflow: 'hidden',
      backgroundColor: 'green',
      borderRadius: 10,
      alignSelf: 'center',
      borderStyle: 'solid',
      borderWidth: 5,
      borderColor: '#777'
    },
    image: {
      width: '100%',
      height: '100%',
    },
    section: {
      marginBottom: 15,
    },
    sectionTitle: {
      fontSize: 18,
      color: '#777',
      marginBottom: 5,
    },
    descricao: {
      fontSize: 16,
      color: '#fff',
      textAlign: 'justify',
    },
    precoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    preco: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    },
    codigo: {
      fontSize: 16,
      color: '#777',
      marginLeft: 10,
    },
    qtdEstoque: {
      fontSize: 16,
      color: '#777',
    },
    input:{
      fontSize: 22,
      color: '#FFCC11',
      fontWeight: 'bold',
    }
  });