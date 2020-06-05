import React from "react";
import { StyleSheet, TouchableOpacity, Animated } from "react-native";
import { Easing } from "react-native-reanimated";
import global from "../css/global";

export default ({ highlight, value, onClick }) => {
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <TouchableOpacity
      style={[styles.square, highlight ? styles.highlight : null]}
      onPress={onClick}
      activeOpacity={1}
    >
      <Animated.Text
        style={[
          highlight ? { transform: [{ rotateY: spin }] } : null,
          value === "X" ? global.x : global.o,
          styles.squareText,
        ]}
      >
        {value}
      </Animated.Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    backgroundColor: "#fff",
    width: 55,
    height: 55,
    margin: 0.5,
  },
  squareText: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  highlight: {
    backgroundColor: "#ffa",
  },
});
