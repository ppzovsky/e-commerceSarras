import { StyleSheet, Text, View } from 'react-native';
import Produtos from './src/screens/produto/index';
import global from './Global';


export default function App() {
  return (
    <View style={global.mainContainer}>
      <Produtos />
    </View>
  );
}
