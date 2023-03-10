import { StyleSheet, Text, View } from 'react-native';

export function DetailScreen() {
  return (
    <View>
      <Text style={styles.todo}>Todos</Text>
    </View>
  );
}


export const styles = StyleSheet.create({
  todo: {
    color: 'red',
    textDecorationLine: "underline",
  },
});