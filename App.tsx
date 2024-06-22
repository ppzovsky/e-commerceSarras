import global from './Global';
import { NavigationContainer } from '@react-navigation/native';
import Navigate from './src/routes/stack';
import { View } from 'react-native';

export default function App() {
  return (
      <NavigationContainer>
          <Navigate />
      </NavigationContainer>
  );
}
