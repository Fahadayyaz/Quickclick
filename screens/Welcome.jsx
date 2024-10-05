import React, { useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  const [borderColor, setBorderColor] = useState("rgba(149, 149, 149, 1)"); // State to control border color

  const goToLoginSignUP = () => {
    // Change the border color to black when pressed
    setBorderColor("black");
    // Navigate to LoginSignUP screen after 1 second
    setTimeout(() => {
      navigation.navigate("LoginSignUP");
    }, 1000); // 1000 milliseconds = 1 second
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar style="auto" />

      <ImageBackground
        source={require("./../assets/WelcomeBG.png")} // Change this to your background image path
        style={styles.contentContainer}
      >
        <View style={styles.welcomeContent}>
          <Text style={styles.welcomeHeading}>Welcome</Text>
          <Text style={styles.textLine}>
            Shop the latest trends and enjoy a seamless shopping experience at
            your fingertips
          </Text>

          {/* Pressable Circle with Separate Outer Border */}
          <Pressable
            onPress={goToLoginSignUP}
            style={styles.outerCircleContainer}
          >
            <View style={[styles.outerCircle, { borderColor }]}>
              <View style={styles.innerCircle}>
                <AntDesign
                  name="arrowright"
                  size={70}
                  color="#fff"
                  style={styles.nextArrow}
                />
              </View>
            </View>
          </Pressable>
        </View>
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
    marginTop: "135%",
    width: "90%",
    height: "35%",
    alignItems: "center",
  },
  welcomeHeading: {
    marginTop: "5%",
    color: "white",
    fontSize: 29.43,
    fontFamily: "Inter_ExtraBold",
  },
  textLine: {
    color: "white",
    fontSize: 17.17,
    textAlign: "center",
    marginTop: 5,
  },
  outerCircleContainer: {
    marginTop: "18%",
    justifyContent: "center",
    alignItems: "center",
  },
  outerCircle: {
    width: 72, // Outer circle width (2px larger than inner circle)
    height: 72, // Outer circle height
    borderRadius: 34, // Border radius for the outer circle
    borderWidth: 2, // Border width for outer circle
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    width: 60, // Inner circle width
    height: 60, // Inner circle height
    borderRadius: 30, // Border radius for the inner circle
    backgroundColor: "#000", // Inner circle background color
    justifyContent: "center",
    alignItems: "center",
  },
  nextArrow: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
