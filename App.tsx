import global from './Global';
import { NavigationContainer } from '@react-navigation/native';
import Navigate from './src/routes/stack';
import { StatusBar } from 'react-native';
import { UserProvider } from './src/contexts/userProfile';
import Produto from './src/screens/produto';

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
