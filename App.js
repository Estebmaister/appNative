import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { color } from "react-native-reanimated";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#eee" }}>
        Open up App.js to start working on your app!
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#223",
    alignItems: "center",
    justifyContent: "center",
  },
});
