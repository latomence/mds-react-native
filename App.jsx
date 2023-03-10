import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabBar from './src/components/TabBar';
import Todos from './src/components/Todos';

// const Stack = createNativeStackMaavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello !</Text>
      <Todos />
      <TabBar />
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
