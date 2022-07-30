import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ButtonElement = ({ title = "", onPress = () => {}, ...props }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} {...props}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});

export default ButtonElement;
