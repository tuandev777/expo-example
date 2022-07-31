import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import RootStackScreen from "./src/routes/RootNavigator";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <RootStackScreen />
    </>
  );
}
