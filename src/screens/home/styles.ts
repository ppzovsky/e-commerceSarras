import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainHomeContainer: {
    width: '100%',
    height: 800,
    marginBottom: '40%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconInput: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerIcon: {
    backgroundColor: 'white',
    width: '55%',
    height: '60%',
    alignContent:'center'
  },
  iconPosition: {
    height: '32%',
    width: '12%',
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
    width:'60%',
  },
  introTextContainer: {
    marginTop: '20%',
    width: '90%'
  },
  welcomeText: {
    color: 'white',
    fontSize: 20
  },
  boldUser: {
    fontWeight: 'bold'
  },
  textOperation: {
    color: 'white',
    marginBottom: 5,
    marginTop: 15,
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
})

export default styles;