import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginApp from './LoginApp';
import HelpCount from './HelpCount';
import Timer from './Timer';
import Greeting from './Greeting';

export default function App() {
  return (
    <View style={styles.container}>
      <Greeting></Greeting>
      <br></br>
      <Timer></Timer>
      <br></br>
      <LoginApp />
      <br></br>
      <HelpCount></HelpCount>
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
  button: {
    padding: 15,
  }
});