import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
navBar: {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: '8%',
  borderTopLeftRadius: 40,
  borderTopRightRadius: 40,
  justifyContent: 'flex-end', 
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
  width: '95%',
  height: '95%',
  borderRadius: 100,
  backgroundColor: '#FFCB11',
  justifyContent: 'center',
  alignItems: 'center',
},
backgroundButtonSearch: {
  marginTop: -60,
  width: '20%',
  height: '130%',
  borderRadius: 100,
  backgroundColor: '#313638',
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 5
},

});


export default styles;