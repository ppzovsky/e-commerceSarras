import { StyleSheet, Text, View, StatusBar  } from 'react-native';
import Produtos from './src/screens/produto/index';
import global from './Global';
import { NavigationContainer } from '@react-navigation/native';
import Navigate from './src/routes/stack';
import { UserProvider } from './src/components/useContext/userProfile';

export default function App() {
  return (
      <UserProvider>
        <NavigationContainer>
            <StatusBar
              barStyle="light-content"
              backgroundColor="#FFCB11"
            />
            <Navigate />
        </NavigationContainer>
      </UserProvider>
  );
};

