import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SCREENS_NAME from "../constants/screens";
import AccountScreen from "../screens/account";
import HomeScreen from "../screens/home";
import SettingScreen from "../screens/setting";
import { AntDesign } from "@expo/vector-icons";

const TabStack = createBottomTabNavigator();

const TabStackScreen = (props) => {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
        name={SCREENS_NAME.HOME_SCREEN}
        component={HomeScreen}
      />
      <TabStack.Screen
        options={{
          tabBarIcon: () => <AntDesign name="user" size={24} color="black" />,
        }}
        name={SCREENS_NAME.ACCOUNT_SCREEN}
        component={AccountScreen}
      />
      <TabStack.Screen
        options={{
          tabBarIcon: () => (
            <AntDesign name="setting" size={24} color="black" />
          ),
        }}
        name={SCREENS_NAME.SETTING_SCREEN}
        component={SettingScreen}
      />
    </TabStack.Navigator>
  );
};

export default TabStackScreen;
