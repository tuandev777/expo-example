import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SCREENS_NAME from "../constants/screens";
import AccountScreen from "../screens/account";
import HomeScreen from "../screens/home";
import SettingScreen from "../screens/setting";
import DrawerStackScreen from "./DrawerNavigator";
import TabStackScreen from "./TabNavigator";

const RootStack = createNativeStackNavigator();

const RootStackScreen = (props) => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
      //  screenOptions={{ headerShown: false }}
      >
        {/* drawer */}
        <RootStack.Screen
          name={SCREENS_NAME.DRAWER_STACK}
          component={DrawerStackScreen}
        />
        {/* tab */}
        {/* <RootStack.Screen
          name={SCREENS_NAME.TAB_STACK}
          component={TabStackScreen}
        /> */}
        {/* multi screen */}
        {/*<RootStack.Screen
          name={SCREENS_NAME.ACCOUNT_SCREEN}
          component={AccountScreen}
        />
        <RootStack.Screen
          name={SCREENS_NAME.SETTING_SCREEN}
          component={SettingScreen}
        /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;
