import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
  },
});
