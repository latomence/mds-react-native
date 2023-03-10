import { StyleSheet, Text, View } from 'react-native';

export default function TabBar() {
  return (
    <View style={styles.bottom}>
        <Text style={styles.menu}>Header</Text>
    </View>
  );
}


export const styles = StyleSheet.create({
  bottom: {
    backgroundColor: '#000',
    display: "flex",
    position: "absolute",
    height: 35,
    width: '100%',
    paddingHorizontal: 10,
    bottom: 0,
  },
  menu: {
    color: '#fff',
  },
});