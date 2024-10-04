import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const Welcome = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar style="auto" />

      <ImageBackground
        source={require("./../assets/WelcomeBG.png")} // Change this to your background image path
        style={styles.contentContainer}
      >
        <View style={styles.welcomeContent}>
          <Text style={styles.welcomeHeading}>Welcome</Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
        <View></View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeContent: {
    // backgroundColor: "red",
    marginTop: "135%",
    width: "90%",
    height: "35%",
    alignItems: "center",
  },
  welcomeHeading: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
