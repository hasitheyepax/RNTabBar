import {StyleSheet, Text, View} from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#82AAE3',
  },
  text: {
    color: '#FFF',
    fontSize: 24,
  },
});
