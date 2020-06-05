import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("Game")}
    >
      <Text style={styles.buttonText}>Play Game</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("Instructions")}
    >
      <Text style={styles.buttonText}>Instructions</Text>
    </TouchableOpacity>
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Created by RenanTKN -{" "}
        <AntDesign
          name="github"
          size={20}
          onPress={() => Linking.openURL("https://github.com/RenanTKN")}
        />
        {" - "}
        <AntDesign
          name="gitlab"
          size={20}
          onPress={() => Linking.openURL("https://gitlab.com/renantkn")}
        />
        {" - "}
        <AntDesign
          name="instagram"
          size={20}
          onPress={() => Linking.openURL("https://www.instagram.com/renantkn/")}
        />
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dff0ef",
    alignItems: "stretch",
    justifyContent: "space-around",
    paddingVertical: 150,
    paddingHorizontal: 50,
  },
  button: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#3D94F6",
    borderRadius: 20,
    padding: 25,
    elevation: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
  },
  footer: {
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(61,148,246, 0.15)",
  },
  footerText: {
    fontSize: 18,
  },
});
