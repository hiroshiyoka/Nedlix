import { View, Text, Dimensions, Platform, ScrollView } from "react-native";
import React from "react";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";

export default function PersonScreen() {
  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{ paddingBottom: 20 }}
    ></ScrollView>
  );
}
