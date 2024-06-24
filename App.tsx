import global from './Global';
import { NavigationContainer } from '@react-navigation/native';
import Navigate from './src/routes/stack';
import { StatusBar } from 'react-native';

export default function App() {
  return (
      <NavigationContainer>
           <StatusBar 
            barStyle="light-content" 
            backgroundColor="#FFCB11"
          />
          <Navigate />
      </NavigationContainer>
  );
};
