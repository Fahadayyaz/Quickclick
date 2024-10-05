import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./screens/Splash";
import Welcome from "./screens/Welcome";
import LoginSignUP from "./screens/LoginSignUP";
import Home from "./screens/Home";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font"; // Importing useFonts from expo-font

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Poppins_SemiBold: require("./assets/fonts/Inter_ExtraBold.ttf"),
    Poppins_Medium: require("./assets/fonts/Inter_ExtraBold.ttf"),
    PlusJakartaSans_Regular: require("./assets/fonts/Inter_ExtraBold.ttf"),
    PlusJakartaSans_Medium: require("./assets/fonts/Inter_ExtraBold.ttf"),
    PlusJakartaSans_Bold: require("./assets/fonts/Inter_ExtraBold.ttf"),
    Inter_ExtraBold: require("./assets/fonts/Inter_ExtraBold.ttf"),
  });

  if (!loaded) {
    return null; // Show nothing while fonts are loading
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="LoginSignUP" component={LoginSignUP} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
