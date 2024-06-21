import { StyleSheet, Text, View } from 'react-native';
import Produtos from './src/screens/produto/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Produtos/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
