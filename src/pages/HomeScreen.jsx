import { StyleSheet, Text, View } from 'react-native';

export function HomeScreen() {
  return (
    <View>
      <Text style={styles.todo}>Home</Text>
    </View>
  );
}


export const styles = StyleSheet.create({
  todo: {
    color: 'red',
    textDecorationLine: "underline",
  },
});