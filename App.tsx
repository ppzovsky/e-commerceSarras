import { StyleSheet, Text, View, StatusBar  } from 'react-native';
import Produtos from './src/screens/produto/index';
import global from './Global';
import Home from './src/screens/home/index'
import Login from './src/screens/login/index'

export default function App() {
  return (
    <View style={global.mainContainer}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="#FFCB11"
      />
      <Login />
    </View>
  );
};

export default App;