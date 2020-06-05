import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import global from "../css/global";

export default ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      In a Tic-tac-toe, two players, <Text style={global.x}>X</Text> and{" "}
      <Text style={global.o}>O</Text>, take turns marking the spaces in a 3×3
      grid.
    </Text>
    <Text style={styles.text}>
      The player who succeeds in placing three of their marks in a horizontal,
      vertical, or diagonal row is the winner.
    </Text>
    <Text style={styles.text}>
      If all spaces were marked and no lines have been formed, the game is
      drawn.
    </Text>
    <TouchableOpacity
      style={global.button}
      onPress={() => navigation.replace("Game")}
    >
      <Text style={[global.buttonText, styles.buttonText]}>Play!</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    marginHorizontal: 10,
    fontSize: 15,
  },
  buttonText: {
    fontSize: 25,
  },
});
