import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { color } from "react-native-reanimated";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logo</Text>
      <Text style={styles.text}>Hello World from app.js!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#214192",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    position: "absolute",
    top: 100,
    paddingVertical: 40,
    borderWidth: 4,
    borderColor: "#223",
    borderRadius: 100,
    width: 150,
    height: 150,
    backgroundColor: "#00ff8f",
    color: "#223",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
  text: {
    color: "#eee",
    fontSize: 30,
  },
});
