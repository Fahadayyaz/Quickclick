import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import Splash from "./screens/Splash"; // Ensure ke yeh path sahi hai

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    CustomFont: require("./assets/fonts/CustomFont.ttf"), // Ensure ke yeh file maujood hai
  });

  // Loading state
  if (!loaded) {
    return (
      <React.Fragment>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Loading Fonts...
        </Text>
      </React.Fragment>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
