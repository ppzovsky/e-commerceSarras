import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import Produtos from './src/screens/produto/index';
import global from './Global';
import Home from './src/screens/home/index';
import Login from './src/screens/login/index';
import PerfilStack from './src/screens/perfil';

export default function App() {
  return (
    <NavigationContainer> 
      <View style={global.mainContainer}>
        <StatusBar 
          barStyle="light-content" 
          backgroundColor="#FFCB11"
        />
        <PerfilStack />
      </View>
    </NavigationContainer>
  );
};