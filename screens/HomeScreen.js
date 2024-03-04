import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { styles } from "../theme";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className="mb-3">
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size="28" strokeWidth={2} color="white" />
          <Text className="text-white text-xl font-bold">
            <Text style={styles.text}>Ned</Text>lix
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size="28" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      ></ScrollView>
    </View>
  );
}
