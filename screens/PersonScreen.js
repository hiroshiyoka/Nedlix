import { View, Text, Dimensions, Platform } from "react-native";
import React from "react";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";

export default function PersonScreen() {
  return (
    <View>
      <Text>PersonScreen</Text>
    </View>
  );
}
