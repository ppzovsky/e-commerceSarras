import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainHomeContainer: {
<<<<<<< HEAD
    flex: 1,
    backgroundColor: '#151515',
=======
    width: '100%',
    height: 800,
    marginBottom: '40%',
    justifyContent: 'space-evenly',
>>>>>>> origin/kayque
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
<<<<<<< HEAD
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '5%'
=======
    marginBottom: 5,
    marginTop: 15,
    alignSelf: 'center'
>>>>>>> origin/kayque
  }, 
  containerCrudButtons: {
    width: '100%',
    height: 170,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    justifyContent: 'center',
    alignContent: 'center',
    elevation: 10,
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
<<<<<<< HEAD
  teste:{
    flex: 0.9,
    backgroundColor: '#151515',
    paddingVertical: 15,
  }
=======
  mainProductContainer: {
    gap: 10,
    marginBottom: '30%',
    height: '70%'
  },
  containerProdutos:{
    width: 380,
    height: '100%',
    paddingVertical: 15,
  },
  imgProduct: {
    width: '25%',
    height: '100%',
    backgroundColor: 'white',
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15
  },
  textProductInfo: {
    color: 'white',
    marginBottom: 5,
    marginTop: 15
  },
  productInfo: {
    width: '80%',
    height: '40%',
    alignContent: 'center',
    alignItems: 'center',

  },
  innerTextProduct: {
    padding: 3,
    color:'white'
  },
  fontChange: {
    color: 'gray'
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '7%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'flex-end',
    backgroundColor: '#2B2E2F', 
  },
  innerContainerNav: {
    flexDirection: 'row',
    backgroundColor: '#232327',
    width: '100%',
    height: '90%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },  
  mainButtonSearch: {
    width: '90%',
    height: '100%',
    borderRadius: 100,
    backgroundColor: '#FFCB11',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundButtonSearch: {
    marginTop: -60,
    width: '15%',
    height: '100%',
    borderRadius: 100,
    backgroundColor: '#313638',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5
  },
>>>>>>> origin/kayque
})

export default styles;