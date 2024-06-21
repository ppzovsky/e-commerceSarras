import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
})

export default styles;