import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Drawer from './src/routes/Drawer.js';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </SafeAreaView>
  );
}

