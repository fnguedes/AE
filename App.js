import 'react-native-gesture-handler';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Routes from './src/routes/Routes.js';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
}

