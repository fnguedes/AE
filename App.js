import 'react-native-gesture-handler';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Routes from './src/routes/Routes.js';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar hidden={true}/>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
}

