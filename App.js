// Purpose: Main entry point for the app.
import { HomeScreen } from './screens/HomeScreen';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './navigation/MainNavigator';

export default function App() {
  const [fontsLoaded, error] = useFonts({
    Inter_thin: require("./assets/fonts/Inter_thin.ttf"),
    Inter_medium: require("./assets/fonts/Inter_medium.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
    Inter_bold: require("./assets/fonts/Inter_bold.ttf"),
    Inter_extrabold: require("./assets/fonts/Inter_extrabold.ttf"),
    Inter_black: require("./assets/fonts/Inter_black.ttf"),
    Niramit_regular: require("./assets/fonts/Niramit_regular.ttf"),
    Niramit_semibold: require("./assets/fonts/Niramit_semibold.ttf"),
    Niramit_bold: require("./assets/fonts/Niramit_bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
