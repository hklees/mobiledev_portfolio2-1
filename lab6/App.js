import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginApp from './LoginApp';
import LoginCount from './LoginCount';
import Timer from './Timer';
export default function App() {
  return (
    <View style={styles.container}>
      <Timer></Timer>
      <LoginApp />
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