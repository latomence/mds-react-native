import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Todos from './src/components/Todos';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello !</Text>
      <Todos />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  }
});
