import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ButtonElement from "../../components/elements/ButtonElement";
import TextElement from "../../components/elements/TextElement";
import SCREENS_NAME from "../../constants/screens";
import * as LocalAuthentication from "expo-local-authentication";
const AccountScreen = (props) => {
  const { navigation } = props;

  const testFingerPrint = async () => {
    try {
      const res = await LocalAuthentication.authenticateAsync();
      console.log("res", res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextElement title="Account" />
      <ButtonElement
        title="Navigate to Home"
        onPress={() => navigation.navigate(SCREENS_NAME.ACCOUNT_SCREEN)}
      />

      <ButtonElement title="Finger Print" onPress={testFingerPrint} />
    </View>
  );
};

export default AccountScreen;
