import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 100,
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
    color: '#FFCB11',
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
  modalContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal:{
    width: 300,
    padding: 15,
    paddingBottom: 20,
    backgroundColor: '#151515',
    borderRadius: 10,
    alignItems: 'center',
    gap: 10
  },
  button:{
    backgroundColor: '#FFCB11',
    width: '60%',
    height: 35,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonClose:{
    alignSelf: 'flex-end'
  },
  textButton:{
    color: '#151515',
    fontSize: 18,
    fontWeight: 'bold',
  },

});