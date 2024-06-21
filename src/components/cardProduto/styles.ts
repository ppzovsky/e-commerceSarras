import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 116,
    borderRadius: 24.32,
    backgroundColor: '#232327',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    gap: 16,
    alignSelf: 'center',
  },
  image:{
    width: '40%',
    height: '100%',
  },
  texto:{
    gap: 5
  },
  nome:{
    color: '#E1E1E1',
    fontSize: 14,
    fontWeight: 'bold',
  },
  descricao:{
    color: '#C4C4C4',
    fontSize: 12,
  }, 
  preco:{
    color: '#FFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});