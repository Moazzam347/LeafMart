import StackNavigation from './src/navigation/StackNavigation';
import { useFonts } from "expo-font";

export default function App() {

  const [fontsLoaded] = useFonts({
    bold: require("./src/assets/fonts/Raleway-Bold.ttf"),
    medium: require("./src/assets/fonts/Raleway-Medium.ttf"),
    regular: require("./src/assets/fonts/Raleway-Regular.ttf"),
  }) 

  if (!fontsLoaded) {
    return null;
  }

  return (
    <StackNavigation/>
  );
}

