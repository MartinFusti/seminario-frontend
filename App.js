import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from './styles/globalStyles';
import { HomeScreen } from './screens/HomeScreen';

export default function App() {
  return (
    <HomeScreen />
  );
}
