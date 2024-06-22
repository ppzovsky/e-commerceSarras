import { StyleSheet, Text, View } from 'react-native';
import Produtos from './src/screens/produto/index';
import global from './Global';
import Search from './src/screens/search';


const App: React.FC = () => {
  return (
    <View style={global.mainContainer}>
      <Search/>
      {/* <Produtos/> */}
    </View>
  );
}
