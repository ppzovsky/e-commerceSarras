import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/login/index';
import Home from './src/screens/home/index'
import global from './Global'

export default function App() {
  return (
    <View style={global.mainContainer}>
      <StatusBar style="light" />
      <Home />
    </View>
  );
}


