import { StyleSheet, Text, View } from 'react-native';
import Produtos from './src/screens/catalogo/index';
import Cadastro from './src/screens/cadastro';
import global from './Global';
import Search from './src/screens/search';
import Login from './src/screens/login';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './src/routes/drawer';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}
