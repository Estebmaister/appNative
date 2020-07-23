import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { color } from "react-native-reanimated";
import styles from "./App.style";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logo</Text>
      <Text style={styles.text}>Donate Application in React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}
