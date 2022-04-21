import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginApp from './LoginApp';
import LoginCount from './LoginCount';
import Greeting from './Time';
export default function App() {
  return (
    <View style={styles.container}>
      <LoginApp />
      <Greeting></Greeting>
      <LoginCount></LoginCount>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});