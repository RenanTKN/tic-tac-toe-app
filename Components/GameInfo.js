import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import global from "../css/global";

export default ({
  status,
  xPoints,
  oPoints,
  handleSortToggle,
  isAscending,
  moves,
}) => (
  <View style={styles.gameInfo}>
    <View style={styles.scoreboardContainer}>
      <Text style={styles.status}>{status}</Text>
      <View style={styles.scoreboard}>
        <View style={styles.scoreboardComponent}>
          <Text style={global.x}>X</Text>
        </View>
        <View style={styles.scoreboardComponent}>
          <Text style={global.o}>O</Text>
        </View>
        <View style={styles.scoreboardComponent}>
          <Text>{xPoints}</Text>
        </View>
        <View style={styles.scoreboardComponent}>
          <Text>{oPoints}</Text>
        </View>
      </View>
    </View>
    <TouchableOpacity
      style={[global.button, styles.orderButton]}
      onPress={() => handleSortToggle()}
    >
      <Text style={global.buttonText}>
        <AntDesign name={isAscending ? `arrowdown` : `arrowup`} />
        {isAscending ? "descending" : "ascending"}
      </Text>
    </TouchableOpacity>
    <ScrollView
      style={styles.moveListContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.moveList}>
        <View>{moves}</View>
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  gameInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 2,
    width: "100%",
  },
  scoreboardContainer: {
    alignItems: "center",
  },
  status: {
    fontWeight: "bold",
  },
  scoreboard: {
    display: "flex",
    flexWrap: "wrap",
    width: 40,
    flexDirection: "row",
  },
  scoreboardComponent: {
    display: "flex",
    alignItems: "center",
    width: 20,
    marginVertical: 3,
  },
  orderButton: {
    width: 150,
    backgroundColor: "#5bc0de",
    borderColor: "#46b8da",
  },
  moveListContainer: {
    display: "flex",
    width: "100%",
  },
  moveList: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 5,
  },
});
