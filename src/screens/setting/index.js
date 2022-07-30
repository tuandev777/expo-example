import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SCREENS_NAME from "../../constants/screens";

const SettingScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        onPress={() => navigation.navigate(SCREENS_NAME.HOME_SCREEN)}
      >
        <Text>Setting</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingScreen;
