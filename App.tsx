import { StyleSheet, Text, View } from 'react-native';
import Produtos from './src/screens/produto/index';
import global from './Global';
import Search from './src/screens/search';


export default function App() {
  return (
    <View style={global.mainContainer}>
      <Search/>
      {/* <Produtos/> */}
    </View>
  );
}
