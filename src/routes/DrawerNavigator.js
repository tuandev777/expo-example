import SCREENS_NAME from "../constants/screens";
import AccountScreen from "../screens/account";
import HomeScreen from "../screens/home";
import SettingScreen from "../screens/setting";
import { AntDesign } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

const DrawerStack = createDrawerNavigator();

const DrawerStackScreen = (props) => {
  return (
    <DrawerStack.Navigator>
      <DrawerStack.Screen
        name={SCREENS_NAME.HOME_SCREEN}
        component={HomeScreen}
      />
      <DrawerStack.Screen
        name={SCREENS_NAME.ACCOUNT_SCREEN}
        component={AccountScreen}
      />
      <DrawerStack.Screen
        name={SCREENS_NAME.SETTING_SCREEN}
        component={SettingScreen}
      />
    </DrawerStack.Navigator>
  );
};

export default DrawerStackScreen;
