import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Game from "./screens/Game";
import Instructions from "./screens/Instructions";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Game"
          component={Game}
          options={{ title: "Tic-Tac-Toe" }}
        />
        <Stack.Screen name="Instructions" component={Instructions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
