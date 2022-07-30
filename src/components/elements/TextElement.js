import React from "react";
import { Text } from "react-native";

const TextElement = ({ title = "", numberOfLines = 1, ...props }) => {
  return (
    <Text numberOfLines={numberOfLines} {...props}>
      {title}
    </Text>
  );
};

export default TextElement;
