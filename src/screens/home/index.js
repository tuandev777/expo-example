import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ButtonElement from "../../components/elements/ButtonElement";
import TextElement from "../../components/elements/TextElement";
import SCREENS_NAME from "../../constants/screens";

const HomeScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextElement title="Home" />
      <ButtonElement
        title="Navigate to Account"
        onPress={() => navigation.navigate(SCREENS_NAME.ACCOUNT_SCREEN)}
      />
    </View>
  );
};

export default HomeScreen;
